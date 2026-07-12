import { createFileRoute } from "@tanstack/react-router";
import PulseLanding from "@/components/pulse/PulseLanding";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <PulseLanding />;
}
