import { motion } from "motion/react";
import { Container, Display, Eyebrow, Reveal, Section } from "../primitives";

const PAIRS = [
  ["Manifesto", "Development Plan"],
  ["Community", "Citizen Communities"],
  ["Events", "Public Forums"],
  ["Issue Collection", "Service Requests"],
  ["Campaign Projects", "Project Delivery"],
];

export default function Governance() {
  return (
    <Section id="governance" className="bg-[oklch(0.975_0.006_85)]">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow index="08">Beyond election day</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <Display className="mt-6">
                The campaign doesn't end on <span className="italic text-navy">election day</span>.
              </Display>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-graphite">
                Pulse preserves institutional knowledge and relationships. Campaign
                artifacts transform into governance workspaces so organizations can
                continue engaging communities long after the polls close.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-line bg-canvas p-6 md:p-10">
              <div className="grid grid-cols-11 gap-4 text-[10px] uppercase tracking-[0.22em] text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
                <div className="col-span-5">Campaign</div>
                <div className="col-span-1" />
                <div className="col-span-5">Governance</div>
              </div>
              <div className="mt-4 space-y-3">
                {PAIRS.map(([a, b], i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-11 items-center gap-4"
                  >
                    <div className="col-span-5 rounded-xl border border-line bg-canvas px-5 py-4">
                      <div className="font-display text-xl">{a}</div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-civic"
                      >
                        →
                      </motion.span>
                    </div>
                    <div className="col-span-5 rounded-xl border border-civic/40 bg-civic/10 px-5 py-4">
                      <div className="font-display text-xl text-navy">{b}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}