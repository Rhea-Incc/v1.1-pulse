import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";
import { motion } from "motion/react";

const LAYERS = [
  { name: "Executive", desc: "Command surface", tone: "bg-navy text-canvas" },
  { name: "Operations", desc: "Workflows, tasks, milestones", tone: "bg-canvas text-ink border border-line" },
  { name: "Field", desc: "Volunteers, events, coverage", tone: "bg-canvas text-ink border border-line" },
  { name: "Intelligence", desc: "Signals, analytics, health", tone: "bg-canvas text-ink border border-line" },
  { name: "Community", desc: "Supporters, forums, feedback", tone: "bg-civic/15 text-navy border border-civic/30" },
];

export default function Concept() {
  return (
    <Section id="concept" className="bg-[oklch(0.975_0.006_85)]">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow index="02">The birth of Pulse</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <Display className="mt-6">
                Campaigns are organizations. Organizations need <span className="italic text-navy">operating systems</span>.
              </Display>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-graphite">
                Pulse consolidates every layer of a campaign — from executive strategy
                to field execution — into a single, continuous system of record.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="relative rounded-3xl border border-line bg-canvas p-8 md:p-12">
              <div className="space-y-3">
                {LAYERS.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-center justify-between rounded-2xl px-6 py-5 ${l.tone}`}
                  >
                    <div>
                      <div className="font-display text-2xl">{l.name}</div>
                      <div className="mt-1 text-xs opacity-70" style={{ fontFamily: "var(--font-mono)" }}>
                        {l.desc}
                      </div>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-mono)" }}>
                      Layer 0{i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="h-px flex-1 bg-line" />
                <span>ONE CONTINUOUS SYSTEM</span>
                <span className="h-px flex-1 bg-line" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}