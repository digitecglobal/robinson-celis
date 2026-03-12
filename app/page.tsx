import Image from "next/image";
import ContactForm from "./components/ContactForm";

const whatsappNumber = "573173040506";
const whatsappMessage =
  "Hola Robinson, quiero una asesoría en soluciones tecnológicas.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const solutions = [
  "Audio y videoconferencia",
  "Señalización digital",
  "Streaming y broadcast",
  "Monitores interactivos",
  "Soluciones de videowall",
  "Audio y video en red",
  "Cableado estructurado",
];

const services = [
  {
    title: "Asesoría experta",
    description:
      "Acompañamiento desde el diagnóstico hasta la puesta en marcha del proyecto AV.",
  },
  {
    title: "Distribución mayorista",
    description:
      "Portafolio integral con soluciones y conectividad profesional para integradores.",
  },
  {
    title: "Soporte técnico",
    description:
      "Instalación, capacitación y postventa con garantía robusta y respuesta rápida.",
  },
  {
    title: "Proyectos a la medida",
    description:
      "Soluciones personalizadas según el tipo de espacio, uso y presupuesto.",
  },
];

const productLines = [
  "Adaptadores y conectores",
  "Cables profesionales",
  "Convertidores y repetidores",
  "Distribuidores y splitter de señal",
  "Extensores de señal",
  "Matrices de video y audio",
  "Switch de señal",
  "Streaming y capturadoras",
  "Soportes y montaje",
  "Telones de proyección",
  "Videoconferencia",
];

const markets = [
  "Corporativo",
  "Educativo",
  "Retail y hotelería",
  "Sector público",
];

const values = [
  "Ética profesional",
  "Compromiso",
  "Trabajo en equipo",
  "Innovación",
  "Respeto",
];

const techHighlights = [
  "Salas híbridas y colaborativas",
  "Integración AV end-to-end",
  "Gestión de señal y control",
  "Soporte especializado",
];

const galleryItems = [
  {
    src: "/media/gallery-audio-rack.jpg",
    alt: "Rack de audio y procesamiento con equipos profesionales",
  },
  {
    src: "/media/gallery-cables.jpg",
    alt: "Conectividad y cableado estructurado para AV",
  },
  {
    src: "/media/gallery-control-room.jpg",
    alt: "Centro de control con videowall y monitoreo",
  },
  {
    src: "/media/gallery-conference-city.jpg",
    alt: "Sala corporativa con pantalla y vista panorámica",
  },
  {
    src: "/media/gallery-video-conference.jpg",
    alt: "Sala de videoconferencia con display principal",
  },
  {
    src: "/media/gallery-projector.jpg",
    alt: "Espacio de presentación con proyección y audio",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.3em] focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(47,111,211,0.35),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(226,75,59,0.25),transparent_45%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_40%,transparent_60%)] opacity-60" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-8">
        <div className="flex items-center">
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-ink-800/70 px-4 py-2 shadow-[0_20px_60px_rgba(8,14,36,0.45)]">
            <Image
              src="/media/logo.png"
              alt="Logo VIDEONET"
              width={52}
              height={52}
              priority
              className="h-10 w-10 object-contain"
            />
            <Image
              src="/media/name_slogan.png"
              alt="VIDEONET - Tus ideas no tienen límite"
              width={461}
              height={112}
              priority
              className="h-7 w-auto max-w-[200px] object-contain sm:h-9 sm:max-w-[260px]"
            />
          </div>
        </div>
        <nav
          className="hidden items-center gap-6 text-sm text-ice-200 md:flex"
          aria-label="Navegación principal"
        >
          <a href="#soluciones" className="transition hover:text-white">
            Soluciones
          </a>
          <a href="#galeria" className="transition hover:text-white">
            Galería
          </a>
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#productos" className="transition hover:text-white">
            Productos
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ice-100 transition hover:border-brand-300 md:inline-flex"
          >
            Contactar
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
            className="inline-flex items-center rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent-600"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <nav className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-4 text-[10px] uppercase tracking-[0.25em] text-ice-200 sm:px-6 sm:text-xs md:hidden">
        {[
          { href: "#soluciones", label: "Soluciones" },
          { href: "#galeria", label: "Galería" },
          { href: "#servicios", label: "Servicios" },
          { href: "#productos", label: "Productos" },
          { href: "#contacto", label: "Contacto" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-ice-100 sm:px-4"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main
        id="contenido"
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 sm:gap-20 sm:px-6 sm:pb-20"
      >
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="grid gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ice-200 sm:text-xs sm:tracking-[0.3em]">
              Tus ideas no tienen límite
            </div>
            <div className="grid gap-4">
              <h1 className="font-display text-3xl leading-tight tracking-tight text-shadow-glow sm:text-5xl">
                Robinson Celis
              </h1>
              <p className="text-base text-ice-200 sm:text-lg">
                Consultor de Soluciones Tecnológicas en VIDEONET. Aliado
                estratégico para integradores AV, empresas y organizaciones que
                buscan experiencias audiovisuales confiables.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ice-400">
                  Propuesta
                </p>
                <p className="mt-2 text-sm text-ice-100">
                  Soluciones AV, conectividad y distribución mayorista con
                  soporte técnico especializado.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ice-400">
                  Cobertura
                </p>
                <p className="mt-2 text-sm text-ice-100">
                  Sectores corporativo, educativo, retail, hotelería y sector
                  público.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Agendar asesoría por WhatsApp"
                className="inline-flex items-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-300 sm:tracking-[0.25em]"
              >
                Agendar asesoría
              </a>
              <a
                href="#soluciones"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-brand-300 sm:tracking-[0.25em]"
              >
                Ver soluciones
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60">
              <Image
                src="/media/hero-conference.jpg"
                alt="Sala corporativa con pantallas AV integradas"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-60 w-full object-cover sm:h-72 lg:h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-ice-100">
                Espacios conectados para colaboración y productividad.
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/10 bg-ink-900/75 p-6 shadow-[0_40px_120px_rgba(8,14,36,0.6)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
                  Contacto directo
                </p>
                <p className="font-display text-xl">VIDEONET</p>
              </div>
              <div className="grid gap-3 text-sm text-ice-200">
                <div className="flex flex-col gap-1 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>Correo</span>
                  <a
                    href="mailto:ventas6@videonetcali.com"
                    className="text-ice-100 hover:text-brand-300"
                  >
                    ventas6@videonetcali.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>Celular / WhatsApp</span>
                  <a
                    href="tel:+573173040506"
                    className="text-ice-100 hover:text-brand-300"
                  >
                    +57 317 304 0506
                  </a>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>Teléfono</span>
                  <span className="text-ice-100">
                    265 5944 Extensión Fija: 127 - Extensión Móvil: 227
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>Ciudad</span>
                  <span className="text-ice-100">Bogotá, Colombia</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Web</span>
                  <a
                    href="https://www.videonetcali.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ice-100 hover:text-brand-300"
                  >
                    www.videonetcali.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="soluciones" className="grid gap-8 scroll-mt-24">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Soluciones
            </p>
            <h2 className="font-display text-3xl">
              Audio, video, señalización digital y automatización
            </h2>
            <p className="max-w-2xl text-ice-200">
              Portafolio integral en soluciones audiovisuales profesionales para
              proyectos corporativos, educativos y de entretenimiento.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/70 p-5 text-ice-100"
              >
                <p className="font-display text-lg">{item}</p>
                <p className="mt-2 text-sm text-ice-400">
                  Soluciones diseñadas para espacios con alto impacto y
                  conectividad confiable.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria" className="grid gap-8 scroll-mt-24">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Galería
            </p>
            <h2 className="font-display text-3xl">
              Tecnología corporativa en acción
            </h2>
            <p className="max-w-2xl text-ice-200">
              Integración AV, conectividad y entornos colaborativos para empresas
              que buscan soluciones confiables y escalables.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-56 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-4 right-4 text-sm text-ice-100 opacity-0 transition duration-500 group-hover:opacity-100">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="grid gap-8 scroll-mt-24">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Servicios
            </p>
            <h2 className="font-display text-3xl">
              Acompañamiento estratégico y soporte especializado
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-ink-900/70 p-6"
              >
                <p className="font-display text-lg text-white">
                  {service.title}
                </p>
                <p className="mt-3 text-sm text-ice-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60">
            <Image
              src="/media/tech-microphones.jpg"
              alt="Mesa de conferencia con audio profesional y pantallas"
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-56 w-full object-cover sm:h-72 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>
          <div className="grid gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Tecnología aplicada
            </p>
            <h2 className="font-display text-3xl">
              Soluciones audiovisuales que elevan la experiencia
            </h2>
            <p className="text-ice-200">
              Diseñamos entornos colaborativos con integración AV, conectividad
              confiable y soporte continuo para asegurar resultados medibles.
            </p>
            <div className="flex flex-wrap gap-2">
              {techHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ice-200 sm:text-xs sm:tracking-[0.3em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="grid gap-8 scroll-mt-24">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Productos
            </p>
            <h2 className="font-display text-3xl">
              Líneas de producto para integración AV
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {productLines.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-xs text-ice-100 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-brand-300 sm:tracking-[0.25em]"
            >
              Solicitar catálogo
            </a>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-ink-900/70 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
                Diferencial
              </p>
              <h3 className="font-display text-2xl">
                Soluciones personalizadas, garantía robusta y soporte experto
              </h3>
              <p className="mt-3 text-ice-200">
                VIDEONET impulsa proyectos integrales con un portafolio amplio en
                tecnología AV, conectividad y comunicación profesional.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {markets.map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ice-200"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/20 via-ink-900/70 to-ink-900/40 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-200">
              Propósito
            </p>
            <h3 className="font-display text-2xl">
              Aliado estratégico de integradores AV en Colombia
            </h3>
            <p className="text-sm text-ice-200">
              Distribución mayorista con marcas internacionales, soporte técnico
              especializado y proyectos a la medida.
            </p>
            <div className="grid gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
                Valores
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ice-100"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-ink-900/70 p-8">
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Visión 2030
            </p>
            <h3 className="font-display text-2xl">
              Ecosistema de referencia en transformación digital de espacios
            </h3>
            <p className="text-ice-200">
              VIDEONET trabaja para impulsar soluciones AV intuitivas y
              conectadas que faciliten experiencias inmersivas y productivas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-accent-600"
            >
              Hablar con Robinson
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-brand-300"
            >
              Solicitar propuesta
            </a>
          </div>
        </section>

        <section id="contacto" className="grid gap-8 scroll-mt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Contacto
            </p>
            <h2 className="font-display text-3xl">
              Conversemos sobre tu próximo proyecto AV
            </h2>
            <p className="text-ice-200">
              Comparte los detalles del proyecto y te enviaremos una respuesta
              con soluciones, tiempos y recomendaciones técnicas.
            </p>
            <div className="grid gap-3 text-sm text-ice-200">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>ventas6@videonetcali.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>+57 317 304 0506</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>Teléfono 265 5944 Extensión Fija: 127 - Extensión Móvil: 227</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(226,75,59,0.45)] transition hover:bg-accent-600 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
      >
        WA
      </a>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.25em] text-ice-400 sm:text-xs sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between">
          <span>VIDEONET Colombia</span>
          <span>Soluciones audiovisuales profesionales</span>
        </div>
      </footer>
    </div>
  );
}
