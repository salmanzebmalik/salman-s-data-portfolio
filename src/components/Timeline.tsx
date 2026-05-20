export type TimelinePhase = {
  period: string;
  title: string;
  org: string;
  description: string;
  skills: string[];
  achievements: string[];
};

export const phases: TimelinePhase[] = [
  {
    period: "2015 — 2019",
    title: "Bachelor's, Accounting & Finance",
    org: "Lahore University of Management Sciences",
    description: "Built a quantitative foundation while discovering a passion for data, modeling, and automation.",
    skills: ["Excel", "Statistics", "Financial Modeling", "SQL (intro)"],
    achievements: ["Top-decile graduate.", "Final-year project on data-driven valuation."],
  },
  {
    period: "2019 — 2021",
    title: "Data Analyst",
    org: "SHAPE Global Ltd",
    description: "Owned reporting and analytics for international operations — turned messy spreadsheets into governed pipelines.",
    skills: ["SQL", "Python", "Power BI", "ETL"],
    achievements: ["Automated 12 monthly reports.", "Cut close cycle by 5 days."],
  },
  {
    period: "2021 — 2023",
    title: "Data Engineer",
    org: "Rhodium Tech",
    description: "Designed and shipped end-to-end pipelines on Databricks with the medallion architecture.",
    skills: ["PySpark", "Databricks", "Delta Lake", "Airflow", "Docker"],
    achievements: ["Delivered lakehouse for 6 domains.", "Mentored 3 junior engineers."],
  },
  {
    period: "2023 — Present",
    title: "Master's, Information Systems",
    org: "University of Münster",
    description: "Deepening expertise in ML, distributed systems, and agentic AI — bridging research with production.",
    skills: ["Machine Learning", "Hadoop", "MapReduce", "FastAPI", "Agentic AI"],
    achievements: ["Research on LLM-based analytics agents.", "Open-source contributions."],
  },
];

export function Timeline() {
  return (
    <ol className="relative ml-3 border-l border-border">
      {phases.map((p, i) => (
        <li key={i} className="relative pb-12 pl-8 last:pb-0">
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
          <p className="font-mono text-xs uppercase tracking-wider text-primary">{p.period}</p>
          <h3 className="mt-1 font-display text-xl font-semibold text-foreground">{p.title}</h3>
          <p className="text-sm text-muted-foreground">{p.org}</p>
          <p className="mt-3 max-w-2xl text-foreground/90">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.skills.map((s) => (
              <span key={s} className="rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary">
                {s}
              </span>
            ))}
          </div>
          <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
            {p.achievements.map((a) => (
              <li key={a} className="flex gap-2"><span className="text-primary">▸</span>{a}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
