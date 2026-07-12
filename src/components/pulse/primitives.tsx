import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-32 md:py-44", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  index,
}: {
  children: ReactNode;
  className?: string;
  index?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-graphite",
        className,
      )}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {index && (
        <>
          <span className="text-civic">{index}</span>
          <span className="h-px w-8 bg-line" />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(2.5rem,5.6vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CTA({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-navy text-canvas hover:bg-ink hover:translate-y-[-1px] shadow-[0_10px_30px_-15px_var(--navy)]"
      : "text-ink hover:text-navy border border-line hover:border-navy/40 bg-canvas/60 backdrop-blur";
  return (
    <button className={cn(base, styles, className)}>
      {children}
      <span aria-hidden className="translate-y-[1px]">
        →
      </span>
    </button>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-graphite",
        className,
      )}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-civic" />
      {children}
    </span>
  );
}