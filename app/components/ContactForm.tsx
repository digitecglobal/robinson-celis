"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  website: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error inesperado.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-4 rounded-3xl border border-white/10 bg-ink-900/70 p-6 shadow-[0_40px_120px_rgba(8,14,36,0.6)]"
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={updateField}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-ice-200">
          Nombre
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Nombre y apellido"
            required
            className="h-12 rounded-2xl border border-white/10 bg-ink-800/80 px-4 text-base text-white outline-none transition focus:border-brand-300"
          />
        </label>
        <label className="grid gap-2 text-sm text-ice-200">
          Correo
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="correo@empresa.com"
            required
            className="h-12 rounded-2xl border border-white/10 bg-ink-800/80 px-4 text-base text-white outline-none transition focus:border-brand-300"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-ice-200">
          Empresa
          <input
            name="company"
            value={form.company}
            onChange={updateField}
            placeholder="Nombre de la empresa"
            className="h-12 rounded-2xl border border-white/10 bg-ink-800/80 px-4 text-base text-white outline-none transition focus:border-brand-300"
          />
        </label>
        <label className="grid gap-2 text-sm text-ice-200">
          Teléfono
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
          placeholder="Celular, WhatsApp o PBX"
            className="h-12 rounded-2xl border border-white/10 bg-ink-800/80 px-4 text-base text-white outline-none transition focus:border-brand-300"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-ice-200">
        Mensaje
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Cuéntanos brevemente el proyecto"
          required
          rows={5}
          className="rounded-2xl border border-white/10 bg-ink-800/80 px-4 py-3 text-base text-white outline-none transition focus:border-brand-300"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand-500 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <div className="text-xs text-ice-400">
          {status === "success" && "Mensaje enviado. Te contactaremos pronto."}
          {status === "error" && error}
          {status === "idle" && "Respondemos en menos de 24 horas hábiles."}
        </div>
      </div>
    </form>
  );
}
