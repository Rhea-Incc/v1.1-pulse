import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const INFOGRAPHICS = [
  { title: "Campaign Pulse Score", desc: "A living operational health score combining campaign activity into one executive metric." },
  { title: "Morning Brief", desc: "Daily intelligence summarizing what changed, what matters and what to do next." },
  { title: "Today's Decisions", desc: "A prioritized executive queue of the actions leadership needs to take now." },
  { title: "Upcoming Critical Events", desc: "Time-sensitive campaign operations and milestones across the field." },
  { title: "Priority Counties", desc: "Where coverage, resources and local intelligence should be focused." },
  { title: "AI Executive Summary", desc: "A concise operational overview generated for campaign leadership." },
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
                Authenticated campaign command center for leadership, strategists and operations.
                Every workspace shown above is now active, connected and ready to drive decisions.
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
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>Mission command</div>
            <div className="mt-2 text-sm text-canvas/70">
              Executive dashboard for campaign leadership, showing health, priorities and live field intelligence.
            </div>
          </div>
          <div className="text-[10px] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>Updated · 12s ago</div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-canvas/10 bg-canvas/[0.04] p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
              Campaign Pulse Score
            </div>
            <div className="mt-4 flex items-end gap-4">
              <span className="font-display text-6xl leading-none">87</span>
              <span className="pb-2 text-xs text-civic">▲ 4.2</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { l: "Health", v: 86, c: "bg-civic" },
                { l: "Volunteers", v: 72, c: "bg-[#88b6ff]" },
                { l: "Allocation", v: 94, c: "bg-white" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl border border-canvas/10 bg-navy/40 p-3">
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

          <div className="rounded-3xl border border-canvas/10 bg-canvas/[0.04] p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
              Executive brief
            </div>
            <div className="mt-4 space-y-3 text-sm text-canvas/80">
              {[
                { label: "Today's Decisions", detail: "3 pending approvals" },
                { label: "Upcoming Critical Events", detail: "2 high-priority operations" },
                { label: "AI Executive Summary", detail: "Prepared for leadership" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-canvas/10 bg-navy/40 px-4 py-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-canvas/60" style={{ fontFamily: "var(--font-mono)" }}>
                    <span>{item.label}</span>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-canvas/10 bg-canvas/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
              Priority counties
            </div>
            <div className="mt-3 space-y-3 text-sm text-canvas/80">
              {[
                { name: "West District", status: "High focus" },
                { name: "Central Ridge", status: "Volunteer surge" },
                { name: "East Corridor", status: "Monitoring" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl bg-navy/40 px-3 py-2">
                  <span>{item.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-canvas/50">{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-canvas/10 bg-canvas/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
              Mission timeline
            </div>
            <div className="mt-3 space-y-3 text-sm">
              {[
                { label: "Town hall activation", progress: "78%", tag: "On track" },
                { label: "Manifesto rollout", progress: "54%", tag: "Review" },
                { label: "Volunteer wave 03", progress: "92%", tag: "Ahead" },
              ].map((item, i) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
                    <span>{item.label}</span>
                    <span>{item.tag}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-canvas/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.progress }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.1 }}
                      className="h-full rounded-full bg-civic"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-canvas/10 bg-canvas/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>
              Situation map
            </div>
            <svg viewBox="0 0 300 140" className="mt-3 h-32 w-full">
              <defs>
                <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M 12 0 L 0 0 0 12" fill="none" stroke="var(--line)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="300" height="140" fill="url(#grid)" />
              {[
                [40, 60], [90, 40], [130, 80], [180, 55], [220, 90], [260, 45], [70, 100], [200, 30]
              ].map(([x, y], i) => (
                <g key={i}>
                  <motion.circle
                    cx={x} cy={y} r={10}
                    className="fill-civic/20"
                    animate={{ r: [8, 16, 8], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <circle cx={x} cy={y} r={3} className="fill-navy" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
