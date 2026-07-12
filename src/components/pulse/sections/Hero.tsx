import { motion } from "motion/react";
import { Container, CTA, Chip, Display } from "../primitives";

export default function Hero({ logoUrl }: { logoUrl: string }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40">
      {/* Ambient network */}
      <NetworkBackdrop />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8"
        >
          <Chip>Phase One · Launch Experience</Chip>
          <Display as="h1" className="max-w-[18ch]">
            Campaigns move fast.
            <br />
            <span className="italic text-navy">Leadership</span> should move faster.
          </Display>
          <p className="max-w-[46ch] text-lg leading-relaxed text-graphite md:text-xl">
            One operating system for strategy, operations, intelligence and execution —
            engineered for the pace of a modern campaign.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <CTA>Book private demonstration</CTA>
            <CTA variant="ghost">Explore the platform</CTA>
          </div>
        </motion.div>

        {/* Cinematic UI preview assembling */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-24 md:mt-32"
        >
          <HeroPreview logoUrl={logoUrl} />
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-graphite"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Scroll to begin
      </motion.div>
    </section>
  );
}

function NetworkBackdrop() {
  const nodes = Array.from({ length: 32 }).map((_, i) => ({
    x: (i * 137) % 100,
    y: (i * 71) % 100,
    d: (i * 0.13) % 3,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--civic-soft)_0%,transparent_45%)] opacity-40" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none" viewBox="0 0 100 100">
        {nodes.map((n, i) =>
          nodes.slice(i + 1, i + 4).map((m, j) => {
            const dist = Math.hypot(n.x - m.x, n.y - m.y);
            if (dist > 30) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={n.x}
                y1={n.y}
                x2={m.x}
                y2={m.y}
                stroke="currentColor"
                strokeWidth={0.05}
                className="text-navy"
              />
            );
          }),
        )}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={0.35}
            className="fill-navy"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + n.d, repeat: Infinity, delay: n.d }}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}

function HeroPreview({ logoUrl }: { logoUrl: string }) {
  return (
    <div className="relative rounded-[28px] border border-line bg-canvas/70 p-3 shadow-[0_40px_120px_-40px_rgba(20,30,60,0.35)] backdrop-blur">
      <div className="rounded-[20px] border border-line/70 bg-[oklch(0.99_0.004_85)] overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="" className="h-5 w-auto" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Mission Control · Q4 Cycle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-civic" />
            <span className="text-[11px] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Live · 12 regions</span>
          </div>
        </div>
        {/* Body */}
        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Pulse score */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="col-span-12 md:col-span-4 rounded-2xl border border-line bg-canvas p-5"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Campaign Pulse</div>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-6xl leading-none">87</span>
              <span className="pb-2 text-xs text-civic">▲ 4.2</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Ops", "Reach", "Field"].map((k, i) => (
                <div key={k} className="rounded-lg bg-secondary p-2 text-center">
                  <div className="text-[9px] text-graphite">{k}</div>
                  <div className="mt-1 text-sm font-medium">{[92, 81, 88][i]}</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="col-span-12 md:col-span-8 rounded-2xl border border-line bg-canvas p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.2em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Campaign Timeline</div>
              <div className="text-[10px] text-graphite">Weeks to election · 08</div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { label: "District canvass · North", w: "78%", tag: "On track" },
                { label: "Manifesto v2 rollout", w: "54%", tag: "In review" },
                { label: "Volunteer wave 03", w: "92%", tag: "Ahead" },
                { label: "Town halls · Southern belt", w: "36%", tag: "Planning" },
              ].map((r, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-3 text-xs">
                  <div className="col-span-4 truncate text-ink">{r.label}</div>
                  <div className="col-span-6 h-1.5 rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: r.w }}
                      transition={{ delay: 1.4 + i * 0.15, duration: 1 }}
                      className="h-full rounded-full bg-navy"
                    />
                  </div>
                  <div className="col-span-2 text-right text-[10px] uppercase tracking-widest text-graphite">{r.tag}</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Decision queue */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="col-span-12 md:col-span-5 rounded-2xl border border-line bg-canvas p-5"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Decision Queue</div>
            <ul className="mt-3 space-y-2 text-sm">
              {["Approve regional coordinator", "Sign off manifesto brief", "Reroute volunteer wave"].map((t) => (
                <li key={t} className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
                  <span>{t}</span>
                  <span className="text-[10px] uppercase tracking-widest text-civic">Pending</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="col-span-12 md:col-span-7 relative overflow-hidden rounded-2xl border border-line bg-[oklch(0.97_0.01_150)] p-5"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>Situation Map</div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}