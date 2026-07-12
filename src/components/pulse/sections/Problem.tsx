import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const TOOLS = [
  { label: "WhatsApp groups", x: -220, y: -80, r: -8 },
  { label: "Spreadsheets", x: 180, y: -120, r: 6 },
  { label: "Volunteer lists", x: -260, y: 40, r: 4 },
  { label: "Email threads", x: 220, y: 40, r: -6 },
  { label: "PDF briefs", x: -140, y: 130, r: 10 },
  { label: "Field maps", x: 160, y: 130, r: -4 },
  { label: "Social posts", x: 0, y: -160, r: 2 },
  { label: "Polling forms", x: 0, y: 160, r: -2 },
];

const INSIGHTS = [
  "Fragmented communication",
  "Lost institutional knowledge",
  "Poor operational visibility",
  "Manual coordination",
  "Reactive decision making",
];

export default function Problem() {
  return (
    <Section id="problem" className="border-t border-line/60">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow index="01">The current reality</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <Display className="mt-6 max-w-[16ch]">
                Modern campaigns run on <span className="italic text-navy">disconnected</span> tools.
              </Display>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-graphite">
                Every campaign is quietly bleeding hours, context and momentum through a
                patchwork of apps that were never designed to work together.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-3">
                {INSIGHTS.map((i, idx) => (
                  <li key={i} className="flex items-center gap-4 border-t border-line py-3 text-sm">
                    <span className="w-8 text-[10px] uppercase tracking-widest text-civic" style={{ fontFamily: "var(--font-mono)" }}>0{idx + 1}</span>
                    <span className="text-ink">{i}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <FragmentedField />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FragmentedField() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
      {/* Rings */}
      {[220, 300, 380].map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute rounded-full border border-line"
          style={{ width: s, height: s }}
        />
      ))}

      {/* Floating tools */}
      {TOOLS.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, x: t.x * 1.3, y: t.y * 1.3, rotate: t.r * 2 }}
          whileInView={{
            opacity: 1,
            x: [t.x, t.x + 6, t.x],
            y: [t.y, t.y - 6, t.y],
            rotate: t.r,
          }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{
            opacity: { duration: 0.9, delay: 0.2 + i * 0.05 },
            x: { duration: 6 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 1, delay: 0.2 + i * 0.05 },
          }}
          className="absolute rounded-xl border border-line bg-canvas px-4 py-2 text-xs text-ink shadow-[0_10px_30px_-20px_rgba(20,30,60,0.4)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t.label}
        </motion.div>
      ))}

      {/* Center Pulse convergence */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-navy text-canvas"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-civic/40"
        />
        <span className="font-display text-2xl">pulse</span>
      </motion.div>
    </div>
  );
}