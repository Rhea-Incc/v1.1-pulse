import { motion, useScroll, useTransform } from "motion/react";

export default function Nav({ logoUrl }: { logoUrl: string }) {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(252,251,247,0)", "rgba(252,251,247,0.85)"]);
  const border = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0)", "rgba(0,0,0,0.06)"]);
  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Pulse" className="h-9 w-auto" />
        </div>
        <nav className="hidden items-center gap-8 text-sm text-graphite md:flex">
          <a href="#vision" className="transition hover:text-ink">Vision</a>
          <a href="#platform" className="transition hover:text-ink">Platform</a>
          <a href="#mission-control" className="transition hover:text-ink">Mission Control</a>
          <a href="#capabilities" className="transition hover:text-ink">Capabilities</a>
          <a href="#lifecycle" className="transition hover:text-ink">Lifecycle</a>
          <a href="#industries" className="transition hover:text-ink">Industries</a>
          <a href="#insights" className="transition hover:text-ink">Insights</a>
          <a href="#contact" className="transition hover:text-ink">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-line bg-canvas px-4 py-2 text-xs font-medium text-graphite transition hover:bg-[rgba(15,39,71,0.06)] md:inline">
            Request Partnership
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-medium text-canvas transition hover:bg-ink">
            Book Demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}