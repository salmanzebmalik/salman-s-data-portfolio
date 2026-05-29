const SKILLS = [
  "Python",
  "SQL",
  "PySpark",
  "Pandas",
  "NumPy",
  "DAX",

  "ETL/ELT",
  "Data Pipelines",
  "Data Integration",
  "Data Cleaning",
  "Data Validation",
  "Data Warehousing",
  "Data Modeling",
  "Dimensional Modeling",
  "Star Schema",
  "Medallion Architecture",
  "Data Lakehouse",

  "SQL Server",
  "MySQL",
  "PostgreSQL",
  "MongoDB",

  "Apache Spark",
  "Hadoop",
  "MapReduce",
  "Databricks",

  "Power BI",
  "KPI Dashboards",
  "Business Reporting",
  "Data Visualization",
  "Reporting Automation",
  "Forecasting",
  "Time-Series Analysis",
  "Statistical Analysis",

  "Machine Learning",
  "Scikit-learn",
  "XGBoost",
  "PyTorch",
  "SHAP",
  "Model Evaluation",
  "ML Pipelines",

  "FastAPI",
  "Docker",
  "Git",
  "GitHub",
  "Jupyter",
  "GitHub Copilot"
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
