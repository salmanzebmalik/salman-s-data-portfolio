const SKILLS = [
  "Python", "SQL", "PySpark", "ETL/ELT", "Data Warehousing",
  "Medallion Architecture", "Power BI", "DAX", "Docker", "FastAPI",
  "Databricks", "Hadoop", "MapReduce", "Agentic AI", "Machine Learning",
  "GitHub", "Gold Layer", "Analytics",
];

export function SkillsBanner() {
  const row = [...SKILLS, ...SKILLS];
  return (
    <div className="relative overflow-hidden bg-background-alt py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background-alt to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background-alt to-transparent" />
      <div className="flex w-max animate-marquee gap-3 whitespace-nowrap">
        {row.map((s, i) => (
          <span
            key={i}
            className="rounded-full border border-primary/30 bg-primary-muted px-5 py-2 font-sans text-sm font-medium text-primary md:text-base"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
