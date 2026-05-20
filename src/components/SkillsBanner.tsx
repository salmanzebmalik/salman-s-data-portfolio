const SKILLS = [
  "Python", "SQL", "PySpark", "ETL/ELT", "Data Warehousing",
  "Medallion Architecture", "Power BI", "DAX", "Docker", "FastAPI",
  "Databricks", "Hadoop", "MapReduce", "Agentic AI", "Machine Learning",
  "GitHub", "Gold Layer", "Analytics",
];

export function SkillsBanner() {
  const row = [...SKILLS, ...SKILLS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background-alt py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background-alt to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background-alt to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-foreground md:text-3xl">
            {s}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
