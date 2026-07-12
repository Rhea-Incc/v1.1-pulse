import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const MODULES = [
  "Campaign Management", "Volunteer & Teams", "Accounts & Permissions", "Manifesto Builder",
  "Policy Library", "Campaign Calendar", "Task Assignment", "Communications Hub",
  "Polling & Consultation", "Community Management", "Issue Tracking", "Project Progress",
  "Analytics", "Geo Mapping", "Regional Zoning", "QR Distribution",
  "Media Library", "Event Management", "Document Repository", "Knowledge Base",
  "Feedback Loops", "Election Transition", "Governance Continuity",
];

export default function Ecosystem() {
  return (
    <Section id="ecosystem" className="border-t border-line/60">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal><Eyebrow index="05">The platform</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <Display className="mt-6">Everything <span className="italic text-navy">connected</span>.</Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Modules orbit a single core. Data flows between them without translation,
              handoffs, or exports.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[720px]">
          {/* Concentric orbits */}
          {[180, 260, 340].map((r, i) => (
            <div
              key={r}
              className="absolute left-1/2 top-1/2 rounded-full border border-line"
              style={{
                width: `${r * 2}px`,
                height: `${r * 2}px`,
                transform: "translate(-50%, -50%)",
                opacity: 0.4 + i * 0.15,
              }}
            />
          ))}

          {/* Core */}
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-canvas">
            <div className="text-center">
              <div className="font-display text-3xl">pulse</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-canvas/50" style={{ fontFamily: "var(--font-mono)" }}>core</div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-civic/30"
            />
          </div>

          {/* Orbiting modules */}
          {MODULES.map((m, i) => {
            const orbit = i % 3;
            const radius = 180 + orbit * 80;
            const angle = (i / MODULES.length) * Math.PI * 2 + orbit * 0.4;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.02 * i, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-line bg-canvas px-3 py-1.5 text-[11px] text-ink shadow-[0_10px_30px_-20px_rgba(20,30,60,0.4)]"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-civic align-middle" />
                {m}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}