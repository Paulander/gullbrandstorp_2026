import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const PAPER_URL = "https://doi.org/10.1609/aaaiss.v8i1.42560";
const PHOOD_URL = "https://www.phood.se/";
const RECON_URL = "https://github.com/Paulander/recon-lite";
const GITHUB_URL = "https://github.com/Paulander";
const LINKEDIN_URL = "https://www.linkedin.com/in/oskarpaulander";
const EMAIL_URL = "mailto:oskar@gullbrandstorp.com";

const CONTENT = {
  sv: {
    navSub: "Ingenjör • Grundare • AI-forskare",
    contact: "Kontakt",
    eyebrow: "Oskar Paulander",
    heroTitle: "Ingenjör, grundare och oberoende AI-forskare.",
    heroBody:
      "Jag bygger produkter och forskningssystem i gränslandet mellan AI, mjukvara och verkliga tekniska system. Grundare av Phood och skapare av Hector/ReCoN.",
    heroMeta: "Civilingenjör Teknisk fysik, Chalmers • Embedded & safety-critical systems • AAAI 2026",
    workEyebrow: "Utvalt arbete",
    workTitle: "Två projekt jag bygger långsiktigt.",
    phoodTitle: "Phood",
    phoodTag: "AI-produkt i produktion",
    phoodBody:
      "Phood gör kosthållning lättare att följa i vardagen. Foto- och röstloggning, mål, recept och hjälp utifrån det du redan har hemma minskar friktionen mellan intention och faktiskt beteende.",
    visitPhood: "Besök phood.se",
    hectorTitle: "Hector / ReCoN",
    hectorTag: "Kognitiv arkitektur • AAAI 2026",
    hectorBody:
      "En inspekterbar arkitektur för hierarkisk deliberation, planering och intern kontroll. Request-Confirmation Networks används för att studera hur submål, kontrollöverlämning och längre planeringshorisonter kan organiseras i ett observerbart system.",
    readPaper: "Läs AAAI-artikeln",
    viewCode: "Kod",
    aboutEyebrow: "Bakgrund",
    aboutTitle: "Fysik, embedded, AI och produkt.",
    aboutBody:
      "Jag är civilingenjör i teknisk fysik från Chalmers och har arbetat med embedded- och säkerhetskritiska system inom telekom och fordonsindustrin. De senaste åren har tyngdpunkten flyttats mot AI-produktutveckling och oberoende forskning, men samma grundprincip finns kvar: bygg system som går att förstå, testa och använda i verkligheten.",
    timeline: [
      ["Chalmers", "Teknisk fysik", "Signalbehandling, numeriska metoder, vetenskaplig programmering och examensarbete inom Raman/SERS."],
      ["Embedded & automotive", "Ericsson • Vector • Polestar • Micropower", "Firmware, nätverk, Adaptive AUTOSAR, modern C++, ASIL och tekniskt ledarskap nära hårdvaran."],
      ["Entreprenörskap", "Raylyze • MancerAI • Phood", "Från ML + spektroskopi till agentiska AI-system och en konsumentprodukt i produktion."],
      ["Forskning", "Hector / ReCoN • AAAI 2026", "Inspekterbar deliberativ AI, hierarkisk planering och självorganiserande strukturer."],
    ],
    earlierEyebrow: "Tidigare projekt",
    earlierTitle: "Några andra saker jag har byggt.",
    earlier: [
      ["MancerAI", "Autonom utvecklaragent", "RAG- och grafbaserade agentflöden för planering, feature-nedbrytning och kodbaskunskap."],
      ["Raylyze", "ML + spektroskopi", "Koncept för handhållen Raman-spektrometer med CNN-baserad spektralklassificering och signalförstärkning."],
    ],
    consultingEyebrow: "Selektiv konsulting",
    consultingTitle: "Jag tar fortfarande vissa tekniska uppdrag.",
    consultingBody:
      "Främst där AI, embedded, produktutveckling eller tekniskt ledarskap möts. Jag är särskilt användbar när ett projekt korsar domäner och någon behöver hålla ihop både den tekniska detaljen och helheten.",
    contactCta: "Kontakta mig",
    footerSub: "Oskar Paulander • Sverige • AI, embedded system, forskning och produktutveckling",
  },
  en: {
    navSub: "Engineer • Founder • AI Researcher",
    contact: "Contact",
    eyebrow: "Oskar Paulander",
    heroTitle: "Engineer, founder, and independent AI researcher.",
    heroBody:
      "I build products and research systems at the intersection of AI, software, and real-world engineering. Founder of Phood and creator of Hector/ReCoN.",
    heroMeta: "MSc Applied Physics, Chalmers • Embedded & safety-critical systems • AAAI 2026",
    workEyebrow: "Featured work",
    workTitle: "Two projects I am building for the long term.",
    phoodTitle: "Phood",
    phoodTag: "Production AI product",
    phoodBody:
      "Phood makes nutrition plans easier to follow in real life. Photo and voice logging, goals, recipes, and help based on what is already at home reduce the friction between intention and actual behavior.",
    visitPhood: "Visit phood.se",
    hectorTitle: "Hector / ReCoN",
    hectorTag: "Cognitive architecture • AAAI 2026",
    hectorBody:
      "An inspectable architecture for hierarchical deliberation, planning, and internal control. Request-Confirmation Networks are used to study how subgoals, control handover, and longer planning horizons can be organized in an observable system.",
    readPaper: "Read the AAAI paper",
    viewCode: "Code",
    aboutEyebrow: "Background",
    aboutTitle: "Physics, embedded systems, AI, and product.",
    aboutBody:
      "I hold an MSc in Applied Physics from Chalmers and have worked with embedded and safety-critical systems in telecom and automotive engineering. In recent years the focus has shifted toward AI product development and independent research, but the same principle remains: build systems that can be understood, tested, and used in the real world.",
    timeline: [
      ["Chalmers", "Applied Physics", "Signal processing, numerical methods, scientific programming, and a thesis in Raman/SERS."],
      ["Embedded & automotive", "Ericsson • Vector • Polestar • Micropower", "Firmware, networking, Adaptive AUTOSAR, modern C++, ASIL, and technical leadership close to hardware."],
      ["Entrepreneurship", "Raylyze • MancerAI • Phood", "From ML + spectroscopy to agentic AI systems and a production consumer product."],
      ["Research", "Hector / ReCoN • AAAI 2026", "Inspectable deliberative AI, hierarchical planning, and self-organizing structures."],
    ],
    earlierEyebrow: "Earlier projects",
    earlierTitle: "A few other things I have built.",
    earlier: [
      ["MancerAI", "Autonomous developer agent", "RAG and graph-based agent workflows for planning, feature decomposition, and codebase understanding."],
      ["Raylyze", "ML + spectroscopy", "Handheld Raman spectrometer concept with CNN-based spectral classification and signal enhancement."],
    ],
    consultingEyebrow: "Selective consulting",
    consultingTitle: "I still take on selected technical engagements.",
    consultingBody:
      "Primarily where AI, embedded systems, product development, or technical leadership meet. I am especially useful when a project crosses domains and someone needs to keep both the technical detail and the larger system coherent.",
    contactCta: "Contact me",
    footerSub: "Oskar Paulander • Sweden • AI, embedded systems, research, and product engineering",
  },
};

function Pill({ children }) {
  return (
    <span className="rounded-full border border-slate-300 bg-[#f8f6ef] px-4 py-2 text-sm font-semibold text-slate-800">
      {children}
    </span>
  );
}

function ProjectCard({ eyebrow, title, body, children, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`rounded-[2rem] border p-7 md:p-9 ${
        dark
          ? "border-slate-800 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-900/5"
      }`}
    >
      <div className={`font-mono text-xs uppercase tracking-[0.28em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {eyebrow}
      </div>
      <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h3>
      <p className={`mt-5 max-w-2xl text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
      <div className="mt-7 flex flex-wrap gap-3">{children}</div>
    </motion.article>
  );
}

function App() {
  const [lang, setLang] = useState("sv");
  const c = CONTENT[lang];

  return (
    <main className="min-h-screen bg-[#f8f6ef] text-slate-950 selection:bg-slate-950 selection:text-white">
      <section className="px-5 pt-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">OP</div>
              <div>
                <div className="font-semibold leading-none">Oskar Paulander</div>
                <div className="mt-1 text-xs text-slate-500">{c.navSub}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full border border-slate-300 bg-white p-1 text-xs font-semibold">
                <button type="button" onClick={() => setLang("sv")} className={`rounded-full px-3 py-1.5 ${lang === "sv" ? "bg-slate-950 text-white" : "text-slate-600"}`}>SV</button>
                <button type="button" onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 ${lang === "en" ? "bg-slate-950 text-white" : "text-slate-600"}`}>EN</button>
              </div>
              <a href={EMAIL_URL} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white md:block">{c.contact}</a>
            </div>
          </nav>

          <div className="grid min-h-[74vh] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-sm uppercase tracking-[0.34em] text-slate-500">
                {c.eyebrow}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-5 max-w-5xl text-6xl font-semibold tracking-[-0.065em] md:text-8xl lg:text-9xl">
                {c.heroTitle}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-8 max-w-3xl text-xl leading-8 text-slate-600">
                {c.heroBody}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-wrap gap-3">
                <a href="#featured" className="rounded-full bg-slate-950 px-6 py-3 font-medium text-white">Phood & Hector</a>
                <a href={PAPER_URL} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium">AAAI 2026</a>
              </motion.div>
              <div className="mt-10 flex flex-wrap gap-2">
                {c.heroMeta.split(" • ").map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.16 }} className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/15">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="absolute inset-6 flex flex-col justify-between rounded-[2rem] border border-white/10 p-7 text-white">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400">Engineer / Founder / Researcher</div>
                <div>
                  <div className="text-[7rem] font-black leading-none tracking-[-0.08em] md:text-[9rem]">OP</div>
                  <div className="mt-4 max-w-xs text-lg leading-7 text-slate-300">Physics → Embedded → AI products → Cognitive architectures</div>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="h-3 w-3 rounded-full bg-orange-300" />
                  <span className="h-3 w-3 rounded-full bg-sky-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="featured" className="border-y border-slate-200 bg-white/45 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-sm uppercase tracking-[0.34em] text-slate-500">{c.workEyebrow}</div>
          <h2 className="mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">{c.workTitle}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ProjectCard eyebrow={c.phoodTag} title={c.phoodTitle} body={c.phoodBody}>
              <a href={PHOOD_URL} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white">{c.visitPhood}</a>
            </ProjectCard>
            <ProjectCard eyebrow={c.hectorTag} title={c.hectorTitle} body={c.hectorBody} tone="dark">
              <a href={PAPER_URL} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950">{c.readPaper}</a>
              <a href={RECON_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white">{c.viewCode}</a>
            </ProjectCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="font-mono text-sm uppercase tracking-[0.34em] text-slate-500">{c.aboutEyebrow}</div>
            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">{c.aboutTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{c.aboutBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.timeline.map(([title, meta, body], idx) => (
              <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">{meta}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="font-mono text-sm uppercase tracking-[0.34em] text-slate-400">{c.earlierEyebrow}</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{c.earlierTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {c.earlier.map(([title, meta, body]) => (
              <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{meta}</div>
                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-slate-200 bg-white p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <div className="font-mono text-sm uppercase tracking-[0.34em] text-slate-500">{c.consultingEyebrow}</div>
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{c.consultingTitle}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.consultingBody}</p>
          </div>
          <a href={EMAIL_URL} className="rounded-full bg-slate-950 px-6 py-3 text-center font-medium text-white">{c.contactCta}</a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Oskar Paulander</div>
            <div className="mt-2 text-slate-500">{c.footerSub}</div>
            <div className="mt-1 text-sm text-slate-400">Gullbrandstorp Ingenjörsbyrå AB</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={EMAIL_URL} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">Email</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
