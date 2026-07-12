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
          <a href="#walkthrough" className="transition hover:text-ink">Product</a>
          <a href="#ecosystem" className="transition hover:text-ink">Platform</a>
          <a href="#intelligence" className="transition hover:text-ink">Intelligence</a>
          <a href="#governance" className="transition hover:text-ink">Governance</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-graphite transition hover:text-ink md:inline">Sign in</button>
          <button className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-medium text-canvas transition hover:bg-ink">
            Book demonstration
          </button>
        </div>
      </div>
    </motion.header>
  );
}