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
    description: "I completed my Bachelor’s in Accounting and Finance with a minor in Computer Science, combining business understanding with technical problem-solving. Finance trained me to interpret numbers in a decision-making context, while computer science introduced me to programming, databases, data structures, and algorithms — forming the foundation for my path into data engineering, BI, and analytics.",
    skills: ["Quantitative Analysis", "Statistics", "Financial Modeling", "SQL", "Python", "Data-driven decision-making"],
    achievements: [
      "Minor: Computer Science", 
      "Overall Grade: 3.3/4.0", 
      "Developed hands-on experience in financial modeling, data visualization, and statistical analysis, which are essential for data-driven decision-making and predictive modeling.", 
      "Applied business and technical knowledge to approach problems analytically, using programming skills to tackle real-world business challenges.", 
      "Learned to translate technical concepts into business solutions, which is critical for AI/ML applications"
    ],
  },
  {
    period: "May, 2022 — February, 2024",
    title: "Technical Business Analyst",
    org: "SHAPE Global Ltd.",
    description: "Owned reporting and analytics for international operations — turned messy spreadsheets into governed pipelines.",
    skills: ["SQL", "Python", "Power BI", "ETL"],
    achievements: [
      "Designed and owned a statistical scoring framework for employee performance surveys (normalization, weighting, benchmarking), translating thousands of responses across 5–6 client organizations into actionable HR insights and interventions.",
      "Built end-to-end ETL pipelines (Python, MySQL, SQL Server) for survey data ingestion, transformation, and validation, reducing reporting turnaround time by an estimated 60–80% and improving data reliability for client delivery.",
      "Developed automated, client-facing Power BI dashboards (multi-page models, DAX measures) enabling real-time access to performance, wellbeing, and benchmark metrics, eliminating manual report generation.",
      "Conducted advanced exploratory and comparative analysis (trend analysis, segmentation, sensitivity checks, industry benchmarks) to surface drivers of engagement and turnover across 1,000+ employees.",
      "Partnered with product, business, and leadership teams to define survey metrics, analytics features, and reporting logic, ensuring alignment between data models, product capabilities, and client decision needs."
    ],
  },
  {
    period: "February, 2024 — July, 2024",
    title: "Technical Business Analyst",
    org: "Rhodium Tech Ltd.",
    description: "Designed and shipped end-to-end pipelines on Databricks with the medallion architecture.",
    skills: ["PySpark", "Databricks", "Delta Lake", "Airflow", "Docker"],
    achievements: [
      "Led end-to-end data initiatives at a startup by translating unstructured business questions into analytical models, datasets, and dashboards used by investors, engineers, and clients for market entry and capacity planning decisions.",
      "Designed and automated large-scale data pipelines (Python, MySQL, MongoDB) ingesting millions of records from web scraping and external sources, improving data availability and reducing manual data preparation effort by an estimated 40–60%.",
      "Built national-level demand forecasts (5–10 year horizon) for Pakistan’s EV market using time-series models (ARIMA, CAGR, regression) and scenario analysis, supporting investment sizing, inventory planning, and logistics strategy.",
      "Developed structured market intelligence datasets (restaurants, EV charging outlets) via Google Maps scraping and schema design, enabling targeted sales outreach, backend-ready databases, and scalable internal analytics products.",
      "Created investor-facing analytical outputs (scenario models, dashboards, financial exhibits) combining forecasting and market data, directly supporting 15–20M PKR fundraising discussions and strategic positioning."
    ],
  },
  {
    period: "April, 2024 — Present",
    title: "Master's, Information Systems",
    org: "Universität Münster",
    description: "I am currently pursuing a Master’s in Information Systems at Uni Münster, specializing in Business Intelligence and Information Systems Development. My studies focus on predictive modeling, data pipeline development, and advanced analytics to solve real-world business challenges.",
    skills: ["Supervised Machine Learning", "Unsupervised Machine Learning", "Mining Massive Datasets", "Advance Concepts in Software Engineering", "Data Integration", "Logic Specification and Programming"],
    achievements: ["The program combines technical development with business strategy, enabling me to apply AI/ML techniques in data-driven decision-making and intelligent system development across industries."],
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
