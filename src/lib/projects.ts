export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tag: "Data Engineering" | "Machine Learning" | "Analytics" | "Agentic AI";
  gradient: string;
  featured?: boolean;
  objective: string;
  role: string;
  technologies: string[];
  workflow: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "medallion-lakehouse",
    title: "Medallion Lakehouse on Databricks",
    subtitle: "End-to-end Bronze→Silver→Gold pipeline for retail analytics",
    tag: "Data Engineering",
    gradient: "from-orange-500/40 via-rose-500/20 to-transparent",
    featured: true,
    objective: "Unify fragmented retail data into a governed lakehouse delivering analytics-ready Gold tables.",
    role: "Lead Data Engineer — owned architecture, ingestion, transformations, and orchestration.",
    technologies: ["PySpark", "Databricks", "Delta Lake", "Azure", "SQL", "Power BI"],
    workflow: [
      "Ingested raw CSV / API feeds into Bronze with Auto Loader.",
      "Cleaned and standardized into Silver using PySpark + Delta.",
      "Modeled star-schema Gold tables for BI consumption.",
      "Scheduled with Workflows and monitored via Unity Catalog.",
    ],
    outcomes: [
      "62% reduction in dashboard refresh time.",
      "Single source of truth across 6 business domains.",
      "Self-serve analytics enabled for non-technical teams.",
    ],
  },
  {
    slug: "etl-pyspark-warehouse",
    title: "PySpark ETL → Warehouse",
    subtitle: "Petabyte-scale batch ETL with Hadoop + Spark on Azure",
    tag: "Data Engineering",
    gradient: "from-amber-500/40 via-orange-500/20 to-transparent",
    featured: true,
    objective: "Replace legacy MapReduce jobs with a maintainable, observable Spark pipeline.",
    role: "Data Engineer — pipeline design and performance tuning.",
    technologies: ["PySpark", "Hadoop", "Airflow", "SQL", "Docker"],
    workflow: [
      "Profiled legacy MapReduce jobs and bottlenecks.",
      "Rewrote transformations in PySpark with broadcast joins.",
      "Containerized with Docker for reproducibility.",
      "Orchestrated daily DAGs in Airflow.",
    ],
    outcomes: ["4× faster job runtime.", "Cost savings of ~30% on cluster spend.", "Test-coverage above 80%."],
  },
  {
    slug: "churn-ml-fastapi",
    title: "Customer Churn ML Service",
    subtitle: "Gradient-boosted model served via FastAPI",
    tag: "Machine Learning",
    gradient: "from-violet-500/40 via-indigo-500/20 to-transparent",
    featured: true,
    objective: "Predict customer churn 30 days in advance with explainable outputs.",
    role: "ML Engineer — feature engineering, model training, deployment.",
    technologies: ["Python", "XGBoost", "FastAPI", "Docker", "SHAP"],
    workflow: [
      "Built feature store from Gold layer.",
      "Trained XGBoost with hyperparameter search.",
      "Wrapped model in FastAPI with SHAP explanations.",
      "Deployed via Docker to staging.",
    ],
    outcomes: ["AUC 0.91 on hold-out set.", "12% reduction in monthly churn.", "Sub-50ms inference latency."],
  },
  {
    slug: "agentic-ai-analyst",
    title: "Agentic AI Analyst",
    subtitle: "LLM agents that query the warehouse and write reports",
    tag: "Agentic AI",
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
    objective: "Let business users ask natural-language questions across Gold tables.",
    role: "Builder — agent design, tool wiring, evals.",
    technologies: ["Python", "LangGraph", "FastAPI", "Postgres"],
    workflow: [
      "Defined SQL + chart tools.",
      "Built planner-executor agent loop.",
      "Added evals on a Q&A benchmark.",
      "Shipped Slack interface.",
    ],
    outcomes: ["Analyst time -40%.", "85% answer accuracy on benchmark."],
  },
  {
    slug: "powerbi-finance",
    title: "Finance Analytics — Power BI",
    subtitle: "DAX-driven executive dashboards",
    tag: "Analytics",
    gradient: "from-sky-500/40 via-blue-500/20 to-transparent",
    objective: "Give the CFO a real-time view of cash, margin, and runway.",
    role: "Analytics Engineer — semantic model + dashboards.",
    technologies: ["Power BI", "DAX", "SQL"],
    workflow: ["Modeled tabular schema.", "Authored DAX measures.", "Designed exec dashboards."],
    outcomes: ["Monthly close cycle shortened by 5 days.", "Adopted across 4 departments."],
  },
  {
    slug: "realtime-streaming",
    title: "Real-time Event Streaming",
    subtitle: "Kafka + Spark Structured Streaming",
    tag: "Data Engineering",
    gradient: "from-pink-500/40 via-fuchsia-500/20 to-transparent",
    objective: "Surface near-real-time KPIs from clickstream data.",
    role: "Data Engineer — streaming architecture.",
    technologies: ["Kafka", "Spark Streaming", "Delta Lake"],
    workflow: ["Producers from web/app.", "Stream into Delta.", "Materialize KPIs."],
    outcomes: ["Latency under 30s end-to-end."],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
