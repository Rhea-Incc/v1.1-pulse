import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const VIS = [
  "Community Growth", "Operational Timeline", "Volunteer Activity", "Regional Coverage",
  "Campaign Health", "Project Pipeline", "Issue Heatmaps", "Communications Flow",
];

export default function Intelligence() {
  return (
    <Section id="intelligence" className="border-t border-line/60">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal><Eyebrow index="07">The intelligence layer</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <Display className="mt-6">Signal, not <span className="italic text-navy">noise</span>.</Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Operational data becomes organizational awareness. Every activity in Pulse
              feeds a clear picture of where the campaign is — and what needs attention.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {VIS.map((v, i) => (
            <Reveal key={v} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-canvas p-5">
                <div className="text-[10px] uppercase tracking-widest text-graphite" style={{ fontFamily: "var(--font-mono)" }}>{v}</div>
                <IntelSpark idx={i} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-3xl text-sm italic text-graphite">
            Pulse illustrates operational analytics and organizational awareness — never
            manipulative persuasion. Insight, transparently earned.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

function IntelSpark({ idx }: { idx: number }) {
  const seed = idx + 1;
  const points = Array.from({ length: 20 }).map((_, i) => {
    const y = 40 + Math.sin(i / 3 + seed) * 12 + (i * seed * 0.3) % 8;
    return `${i * 8},${y}`;
  });
  return (
    <div className="mt-4">
      <svg viewBox="0 0 160 60" className="h-16 w-full">
        <motion.polyline
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          fill="none"
          stroke={idx % 2 === 0 ? "var(--navy)" : "var(--civic)"}
          strokeWidth="1.5"
          points={points.join(" ")}
        />
      </svg>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-2xl">{(seed * 12.7).toFixed(1)}%</span>
        <span className="text-[10px] uppercase tracking-widest text-civic" style={{ fontFamily: "var(--font-mono)" }}>▲ vs last cycle</span>
      </div>
    </div>
  );
}