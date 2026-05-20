import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SkillsBanner } from "@/components/SkillsBanner";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/lib/projects";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Salman Malik — Data & ML Engineer" },
      { name: "description", content: "Data Engineer & ML Engineer based in Münster. Building lakehouses, pipelines, ML services, and agentic AI." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background py-24 md:py-32">
        <div className="section-container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Münster, Germany
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
            Hi, I'm <span className="text-primary">Salman</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I'm a <span className="font-semibold text-primary">Data Engineer & ML Engineer</span> turning
            raw data into <span className="font-semibold text-primary">production-grade pipelines</span>,
            lakehouses, and ML services. I care about clean architecture, observability, and shipping things
            that actually move the business. <Link to="/connect" className="font-semibold text-primary underline underline-offset-4">Let's talk</Link>.
          </p>
        </div>
      </section>

      <SkillsBanner />

      {/* Featured projects */}
      <section className="bg-background py-20">
        <div className="section-container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">Selected work</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Projects</h2>
            </div>
            <Link to="/projects" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
              See all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6">
            <ProjectTile project={featured[0]} size="lg" />
            <div className="grid gap-6 md:grid-cols-2">
              {featured.slice(1).map((p) => (
                <ProjectTile key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
