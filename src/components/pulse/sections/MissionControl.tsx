import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const INFOGRAPHICS = [
  { title: "Campaign Pulse Score", desc: "Composite health signal across every workstream." },
  { title: "Operational Health Rings", desc: "Ops · Reach · Field · Comms at a glance." },
  { title: "Executive Decision Queue", desc: "Only what leadership needs to decide, today." },
  { title: "Campaign Timeline", desc: "Every milestone, sequenced against election day." },
  { title: "Strategic Situation Map", desc: "Coverage, movement and pressure on one canvas." },
];

export default function MissionControl() {
  return (
    <Section id="mission-control" className="relative bg-navy text-canvas overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,220,180,0.25),transparent_60%)]" />
      </div>
      <Container className="relative">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-canvas/60" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="text-civic">04</span>
                <span className="h-px w-8 bg-canvas/20" />
                <span>Mission Control</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Display className="mt-6 text-canvas">
                One workspace. <br /><span className="italic text-civic">Every</span> decision.
              </Display>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-canvas/70">
                Executive command surface where campaign managers see strategy, operations,
                communications and movement health from a single, unified vantage point.
              </p>
            </Reveal>
            <div className="mt-10 space-y-3">
              {INFOGRAPHICS.map((g, i) => (
                <Reveal key={g.title} delay={0.05 * i}>
                  <div className="flex items-start gap-4 border-t border-canvas/10 py-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-civic" />
                    <div>
                      <div className="font-display text-xl">{g.title}</div>
                      <div className="mt-1 text-sm text-canvas/60">{g.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <MissionControlSurface />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function MissionControlSurface() {
  return (
    <div className="rounded-3xl border border-canvas/15 bg-canvas/[0.04] p-4 backdrop-blur">
      <div className="rounded-2xl border border-canvas/10 bg-navy/60 p-6">
        {/* Rings */}
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>Health Rings</div>
          <div className="text-[10px] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>Updated · 12s ago</div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="h-56 w-56">
            {[
              { r: 80, val: 0.86, c: "var(--civic)" },
              { r: 65, val: 0.72, c: "#88b6ff" },
              { r: 50, val: 0.94, c: "#fff" },
            ].map((ring, i) => {
              const C = 2 * Math.PI * ring.r;
              return (
                <g key={i} transform="rotate(-90 100 100)">
                  <circle cx={100} cy={100} r={ring.r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                  <motion.circle
                    cx={100}
                    cy={100}
                    r={ring.r}
                    stroke={ring.c}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    initial={{ strokeDashoffset: C }}
                    whileInView={{ strokeDashoffset: C * (1 - ring.val) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </g>
              );
            })}
            <text x="100" y="98" textAnchor="middle" className="fill-canvas font-display" fontSize="34">87</text>
            <text x="100" y="118" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.25em" }}>PULSE SCORE</text>
          </svg>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { l: "Ops", v: 86, c: "bg-civic" },
            { l: "Reach", v: 72, c: "bg-[#88b6ff]" },
            { l: "Field", v: 94, c: "bg-white" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl border border-canvas/10 bg-canvas/[0.03] p-3">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
                <span>{k.l}</span><span>{k.v}</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-canvas/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${k.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className={`h-full rounded-full ${k.c}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}