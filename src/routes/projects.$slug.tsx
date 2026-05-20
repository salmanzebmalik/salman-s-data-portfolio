import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.title} — Case Study` : "Case Study" },
      { name: "description", content: loaderData?.project.subtitle ?? "" },
    ],
  }),
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <Layout>
        <div className="section-container py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Project "{slug}" not found</h1>
          <Link to="/projects" className="mt-4 inline-block text-primary underline">Back to projects</Link>
        </div>
      </Layout>
    );
  },
  errorComponent: ({ error }) => (
    <Layout>
      <div className="section-container py-32 text-center">
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: CaseStudyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="font-mono text-xs uppercase tracking-wider text-primary">{title}</h2>
      <div className="mt-4 text-foreground/90">{children}</div>
    </div>
  );
}

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  return (
    <Layout>
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-24`}>
        <div className="section-container">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <span className="mt-6 inline-block rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
            {project.tag}
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.subtitle}</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-container max-w-3xl">
          <Section title="Objective"><p>{project.objective}</p></Section>
          <Section title="Role"><p>{project.role}</p></Section>
          <Section title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full bg-primary-muted px-3 py-1 text-sm font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </Section>
          <Section title="Workflow">
            <ol className="space-y-3">
              {project.workflow.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                  <span className="font-display text-lg font-bold text-primary">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Section>
          <Section title="Key Outcomes">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.outcomes.map((o) => (
                <div key={o} className="rounded-lg border border-border bg-card p-5">
                  <p className="font-display text-base font-semibold text-foreground">{o}</p>
                </div>
              ))}
            </div>
          </Section>
          <div className="mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
