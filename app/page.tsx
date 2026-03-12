import ContactForm from "./components/ContactForm";

const whatsappNumber = "573175306906";
const whatsappMessage =
  "Hola Robinson, quiero una asesoria para un proyecto audiovisual.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const solutions = [
  "Audio y videoconferencia",
  "Senalizacion digital",
  "Streaming y broadcast",
  "Monitores interactivos",
  "Soluciones de videowall",
  "Audio y video en red",
  "Cableado estructurado",
];

const services = [
  {
    title: "Asesoria experta",
    description:
      "Acompanamiento desde el diagnostico hasta la puesta en marcha del proyecto AV.",
  },
  {
    title: "Distribucion mayorista",
    description:
      "Portafolio integral con soluciones y conectividad profesional para integradores.",
  },
  {
    title: "Soporte tecnico",
    description:
      "Instalacion, capacitacion y postventa con garantia robusta y respuesta rapida.",
  },
  {
    title: "Proyectos a la medida",
    description:
      "Soluciones personalizadas segun el tipo de espacio, uso y presupuesto.",
  },
];

const productLines = [
  "Adaptadores y conectores",
  "Cables profesionales",
  "Convertidores y repetidores",
  "Distribuidores y splitter de senal",
  "Extensores de senal",
  "Matrices de video y audio",
  "Switch de senal",
  "Streaming y capturadoras",
  "Soportes y montaje",
  "Telones de proyeccion",
  "Videoconferencia",
];

const markets = [
  "Corporativo",
  "Educativo",
  "Retail y hoteleria",
  "Sector publico",
];

const brands = [
  "SolidView",
  "Lulova",
  "MaxHub",
  "Aten",
  "Relacart",
  "RGBLink",
  "TDG Audio",
  "LINDY",
  "Mersive",
];

const values = [
  "Etica profesional",
  "Compromiso",
  "Trabajo en equipo",
  "Innovacion",
  "Respeto",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(47,111,211,0.35),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(226,75,59,0.25),transparent_45%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_40%,transparent_60%)] opacity-60" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 pb-6 pt-8">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-2xl border border-white/10 bg-ink-800/70">
            <span className="absolute left-4 top-2 h-5 w-5 rotate-45 rounded-md bg-brand-500 shadow-[0_10px_30px_rgba(47,111,211,0.35)]" />
            <span className="absolute bottom-2 left-2 h-4 w-8 border-b-4 border-r-4 border-accent-500 shadow-[0_10px_20px_rgba(226,75,59,0.4)]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              VideoNet
            </p>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-ice-100">
              Soluciones AV
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-ice-200 md:flex">
          <a href="#soluciones" className="transition hover:text-white">
            Soluciones
          </a>
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#productos" className="transition hover:text-white">
            Productos
          </a>
          <a href="#marcas" className="transition hover:text-white">
            Marcas
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
            className="inline-flex items-center rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent-600"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="grid gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ice-200">
              Tus ideas no tienen limite
            </div>
            <div className="grid gap-4">
              <h1 className="font-display text-4xl leading-tight tracking-tight text-shadow-glow sm:text-5xl">
                Robinson Celis
              </h1>
              <p className="text-lg text-ice-200">
                Director de soluciones tecnologicas en VideoNet. Aliado
                estrategico para integradores AV, empresas y organizaciones que
                buscan experiencias audiovisuales confiables.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ice-400">
                  Propuesta
                </p>
                <p className="mt-2 text-sm text-ice-100">
                  Soluciones AV, conectividad y distribucion mayorista con
                  soporte tecnico especializado.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ice-400">
                  Cobertura
                </p>
                <p className="mt-2 text-sm text-ice-100">
                  Sectores corporativo, educativo, retail, hoteleria y sector
                  publico.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-brand-300"
              >
                Agendar asesoria
              </a>
              <a
                href="#soluciones"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-brand-300"
              >
                Ver soluciones
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-ink-900/75 p-6 shadow-[0_40px_120px_rgba(8,14,36,0.6)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
                  Contacto directo
                </p>
                <p className="font-display text-xl">VideoNet Colombia</p>
              </div>
              <span className="rounded-full bg-accent-500/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent-500">
                SolidView
              </span>
            </div>
            <div className="grid gap-3 text-sm text-ice-200">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Correo</span>
                <a
                  href="mailto:ventas@videonetcali.com"
                  className="text-ice-100 hover:text-brand-300"
                >
                  ventas@videonetcali.com
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Celular</span>
                <a
                  href="tel:+573175306906"
                  className="text-ice-100 hover:text-brand-300"
                >
                  +57 317 530 6906
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>PBX</span>
                <span className="text-ice-100">
                  (1) 265 5944 Ext. Fija 127 / Ext. Movil 227
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Ciudad</span>
                <span className="text-ice-100">Bogota - Colombia</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Web</span>
                <a
                  href="https://videonet.com.co"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ice-100 hover:text-brand-300"
                >
                  videonet.com.co
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="soluciones" className="grid gap-8">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Soluciones
            </p>
            <h2 className="font-display text-3xl">
              Audio, video, senalizacion digital y automatizacion
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
                  Soluciones disenadas para espacios con alto impacto y
                  conectividad confiable.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="grid gap-8">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Servicios
            </p>
            <h2 className="font-display text-3xl">
              Acompanamiento estrategico y soporte especializado
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

        <section id="productos" className="grid gap-8">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Productos
            </p>
            <h2 className="font-display text-3xl">
              Lineas de producto para integracion AV
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {productLines.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-sm text-ice-100"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="marcas" className="grid gap-8">
          <div className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Marcas
            </p>
            <h2 className="font-display text-3xl">
              Partners internacionales y marcas propias
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-white/10 bg-ink-900/70 p-5 text-center"
              >
                <p className="font-display text-lg text-white">{brand}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ice-400">
                  Partner AV
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-ink-900/70 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
                Diferencial
              </p>
              <h3 className="font-display text-2xl">
                Soluciones personalizadas, garantia robusta y soporte experto
              </h3>
              <p className="mt-3 text-ice-200">
                VideoNet impulsa proyectos integrales con un portafolio amplio en
                tecnologia AV, conectividad y comunicacion profesional.
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
              Proposito
            </p>
            <h3 className="font-display text-2xl">
              Aliado estrategico de integradores AV en Colombia
            </h3>
            <p className="text-sm text-ice-200">
              Distribucion mayorista con marcas internacionales, soporte tecnico
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
              Vision 2030
            </p>
            <h3 className="font-display text-2xl">
              Ecosistema de referencia en transformacion digital de espacios
            </h3>
            <p className="text-ice-200">
              VideoNet trabaja para impulsar soluciones AV intuitivas y
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

        <section id="contacto" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-ice-400">
              Contacto
            </p>
            <h2 className="font-display text-3xl">
              Conversemos sobre tu proximo proyecto AV
            </h2>
            <p className="text-ice-200">
              Comparte los detalles del proyecto y te enviaremos una respuesta
              con soluciones, tiempos y recomendaciones tecnicas.
            </p>
            <div className="grid gap-3 text-sm text-ice-200">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>ventas@videonetcali.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>+57 317 530 6906</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span>PBX (1) 265 5944 Ext. Fija 127 / Ext. Movil 227</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-ice-400 md:flex-row md:items-center md:justify-between">
          <span>VideoNet Colombia</span>
          <span>Soluciones audiovisuales profesionales</span>
        </div>
      </footer>
    </div>
  );
}
