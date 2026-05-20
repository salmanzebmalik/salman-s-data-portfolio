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
    period: "August, 2018 — May, 2022",
    title: "BSc. (Honors), Accounting & Finance",
    org: "Lahore University of Management Sciences",
    description: "I completed a Bachelor’s in Accounting and Finance with a CS minor, gaining a solid foundation in quantitative analysis, data-driven decision-making, and statistical analysis. My finance courses sharpened my ability to interpret complex datasets, while my CS minor provided me with technical skills in Python, SQL, and C++, enabling me to work with data structures and algorithms.",
    skills: ["Quantitative Analysis", "Statistics", "Financial Modeling", "SQL", "Python", "Data-driven decision-making"],
    achievements: ["Minor: Computer Science", "Overall Grade: 3.3/4.0", "Developed hands-on experience in financial modeling, data visualization, and statistical analysis, which are essential for data-driven decision-making and predictive modeling.", "Applied business and technical knowledge to approach problems analytically, using programming skills to tackle real-world business challenges.", "Learned to translate technical concepts into business solutions, which is critical for AI/ML applications"],
  },
  {
    period: "May, 2022 — February, 2024",
    title: "Technical Business Analyst",
    org: "SHAPE Global Ltd",
    description: "Owned reporting and analytics for international operations — turned messy spreadsheets into governed pipelines.",
    skills: ["SQL", "Python", "Power BI", "ETL"],
    achievements: ["Automated 12 monthly reports.", "Cut close cycle by 5 days."],
  },
  {
    period: "February, 2024 — July, 2024",
    title: "Technical Business Analyst",
    org: "Rhodium Tech",
    description: "Designed and shipped end-to-end pipelines on Databricks with the medallion architecture.",
    skills: ["PySpark", "Databricks", "Delta Lake", "Airflow", "Docker"],
    achievements: ["Delivered lakehouse for 6 domains.", "Mentored 3 junior engineers."],
  },
  {
    period: "April, 2024 — Present",
    title: "Master's, Information Systems",
    org: "Universität Münster",
    description: "Deepening expertise in ML, distributed systems, and agentic AI — bridging research with production.",
    skills: ["Supervised Machine Learning", "Unsupervised Machine Learning", "Mining Massive Datasets", "Advance Concepts in Software Engineering", "Data Integration", "Logic Specification and Programming"],
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
