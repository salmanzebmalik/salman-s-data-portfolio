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
            My journey started in finance, where I learned how organizations make decisions through numbers. That curiosity led me into data — first through analytics and BI, then into pipelines, data platforms, machine learning, and AI-enabled systems. Today, I build <span className="text-primary">end-to-end data solutions</span> that transform raw, fragmented data into reliable insights and decision-ready products.
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
