import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Muhammad Salman Malik" },
      { name: "description", content: "Selected data engineering, ML, and analytics projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Layout>
      <section className="bg-background py-20">
        <div className="section-container">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Work</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            End-to-end pipelines, ML services, and analytics platforms.
          </p>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container">
          <h2 className="font-display text-2xl font-semibold text-foreground">Featured</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectTile key={p.slug} project={p} size="md" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-container">
          <h2 className="font-display text-2xl font-semibold text-foreground">More work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectTile key={p.slug} project={p} size="sm" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
