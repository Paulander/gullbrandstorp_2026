import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import "./style.css";

const CONTENT = {
  sv: {
    navSub: "System • AI • Embedded • Produkt",
    contact: "Kontakt",
    eyebrow: "Solokonsult med grundarhastighet",
    heroTitle: "Jag bygger system som tänker, fungerar och håller i verkligheten.",
    heroBody:
      "Oskar Paulander: teknisk fysiker, embeddedutvecklare, AI-produktbyggare och grundare av Gullbrandstorp Ingenjörsbyrå AB. Jag hjälper team att gå från vag teknisk ambition till fungerande, inspekterbara och produktionsmogna system.",
    trustEyebrow: "Erfarenhet från komplexa ingenjörsmiljöer",
    trustAnchors: ["Volvo", "Polestar", "Vector", "Ericsson", "Micropower", "Chalmers"],
    primaryCta: "Följ bygget",
    secondaryCta: "Se projekt",
    systemMap: "Systemkarta",
    layers: ["Hårdvara", "Mjukvara", "Resonemang"],
    timelineEyebrow: "Scrollbyggd tidslinje",
    timelineTitle: "En karriär monterad som en maskin.",
    timelineBody:
      "Fysiken gav mätinstinkten. Embedded gav disciplin. Fordonsindustrin lade till säkerhet och process. AI-produkter gav tempo. ReCoN knyter ihop det: system som visar sitt resonemang i stället för att gömma det i en svart låda.",
    projectsEyebrow: "Utvalda system",
    projectsTitle: "Forskningssmak. Produkthänder.",
    projectsBody:
      "Den röda tråden är enkel: bygg tillräckligt mycket av stacken för att förstå de verkliga begränsningarna, och gör sedan abstraktionen renare än röran under den.",
    bridgeEyebrow: "Vad jag är bra för",
    bridgeTitle: "Bryggprofilen.",
    bridgeBody:
      "Särskilt användbart när ett projekt korsar domäner: hårdvara möter moln, AI möter UX, forskning möter produktion, eller när ett team behöver någon som kan översätta mellan utvecklare, produkt och ledning utan att tappa den tekniska tråden.",
    footerSub: "Oskar Paulander • Sverige • AI, embedded system och tekniskt ledarskap",
    nodes: ["Fysik", "Embedded", "Fordon", "AI-produkter", "ReCoN", "Konsulting"],
    milestones: [
      ["2013–2015", "Fysikgrunden", "Chalmers • Teknisk fysik", "Signalbehandling, numeriska metoder, vetenskaplig programmering, parallelldatorer och examensarbete inom Raman/SERS."],
      ["2015–2021", "Embedded system i verkligheten", "Tele-Radio • Gemalto • Ericsson", "Firmware, smartkortssäkerhet, bildbehandling, mikrovågsradiosystem, Layer 2-nätverk och produktionskod nära hårdvaran."],
      ["2021–2024", "Säkerhetskritisk fordonsarkitektur", "Vector • Polestar • Gullbrandstorp", "Adaptive AUTOSAR, modern C++, ASIL-certifiering, ECU-pipelines, batteri- och drivlinesystem samt tekniskt ledarskap över landsgränser."],
      ["2020–2025", "Grundarläge: hårdvara, AI, produkt", "Raylyze • MancerAI • Phood", "Från Raman-spektrometer med ML till autonoma Jira-agenter och en AI-baserad nutritionsapp i produktion."],
      ["2025–Nu", "ReCoN / Hector", "Inspekterbar deliberativ arkitektur", "En vitlåda/neurosymbolisk arkitektur för hierarkisk planering, schackresonemang, strukturell mognad och realtidsvisualisering av inferens."],
    ],
    projects: [
      ["Hector / ReCoN", "Forskningsarkitektur", "Request-confirmation networks för inspekterbar, hierarkisk deliberation. Schack används som kompakt testmiljö för planering, strategisk överlämning och interna aktiveringsdynamiker."],
      ["Phood", "AI-app i produktion", "AI-baserad matanalys med multimodell-inferens, strukturerade outputs, kvotlogik, Stripe-betalning, flerspråkigt gränssnitt och mobildistribution."],
      ["MancerAI", "Autonom utvecklaragent", "RAG- och grafbaserade agentflöden för Jira-planering, feature-nedbrytning och kodbaskunskap med minimalt UI-brus."],
      ["Raylyze", "ML + spektroskopistartup", "Koncept för handhållen Raman-spektrometer med CNN-baserad spektralklassificering och signalförstärkning."],
    ],
    capabilities: ["Embedded C/C++", "Adaptive AUTOSAR", "Säkerhetskritiska system", "Python-backends för AI", "React / TypeScript", "RAG och vektorsök", "LLM-integration i produkter", "Stripe och betalflöden", "CI/CD och releasepipelines", "Signalbehandling", "Neurosymbolisk AI", "Tekniskt ledarskap"],
    cards: [
      ["Schackformat resonemang", "Långsiktigt tänkande, taktik under begränsningar och en konkret testmiljö för AI-planering."],
      ["Solobyggarens tempo", "Prototypa, produktionssätta, mäta och iterera utan att vänta på att en kommitté ska upptäcka fart."],
      ["Dragning mot inspekterbarhet", "Jag gillar system man kan granska. Svarta lådor är ibland användbara. De är sällan tillfredsställande."],
    ],
  },
  en: {
    navSub: "Systems • AI • Embedded • Product",
    contact: "Contact",
    eyebrow: "Solo consultancy with founder-level execution",
    heroTitle: "Building systems that think, work, and survive contact with reality.",
    heroBody:
      "Oskar Paulander: applied physicist, embedded systems engineer, AI product builder, and founder of Gullbrandstorp Ingenjörsbyrå AB. I help teams move from vague technical ambition to working, inspectable, production-grade systems.",
    trustEyebrow: "Experience from complex engineering environments",
    trustAnchors: ["Volvo", "Polestar", "Vector", "Ericsson", "Micropower", "Chalmers"],
    primaryCta: "Scroll the build",
    secondaryCta: "View projects",
    systemMap: "Systems map",
    layers: ["Hardware", "Software", "Reasoning"],
    timelineEyebrow: "Scroll-built timeline",
    timelineTitle: "A career assembled like a machine.",
    timelineBody:
      "Physics gave the measurement instinct. Embedded systems gave discipline. Automotive added safety and process. AI products added speed. ReCoN ties it together: systems that expose their reasoning instead of hiding behind a black box.",
    projectsEyebrow: "Selected systems",
    projectsTitle: "Research taste. Product hands.",
    projectsBody:
      "The through-line is simple: build enough of the stack to understand the real constraints, then make the abstraction cleaner than the mess underneath.",
    bridgeEyebrow: "What I’m good for",
    bridgeTitle: "The bridge profile.",
    bridgeBody:
      "Useful when a project crosses domains: hardware meets cloud, AI meets UX, research meets production, or a team needs someone who can translate between developers, product, and management without losing the technical plot.",
    footerSub: "Oskar Paulander • Sweden • AI, embedded systems, and technical leadership",
    nodes: ["Physics", "Embedded", "Automotive", "AI products", "ReCoN", "Consultancy"],
    milestones: [
      ["2013–2015", "Physics foundation", "Chalmers • Applied Physics", "Signal processing, numerical methods, scientific programming, parallel computing, and a thesis in Raman/SERS."],
      ["2015–2021", "Embedded systems in the real world", "Tele-Radio • Gemalto • Ericsson", "Firmware, smart-card security, image processing, microwave radio systems, Layer 2 networking, and production code close to hardware."],
      ["2021–2024", "Safety-critical automotive architecture", "Vector • Polestar • Gullbrandstorp", "Adaptive AUTOSAR, modern C++, ASIL certification, ECU pipelines, propulsion and battery systems, and cross-site technical leadership."],
      ["2020–2025", "Founder mode: hardware, AI, product", "Raylyze • MancerAI • Phood", "From Raman spectrometer ML to autonomous Jira agents and a production AI nutrition app."],
      ["2025–Now", "ReCoN / Hector", "Interpretable deliberation architecture", "A white-box neuro-symbolic architecture for hierarchical planning, chess reasoning, structural maturation, and real-time inference visualization."],
    ],
    projects: [
      ["Hector / ReCoN", "Research architecture", "Request-confirmation networks for interpretable, hierarchical deliberation. Chess as a compact testbed for planning, handover, and internal activation dynamics."],
      ["Phood", "Production AI app", "AI food analysis with multi-model inference, structured outputs, quota enforcement, Stripe billing, multilingual UX, and mobile distribution."],
      ["MancerAI", "Autonomous dev agent", "RAG and graph-backed agent workflows for Jira planning, feature breakdown, and codebase understanding with minimal UI friction."],
      ["Raylyze", "ML + spectroscopy startup", "Handheld Raman spectrometer concept using CNN-based spectral classification and signal enhancement."],
    ],
    capabilities: ["Embedded C/C++", "Adaptive AUTOSAR", "Safety-critical systems", "Python AI backends", "React / TypeScript", "RAG & vector search", "LLM product integration", "Stripe / billing systems", "CI/CD & release pipelines", "Signal processing", "Neuro-symbolic AI", "Technical leadership"],
    cards: [
      ["Chess-shaped reasoning", "Long-horizon thinking, tactics under constraints, and a concrete playground for AI planning."],
      ["Solo-builder speed", "Prototype, productionize, instrument, and iterate without waiting for a committee to discover velocity."],
      ["Interpretability bias", "I like systems you can inspect. Black boxes are sometimes useful. They are rarely satisfying."],
    ],
  },
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h <= 0 ? 0 : window.scrollY / h);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return clamp(progress, 0, 1);
}

function Glyph({ children }) {
  return <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-300 bg-[#f8f6ef] font-mono text-lg font-black text-slate-950 shadow-[4px_4px_0_#0f172a]">{children}</div>;
}

function Blueprint({ content, progress }) {
  const nodes = content.nodes;
  return (
    <div className="relative h-[560px] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8f6ef] shadow-2xl shadow-slate-900/10">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(to right, rgba(15,23,42,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.07) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute left-6 top-5 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-slate-500"><span className="h-2 w-2 rounded-full bg-slate-900" /> Gullbrandstorp / {content.systemMap}</div>
      <svg viewBox="0 0 900 540" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.path d="M75 385 C165 250 265 365 355 295 C465 210 540 360 650 270 C740 200 785 260 825 140" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" style={{ pathLength: clamp(progress * 1.2, 0, 1) }} />
        <motion.path d="M95 430 C250 500 430 430 560 470 C675 505 750 430 840 455" fill="none" stroke="#64748b" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" style={{ pathLength: clamp(progress * 1.7 - 0.2, 0, 1) }} />
        <motion.path d="M150 145 C260 80 320 160 415 125 C525 85 630 125 730 65" fill="none" stroke="#64748b" strokeWidth="1.5" opacity="0.28" strokeLinecap="round" style={{ pathLength: clamp(progress * 1.5 - 0.1, 0, 1) }} />
      </svg>
      {nodes.map((label, i) => {
        const coords = [[75,385],[225,300],[355,295],[515,270],[650,270],[825,140]][i];
        const shown = progress > i / 7 - 0.02;
        return (
          <motion.div key={label} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: `${coords[0] / 9}%`, top: `${coords[1] / 5.4}%` }} animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.7 }} transition={{ type: "spring", stiffness: 160, damping: 18 }}>
            <Glyph>{label.slice(0, 2).toUpperCase()}</Glyph>
            <div className="mt-3 w-28 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">{label}</div>
          </motion.div>
        );
      })}
      <div className="absolute bottom-6 left-6 right-6 z-30 grid gap-3 md:grid-cols-3">
        {content.layers.map((layer, i) => <motion.div key={layer} className="rounded-2xl border border-slate-300 bg-white/70 p-4 backdrop-blur" animate={{ opacity: progress > 0.15 + i * 0.18 ? 1 : 0.28 }}><div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">Layer 0{i + 1}</div><div className="mt-1 text-lg font-semibold text-slate-950">{layer}</div></motion.div>)}
      </div>
    </div>
  );
}

function TimelineCard({ item, idx, progress, total }) {
  const active = progress > (idx + 0.35) / (total + 1.4);
  return (
    <motion.article animate={{ opacity: active ? 1 : 0.35, y: active ? 0 : 18 }} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="mb-5 flex items-center justify-between gap-4"><Glyph>{String(idx + 1).padStart(2, "0")}</Glyph><span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{item[0]}</span></div>
      <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{item[2]}</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{item[1]}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{item[3]}</p>
    </motion.article>
  );
}

function ProjectCard({ project, idx }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: idx * 0.07 }} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-slate-900/10">
      <div className="mb-8 flex items-start justify-between"><Glyph>{project[0].slice(0, 2).toUpperCase()}</Glyph><span className="text-2xl text-slate-400">↗</span></div>
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{project[1]}</div>
      <h3 className="mt-2 text-2xl font-semibold text-slate-950">{project[0]}</h3>
      <p className="mt-4 leading-7 text-slate-600">{project[2]}</p>
    </motion.div>
  );
}

function App() {
  const [lang, setLang] = useState("sv");
  const content = CONTENT[lang];
  const progress = useScrollProgress();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  if (!content.trustAnchors.includes("Volvo")) console.error("Volvo missing from trust anchors");

  return (
    <main className="min-h-screen bg-[#f8f6ef] text-slate-950 selection:bg-slate-950 selection:text-white">
      <div className="fixed left-0 top-0 z-50 h-1 bg-slate-950" style={{ width: `${progress * 100}%` }} />
      <section ref={heroRef} className="relative min-h-[120vh] overflow-hidden px-5 pt-8 md:px-8">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between rounded-full border border-slate-200 bg-white/70 px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">GI</div><div><div className="font-semibold leading-none">Gullbrandstorp Ingenjörsbyrå</div><div className="mt-1 text-xs text-slate-500">{content.navSub}</div></div></div>
            <div className="flex items-center gap-2"><div className="rounded-full border border-slate-300 bg-white p-1 text-xs font-semibold"><button type="button" onClick={() => setLang("sv")} className={`rounded-full px-3 py-1.5 ${lang === "sv" ? "bg-slate-950 text-white" : "text-slate-600"}`}>SV</button><button type="button" onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 ${lang === "en" ? "bg-slate-950 text-white" : "text-slate-600"}`}>EN</button></div><a href="mailto:oskar@gullbrandstorp.com" className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white md:block">{content.contact}</a></div>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> {content.eyebrow}</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-4xl text-6xl font-semibold tracking-[-0.07em] text-slate-950 md:text-8xl lg:text-9xl">{content.heroTitle}</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">{content.heroBody}</motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-10 flex flex-wrap gap-3"><a href="#timeline" className="rounded-full bg-slate-950 px-6 py-3 font-medium text-white shadow-lg shadow-slate-900/15">{content.primaryCta}</a><a href="#projects" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900">{content.secondaryCta}</a></motion.div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }} className="mt-10 rounded-[1.5rem] border border-slate-200 bg-white/70 p-4 backdrop-blur"><div className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">{content.trustEyebrow}</div><div className="flex flex-wrap gap-2">{content.trustAnchors.map((name) => <span key={name} className="rounded-full border border-slate-300 bg-[#f8f6ef] px-4 py-2 text-sm font-semibold text-slate-800">{name}</span>)}</div></motion.div>
            </div>
            <Blueprint progress={clamp(progress * 1.7, 0, 1)} content={content} />
          </div>
        </motion.div>
      </section>
      <section id="timeline" className="relative px-5 py-24 md:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]"><Blueprint progress={progress} content={content} /></div><div className="space-y-6"><div className="mb-10"><div className="font-mono text-sm uppercase tracking-[0.35em] text-slate-500">{content.timelineEyebrow}</div><h2 className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">{content.timelineTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{content.timelineBody}</p></div>{content.milestones.map((item, idx) => <TimelineCard key={item[1]} item={item} idx={idx} progress={progress} total={content.milestones.length} />)}</div></div></section>
      <section id="projects" className="px-5 py-24 md:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><div className="font-mono text-sm uppercase tracking-[0.35em] text-slate-500">{content.projectsEyebrow}</div><h2 className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">{content.projectsTitle}</h2></div><p className="text-lg leading-8 text-slate-600">{content.projectsBody}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{content.projects.map((project, idx) => <ProjectCard key={project[0]} project={project} idx={idx} />)}</div></div></section>
      <section className="px-5 py-24 md:px-8"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><div className="font-mono text-sm uppercase tracking-[0.35em] text-slate-400">{content.bridgeEyebrow}</div><h2 className="mt-3 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">{content.bridgeTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-300">{content.bridgeBody}</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{content.capabilities.map((cap, idx) => <motion.div key={cap} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.025 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-100">{cap}</motion.div>)}</div></div></div></section>
      <section className="px-5 pb-24 md:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{content.cards.map((card) => <div key={card[0]} className="rounded-[2rem] border border-slate-200 bg-white p-6"><Glyph>{card[0].slice(0, 2).toUpperCase()}</Glyph><h3 className="mt-5 text-xl font-semibold">{card[0]}</h3><p className="mt-3 leading-7 text-slate-600">{card[1]}</p></div>)}</div></section>
      <footer className="border-t border-slate-200 bg-white px-5 py-10 md:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><div className="text-2xl font-semibold tracking-tight">Gullbrandstorp Ingenjörsbyrå AB</div><div className="mt-2 text-slate-500">{content.footerSub}</div></div><div className="flex flex-wrap gap-3"><a href="mailto:oskar@gullbrandstorp.com" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">Email</a><a href="https://github.com/Paulander" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">GitHub</a><a href="https://www.linkedin.com/in/oskarpaulander" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium">LinkedIn</a></div></div></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
