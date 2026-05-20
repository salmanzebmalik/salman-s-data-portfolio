import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammad Salman Malik" },
      { name: "description", content: "Data Engineer & ML Engineer with experience at SHAPE Global and Rhodium Tech, currently pursuing a master's at the University of Münster." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-background py-20">
        <div className="section-container max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">About</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Muhammad Salman Malik
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I started in finance, fell for data, and never looked back. Today I design and ship
            <span className="text-primary"> end-to-end data platforms </span> — from ingestion and
            transformation on Spark, through governed Gold layers, to ML services and agentic AI
            on top. I like quiet code, observable systems, and tight feedback loops.
          </p>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container max-w-4xl">
          <h2 className="mb-12 font-display text-2xl font-semibold text-foreground">Journey</h2>
          <Timeline />
        </div>
      </section>
    </Layout>
  );
}
