import { motion } from "motion/react";
import { Container, CTA, Display, Eyebrow, Reveal, Section } from "../primitives";

export default function Closing() {
  return (
    <Section id="contact" className="border-t border-line/60 pb-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow className="justify-center" index="09">The future</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" className="mt-8">
              Lead with <span className="italic text-navy">clarity</span>.
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Pulse is available by private demonstration. See the platform on your own
              campaign context, with your own regions, teams and priorities.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CTA>Request private demonstration</CTA>
              <CTA variant="ghost">Talk to the Pulse team</CTA>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-24 h-40 w-full max-w-xl">
            <svg viewBox="0 0 400 120" className="h-full w-full">
              {Array.from({ length: 24 }).map((_, i) => {
                const x = (i / 23) * 400;
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={60}
                    r={2}
                    className="fill-navy"
                    animate={{ cy: [60, 40, 60, 80, 60], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}