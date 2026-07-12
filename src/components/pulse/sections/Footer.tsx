import { Container } from "../primitives";

export default function Footer({ logoUrl }: { logoUrl: string }) {
  return (
    <footer className="border-t border-line py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="Pulse" className="h-7 w-auto" />
            <span className="text-xs text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
              PULSE · PHASE ONE · LAUNCH EXPERIENCE
            </span>
          </div>
          <div className="flex gap-8 text-xs text-graphite" style={{ fontFamily: "var(--font-mono)" }}>
            <span>Product</span>
            <span>Platform</span>
            <span>Governance</span>
            <span>Contact</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}