import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";

const fontBody = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontDisplay = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robinson Celis | VideoNet",
  description:
    "Landing page profesional de Robinson Celis, Director de Soluciones Tecnologicas en VideoNet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fontBody.variable} ${fontDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
