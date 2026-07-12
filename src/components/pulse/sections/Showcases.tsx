import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const SHOWCASES = [
  { id: "campaign", module: "Campaign Management", explanation: "Plan campaigns, assign coordinators, monitor milestones and track execution from a centralized operational timeline." },
  { id: "community", module: "Community", explanation: "Organize supporters into structured communities by geography and interest — engagement that outlives an election cycle." },
  { id: "manifesto", module: "Manifesto", explanation: "Present policy priorities through visual roadmaps, development plans and interactive project previews." },
  { id: "polls", module: "Polls & Feedback", explanation: "Gather structured feedback, surface recurring themes, and present results transparently as aggregated insights." },
  { id: "projects", module: "Project Tracking", explanation: "Watch proposed projects evolve from planning to implementation, visible to leadership and, later, the public." },
  { id: "issues", module: "Issue Tracking", explanation: "Community-reported issues are organized, categorized and prioritized for follow-up — nothing falls through." },
  { id: "mapping", module: "Mapping & Zoning", explanation: "Layered interactive maps visualize regions, boundaries, field teams, events and operational coverage." },
  { id: "qr", module: "QR Distribution", explanation: "Printed materials connect directly to campaign information, events and community portals via generated QR codes." },
];

export default function Showcases() {
  const [active, setActive] = useState(SHOWCASES[0].id);
  const item = SHOWCASES.find((s) => s.id === active)!;

  return (
    <Section id="capabilities" className="bg-[oklch(0.975_0.006_85)]">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal><Eyebrow index="06">Interactive workspaces</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <Display className="mt-6">Explore every <span className="italic text-navy">workspace</span>.</Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Tap through the modules. Each preview is annotated with how it lands in a
              real campaign day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <ul className="space-y-1">
              {SHOWCASES.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(s.id)}
                    className={`group flex w-full items-center justify-between border-t border-line py-4 text-left transition ${
                      active === s.id ? "text-ink" : "text-graphite hover:text-ink"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-widest text-civic w-6" style={{ fontFamily: "var(--font-mono)" }}>
                        0{i + 1}
                      </span>
                      <span className="font-display text-2xl">{s.module}</span>
                    </span>
                    <span className={`transition ${active === s.id ? "opacity-100 text-navy" : "opacity-0 group-hover:opacity-40"}`}>→</span>
                  </button>
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>

          <div className="md:col-span-8">
            <div className="sticky top-32">
              <div className="rounded-3xl border border-line bg-canvas p-2 shadow-[0_40px_100px_-50px_rgba(20,30,60,0.35)]">
                <div className="rounded-2xl border border-line/70 bg-[oklch(0.99_0.004_85)] p-8 min-h-[440px] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
                          Workspace · {item.module}
                        </div>
                        <span className="rounded-full border border-civic/40 bg-civic/10 px-3 py-0.5 text-[10px] uppercase tracking-widest text-navy" style={{ fontFamily: "var(--font-mono)" }}>Live preview</span>
                      </div>
                      <ShowcaseSurface id={item.id} />
                      <div className="mt-6 max-w-[54ch] text-base leading-relaxed text-graphite">
                        {item.explanation}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ShowcaseSurface({ id }: { id: string }) {
  if (id === "mapping") {
    return (
      <div className="mt-6 rounded-xl border border-line bg-[oklch(0.97_0.01_150)] p-4">
        <svg viewBox="0 0 400 200" className="h-56 w-full">
          <defs>
            <pattern id="mgrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="var(--line)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="200" fill="url(#mgrid)" />
          {/* zones */}
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
            d="M40,40 L140,30 L180,90 L120,140 L50,120 Z" fill="var(--civic)" fillOpacity="0.15" stroke="var(--civic)" strokeWidth="1" />
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }}
            d="M200,40 L320,60 L360,140 L260,170 L210,110 Z" fill="var(--navy)" fillOpacity="0.1" stroke="var(--navy)" strokeWidth="1" />
          {[[80, 70], [130, 110], [240, 90], [300, 130], [180, 60]].map(([x, y], i) => (
            <g key={i}>
              <motion.circle cx={x} cy={y} r={12} className="fill-civic/20" animate={{ r: [8, 16, 8] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }} />
              <circle cx={x} cy={y} r={3} className="fill-navy" />
            </g>
          ))}
        </svg>
      </div>
    );
  }
  if (id === "manifesto" || id === "projects") {
    return (
      <div className="mt-6 space-y-3">
        {["Housing renewal", "Youth employment", "Transit corridors", "Community health"].map((p, i) => (
          <div key={p} className="rounded-xl border border-line p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{p}</span>
              <span className="text-[10px] uppercase tracking-widest text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
                {["Draft", "Planning", "Live", "Review"][i]}
              </span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-secondary">
              <motion.div initial={{ width: 0 }} animate={{ width: `${30 + i * 18}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full rounded-full bg-navy" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "polls") {
    return (
      <div className="mt-6 grid grid-cols-2 gap-3">
        {["Transit priorities", "Local safety", "Small business", "Climate action"].map((t, i) => (
          <div key={t} className="rounded-xl border border-line p-4">
            <div className="text-sm font-medium">{t}</div>
            <div className="mt-3 space-y-2">
              {[70, 45, 20].map((v, j) => (
                <div key={j} className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-secondary">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${v}%` }} transition={{ duration: 1, delay: i * 0.1 + j * 0.05 }} className="h-full rounded-full bg-civic" />
                  </div>
                  <span className="w-8 text-right text-[10px] text-graphite">{v}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "qr") {
    return (
      <div className="mt-6 flex items-center gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="grid h-40 w-40 grid-cols-8 grid-rows-8 gap-0.5 rounded-2xl border border-line bg-canvas p-3">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className={`${(i * 37) % 5 < 2 ? "bg-ink" : "bg-transparent"} rounded-[1px]`} />
          ))}
        </motion.div>
        <div className="flex-1 space-y-2 text-sm">
          <div className="rounded-lg border border-line px-3 py-2">Flyer batch · Downtown</div>
          <div className="rounded-lg border border-line px-3 py-2">Poster set · Town hall</div>
          <div className="rounded-lg border border-line px-3 py-2">Booklet · Manifesto</div>
        </div>
      </div>
    );
  }
  if (id === "issues") {
    return (
      <div className="mt-6 space-y-2">
        {[
          ["Streetlights out · Sector 4", "Infrastructure", "High"],
          ["Waste collection missed", "Sanitation", "Medium"],
          ["Bus stop damage", "Transit", "High"],
          ["Park lighting request", "Community", "Low"],
        ].map(([t, c, p], i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm">
            <span>{t}</span>
            <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
              <span>{c}</span>
              <span className={`rounded-full px-2 py-0.5 ${p === "High" ? "bg-civic/20 text-navy" : "bg-secondary text-graphite"}`}>{p}</span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  // campaign / community default
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {[
        { l: "Active", v: "142" },
        { l: "This week", v: "38" },
        { l: "Coverage", v: "78%" },
        { l: "Volunteers", v: "2.4k" },
        { l: "Regions", v: "12" },
        { l: "Health", v: "87" },
      ].map((k) => (
        <div key={k.l} className="rounded-xl border border-line p-4">
          <div className="text-[9px] uppercase tracking-widest text-graphite" style={{ fontFamily: "var(--font-mono)" }}>{k.l}</div>
          <div className="mt-2 font-display text-3xl">{k.v}</div>
        </div>
      ))}
    </div>
  );
}