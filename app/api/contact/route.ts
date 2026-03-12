import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  company: z.string().max(120).optional().or(z.literal("")),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10).max(1200),
  website: z.string().max(120).optional().or(z.literal("")),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) {
    return true;
  }
  entry.count += 1;
  return false;
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (allowedOrigins.length > 0) {
    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Origen no autorizado." },
        { status: 403 }
      );
    }
  } else if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json(
          { error: "Origen no autorizado." },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Origen no autorizado." },
        { status: 403 }
      );
    }
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta mas tarde." },
      { status: 429 }
    );
  }

  let payload: z.infer<typeof schema>;
  try {
    payload = schema.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "Datos invalidos." },
      { status: 400 }
    );
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const transporter = getTransporter();
  if (!transporter) {
    return NextResponse.json(
      { error: "Contacto no configurado." },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO || process.env.SMTP_TO;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!to || !from) {
    return NextResponse.json(
      { error: "Contacto no configurado." },
      { status: 500 }
    );
  }

  const text = [
    "Nuevo contacto desde landing de VideoNet:",
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    payload.company ? `Empresa: ${payload.company}` : "Empresa: --",
    payload.phone ? `Telefono: ${payload.phone}` : "Telefono: --",
    "",
    "Mensaje:",
    payload.message,
    "",
    `IP: ${ip}`,
    `User-Agent: ${request.headers.get("user-agent") || "--"}`,
  ].join("\n");

  await transporter.sendMail({
    to,
    from,
    replyTo: payload.email,
    subject: `Nuevo contacto - ${payload.name}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
