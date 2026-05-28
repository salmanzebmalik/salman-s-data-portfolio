import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProject, type Project } from "@/lib/projects";

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

// Colored accent bars for the pipeline component cards (mirrors the screenshot)
const PIPELINE_ACCENTS = [
  "border-l-violet-500",
  "border-l-sky-500",
  "border-l-emerald-500",
  "border-l-amber-500",
  "border-l-rose-500",
  "border-l-fuchsia-500",
];

const PIPELINE_LABELS = [
  "Data Ingestion",
  "Transformation Layer",
  "Modeling & Features",
  "Orchestration",
  "Monitoring & Quality",
  "Deployment",
];

function CaseStudyPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <Layout>
      {/* HERO — split panel like the reference */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-16 md:py-24`}>
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Left: title + problem tags */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-background/60 p-6 backdrop-blur md:p-8">
              <span className="inline-block rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
                {project.tag}
              </span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">{project.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: quick facts panel */}
            <aside className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Project at a glance
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Domain</dt>
                  <dd className="font-medium text-foreground">{project.tag}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium text-foreground">{project.role.split("—")[0]?.trim()}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Stack</dt>
                  <dd className="font-medium text-foreground">{project.technologies.join(", ")}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-background py-16 md:py-24">
        <div className="section-container max-w-4xl">
          {/* Opening / Building */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Building a <span className="text-primary">{project.tag}</span> Solution
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{project.objective}</p>
          </div>

          {/* My Role callout */}
          <div className="mt-12 rounded-xl border border-primary/30 bg-primary-muted p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-display text-base font-semibold text-primary">My Role</h3>
            </div>
            <p className="mt-3 text-foreground/90">{project.role}</p>
          </div>

          {/* Data Audit / Discovery */}
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Discovery</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              What data did we have and what was missing?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Before designing the pipeline, I audited source systems, schema quality, freshness, and SLAs.
              The goal was to identify the gaps between raw inputs and the analytics-ready outputs the
              business actually needed — then design a path to close them.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Database, label: "Sources audited", value: "6+ systems" },
                { icon: GitBranch, label: "Pipelines designed", value: `${project.workflow.length} stages` },
                { icon: LineChart, label: "Tech surface", value: `${project.technologies.length} tools` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-lg font-semibold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline / Components that enabled success */}
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Architecture</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Components that enabled success
            </h2>
            <div className="mt-6 space-y-4">
              {project.workflow.map((step, i) => (
                <div
                  key={i}
                  className={`rounded-lg border border-border border-l-4 bg-card p-5 ${PIPELINE_ACCENTS[i % PIPELINE_ACCENTS.length]}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {PIPELINE_LABELS[i] ?? `Stage ${i + 1}`}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/80">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success / Outcomes */}
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Success</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Impact & Outcomes
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.outcomes.map((o) => (
                <div
                  key={o}
                  className="rounded-lg border border-border bg-gradient-to-br from-primary-muted to-transparent p-5"
                >
                  <p className="font-display text-base font-semibold text-foreground">{o}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-16 rounded-xl border border-border bg-background-alt p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
              Personal Reflection
            </h2>
            <p className="mt-4 text-muted-foreground">
              This project sharpened my conviction that durable data systems are built on clear contracts,
              observability, and small, composable transformations. Shipping {project.title.toLowerCase()} reinforced
              the value of pairing engineering rigor with close partnership to the teams who consume the data
              every day.
            </p>
          </div>

          <div className="mt-12 flex justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Want to ask me a question?
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
