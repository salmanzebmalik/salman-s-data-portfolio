type MethodologyStep = {
  step: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tag: "Data Engineering" | "Machine Learning" | "Full-Stack Development" | "Optimization";
  gradient: string;
  featured?: boolean;
  objective: string;
  role: string;
  technologies: string[];
  methodology: MethodologyStep[]; 
  outcomes: string[];
  repoUrl: string;
  image?: string;
  application: string;
};

export const projects: Project[] = [
  {
    "slug": "airflow-etl-retail-analytics",
    "title": "Airflow & Docker ETL Retail Analytics Pipeline",
    "subtitle": "End-to-end Bronze→Silver→Gold pipeline for retail analytics with orchestration and dashboards",
    "tag": "Data Engineering",
    "gradient": "from-blue-500/40 via-cyan-500/20 to-transparent",
    "featured": true,
    "objective": "This project demonstrates a full end-to-end ETL pipeline for retail analytics, starting from raw CRM and ERP CSV files, moving through cleansing and transformation, and culminating in business-ready analytical tables. The pipeline follows the Medallion Architecture with Bronze, Silver, and Gold layers. It leverages Docker for containerization, Apache Airflow for orchestration, MinIO for object storage, and PostgreSQL for data persistence. Gold-layer tables are exposed for KPIs and dashboards, and the workflow is automated with GitHub Actions for CI/CD.",
    "role": "Data Engineering & ETL Developer",
    "technologies": ["Python", "Pandas", "PostgreSQL", "Apache Airflow", "Docker", "MinIO", "Databricks", "SQL", "CI/CD", "GitHub Actions"],
    "methodology": [
      {
        "step": "Source Data Collection",
        "description": "Collect source data from CRM and ERP CSV files which include customer, product, and sales information."
      },
      {
        "step": "Bronze Layer – Raw Ingestion",
        "description": "Load raw CSV files into PostgreSQL Docker container without modification, preserving original structure and traceability."
      },
      {
        "step": "Silver Layer – Cleansing & Transformation",
        "description": "ETL scripts clean and standardize the data: normalize customer and product IDs, handle slow-changing dimensions, remove inconsistencies, and enrich sales data with customer and product information."
      },
      {
        "step": "Gold Layer – Business Modeling & KPIs",
        "description": "Aggregated gold-layer tables are created with business-ready KPIs such as sales by category, top customers, product maintenance counts, and sales trends over time."
      },
      {
        "step": "Orchestration & Automation",
        "description": "Apache Airflow DAGs orchestrate the ETL workflow, handling task dependencies, retries, and logging. Docker Compose ensures containerized reproducibility, and GitHub Actions automate ETL runs and testing."
      },
      {
        "step": "Dashboarding & Analytics",
        "description": "Gold tables are visualized via dashboards (Databricks) for actionable insights, supporting sales analysis, product monitoring, and customer segmentation."
      }
    ],
    "outcomes": [
      "Designed and implemented a full end-to-end ETL pipeline for retail analytics using Docker, Airflow, and PostgreSQL.",
      "Created Bronze, Silver, and Gold layers following the Medallion Architecture for clear data lineage and quality control.",
      "Implemented ETL scripts handling CSV ingestion, data cleaning, SCD handling, and enrichment of sales data with customer and product details.",
      "Orchestrated pipeline execution with Airflow DAGs and automated workflow via GitHub Actions CI/CD.",
      "Used MinIO to simulate cloud object storage for raw and intermediate datasets.",
      "Generated gold-layer tables for KPIs, including sales per category, top customers, active products, and maintenance counts.",
      "Enabled interactive dashboards and reporting, providing business-ready analytics and actionable insights."
    ],
    "repoUrl": "https://github.com/salmanzebmalik/airflow-etl-retail-analytics",
    "application": "This project demonstrates how companies can build modern analytics platforms that ingest heterogeneous CRM and ERP data, transform and cleanse it, and produce business-ready metrics and dashboards. The Medallion Architecture ensures data traceability and quality, while Airflow and Docker provide automated, reproducible, and production-ready orchestration. Stakeholders can monitor KPIs, analyze product performance, segment customers, and track sales trends efficiently."
  },
  {
    slug: "sql-data-warehouse-and-analytics",
    title: "SQL Data Warehouse & Analytics Platform",
    subtitle: "End-to-end Bronze→Silver→Gold pipeline for retail analytics",
    tag: "Data Engineering",
    gradient: "from-orange-500/40 via-rose-500/20 to-transparent",
    featured: true,
    objective: "This project demonstrates an end-to-end data warehousing and analytics solution, starting from raw data ingestion and ending with business-ready reporting. The warehouse follows the Medallion Architecture, using Bronze, Silver, and Gold layers to organize the data pipeline clearly. The Bronze layer stores raw CSV data, the Silver layer cleans and standardizes it, and the Gold layer provides business-ready data modeled for analytics. The project also includes a collection of SQL scripts for data exploration, reporting, segmentation, time-based trends, cumulative analytics, and metric calculation.",
    role: "Data Engineering & Analytics Developer",
    technologies: ["SQL", "ETL Pipelines", "Medallion Architecture", "Star Schema", "Data Modeling", "Analytics Reporting"],
    methodology: [
      { step: "Source Data Collection", description: "The project starts by collecting source data from CSV files. These files act as the original input data for the warehouse." },
      { step: "Bronze Layer – Raw Ingestion", description: "The raw CSV data is loaded into the SQL Server database without major changes. This layer keeps the original structure of the data so that the source information remains traceable." },
      { step: "Silver Layer – Cleansing & Standardization", description: "The ingested data is cleaned and prepared for analysis. This includes removing inconsistencies, standardizing formats, normalizing values, and improving data quality." },
      { step: "Gold Layer – Business Modeling", description: "The cleaned data is transformed into business-ready tables. Fact and dimension tables are created using a star schema so the data can support analytical queries and reporting." },
      { step: "Analytics & Reporting", description: "SQL scripts are used to explore the data, calculate KPIs, analyze trends, create segments, and generate insights for business reporting and decision-making." },
    ],
    outcomes: [
      "Built a structured SQL data warehouse using Bronze, Silver, and Gold layers.",
      "Designed a clear ETL flow from raw CSV files to business-ready analytical tables.",
      "Developed fact and dimension tables optimized for analytical queries.",
      "Created SQL scripts for database exploration, measures, KPIs, time-based trends, cumulative analysis, and segmentation.",
      "Enabled faster and more organized reporting by separating raw, cleaned, and business-ready data.",
      "Created a strong foundation for BI dashboards and stakeholder-facing analytics.",
    ],
    repoUrl: "https://github.com/salmanzebmalik/sql-data-warehouse",
    application: "This project reflects how companies build modern analytics platforms to support better decision-making. In a real business environment, such a data warehouse can be used to combine data from sales, customers, products, and transactions into one reliable reporting layer. For example, a company could use this platform to monitor revenue trends, customer segments, product performance, and business KPIs. The Medallion Architecture also makes the system easier to maintain because raw data, cleaned data, and business-ready data are clearly separated. This is useful for BI teams, data analysts, and business managers who need trustworthy data for reporting and strategic decisions.",
  },
  {
    slug: "forest-disturbance-detection",
    title: "Predicting Forest Disturbances Using Satellite Data",
    subtitle: "Machine learning model for detecting forest disturbances from satellite-derived spectral features",
    tag: "Machine Learning",
    gradient: "from-green-500/40 via-emerald-500/20 to-transparent",
    featured: true,
    objective: "Develop a machine learning model to detect forest disturbances such as deforestation and degradation using satellite-derived spectral data.",
    role: "Machine Learning Developer — feature engineering, model development, evaluation, and visualization.",
    technologies: ["Python", "XGBoost", "Pandas", "NumPy", "Scikit-learn", "SHAP", "t-SNE", "Matplotlib", "Satellite Data"],
    methodology: [
      {
        step: "Problem Framing",
        description: "The task was defined as a binary classification problem to predict whether a forest disturbance occurred at a specific location in a given year, where 1 represents disturbance and 0 represents no disturbance."
      },
      {
        step: "Satellite Feature Preparation",
        description: "Satellite-derived spectral bands such as RED, NIR, and SWIR were used together with vegetation and land-surface indices including NDVI, NBR, TCG, and TCB to capture vegetation, soil, and water dynamics."
      },
      {
        step: "Feature Engineering",
        description: "Year-over-year delta features were created to capture temporal changes in spectral behavior. Additional drop_flag features were introduced using z-scores to identify sudden drops that may indicate forest disturbance."
      },
      {
        step: "Model Training with XGBoost",
        description: "An XGBoost classifier was trained because it handles complex feature interactions and imbalanced datasets well. The model was optimized to improve the balance between precision and recall."
      },
      {
        step: "Evaluation and Error Analysis",
        description: "The model was evaluated mainly using F1-score instead of accuracy due to class imbalance. ROC curves, SHAP values, and t-SNE visualizations were used to analyze performance, interpret feature importance, and inspect misclassified cases."
      }
    ],
    outcomes: [
      "Built a binary classification model to detect forest disturbance from satellite-derived spectral data.",
      "Improved disturbance detection using engineered delta and drop_flag features.",
      "Used F1-score as the main performance metric to better handle class imbalance.",
      "Applied SHAP values to explain which features influenced model predictions.",
      "Used ROC curves and t-SNE plots to support error analysis and identify patterns in misclassified samples.",
      "Created visualizations and poster material for the final project presentation."
    ],
    repoUrl: "https://github.com/salmanzebmalik/forest-disturbance-detection",
    application: "This project can be applied in environmental monitoring, forestry management, and climate-related decision support. In real life, satellite-based disturbance detection helps governments, conservation organizations, and researchers identify deforestation, forest degradation, or land-use changes earlier and more consistently. Such a system can support forest protection policies, carbon monitoring, illegal logging detection, and sustainable land management by providing data-driven alerts about areas where forest conditions are changing."
  },
  {
    slug: "humor-podium-joke-recommender",
    title: "Humor Podium – Personalized Joke Recommender System",
    subtitle: "Interactive recommendation system that suggests jokes based on user ratings and semantic joke similarity",
    tag: "Data Engineering",
    gradient: "from-purple-500/40 via-pink-500/20 to-transparent",
    featured: true,
    objective: "Develop a personalized joke recommendation system that suggests jokes users are likely to enjoy based on their ratings, preferences, and semantic similarity between jokes.",
    role: "Full-Stack ML Developer — recommendation logic, NLP embeddings, backend integration, and interactive frontend development.",
    technologies: [
      "Python",
      "Sentence Transformers",
      "S-BERT",
      "Supabase",
      "Next.js",
      "React",
      "Three.js",
      "Motion.dev",
      "Tailwind CSS",
      "Cosine Similarity",
      "Recommendation Systems"
    ],
    methodology: [
      {
        step: "User Preference Collection",
        description: "Users first rate 5 random jokes on a scale from 1 to 5. These ratings create an initial preference profile that is used to generate the first personalized recommendation."
      },
      {
        step: "Joke Embedding Generation",
        description: "Each joke is converted into a 768-dimensional semantic embedding using S-BERT Sentence Transformers. These embeddings allow the system to compare jokes based on meaning rather than only exact words."
      },
      {
        step: "Similarity-Based Matching",
        description: "The system calculates cosine similarity between joke embeddings to identify jokes that are semantically close to the jokes the user rated positively."
      },
      {
        step: "Personalized Recommendation Scoring",
        description: "A personalized joke score is calculated by combining user ratings and joke similarity using a weighted formula: α * user_ratings + β * joke_similarity. This balances individual preference with content similarity."
      },
      {
        step: "Interactive Frontend Experience",
        description: "The recommendation system is presented through an interactive React-based interface with Three.js and Motion.dev, where jokes are displayed in a 3D cinema-style environment."
      }
    ],
    outcomes: [
      "Built a personalized joke recommender that combines user ratings with semantic joke similarity.",
      "Used S-BERT Sentence Transformers to represent jokes as high-dimensional embeddings.",
      "Applied cosine similarity to compare jokes based on semantic meaning.",
      "Integrated Supabase for storing jokes, ratings, and recommendation-related data.",
      "Created an interactive 3D frontend experience using React, Three.js, Motion.dev, and Tailwind CSS.",
      "Designed a recommendation formula that balances user preference and content similarity.",
      "Identified future improvements such as larger joke datasets, real-time embedding updates, and category-aware recommendations."
    ],
    repoUrl: "https://github.com/salmanzebmalik/personalized-joke-recommender",
    image: "/placeholder.svg",
    application: "This project demonstrates how personalized recommendation systems can improve user engagement by adapting content to individual preferences. In real life, similar techniques are used by streaming platforms, social media apps, e-commerce websites, and content platforms to recommend movies, products, posts, or articles. The same approach can be extended beyond jokes to any text-based recommendation problem, such as recommending news, learning content, entertainment media, or personalized chatbot responses based on user feedback and semantic similarity."
  },
  {
    slug: "social-media-unsupervised-learning",
    title: "Social Media Data Analysis Using Unsupervised Learning",
    subtitle: "Clustering and network analysis of social media messages to discover user behavior patterns",
    tag: "Machine Learning",
    gradient: "from-blue-500/40 via-cyan-500/20 to-transparent",
    featured: false,
    objective: "Analyze social media messages and user relationships to identify hidden behavior patterns, thematic clusters, and influential users using unsupervised learning and network analysis.",
    role: "Machine Learning Analyst — feature engineering, dimensionality reduction, clustering, visualization, and network analysis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PCA",
      "t-SNE",
      "K-Means Clustering",
      "Elbow Method",
      "Network Analysis",
      "Matplotlib"
    ],
    methodology: [
      {
        step: "Social Media Data Preparation",
        description: "The dataset was prepared using social media post information such as user ID, timestamps, and text data. An additional edge list of user relationships was used to analyze connections between users."
      },
      {
        step: "Text Feature Engineering",
        description: "Text-based features were transformed into numerical representations so that semantic relationships between words and messages could be analyzed using machine learning techniques."
      },
      {
        step: "Dimensionality Reduction",
        description: "PCA was applied to reduce high-dimensional word vectors into two principal components for easier visualization. t-SNE was also used to preserve local relationships and reveal non-linear patterns in the data."
      },
      {
        step: "Clustering and Topic Discovery",
        description: "The Elbow method was used to determine the optimal number of clusters, with k=3 selected. Clustering was applied to PCA-transformed and t-SNE-transformed data to identify major thematic groups in the messages."
      },
      {
        step: "Network and Community Analysis",
        description: "User relationship data was analyzed as a network to identify central users, influential nodes, and community structures. This helped reveal how users were connected and how interests spread across the network."
      }
    ],
    outcomes: [
      "Identified three main message clusters representing travel, science/technology, and emotional or fandom-related content.",
      "Used PCA to create a simple two-dimensional view of semantic similarities in the text data.",
      "Applied t-SNE to reveal stronger local groupings and non-linear relationships between related messages or words.",
      "Used the Elbow method to select k=3 as the optimal number of clusters.",
      "Performed network analysis to identify influential users and central nodes in the social graph.",
      "Discovered community structures showing how users were connected through shared interests and interactions.",
      "Created visualizations to support interpretation of clusters and user behavior patterns."
    ],
    repoUrl: "https://github.com/salmanzebmalik/social-media-clustering",
    image: "/placeholder.svg",
    application: "This project shows how unsupervised learning can be used to understand online communities without needing pre-labeled data. In real life, similar methods can help companies analyze customer conversations, detect trending topics, segment users by interests, identify influential users, and improve content recommendation strategies. Social platforms, marketing teams, and community managers can use this kind of analysis to understand what users are discussing, how communities form, and which users play an important role in spreading information."
  },
  {
    slug: "mymakler-fullstack-soa",
    title: "MyMakler – Full-Stack Web Application",
    subtitle: "Service-oriented real-estate platform using Spring MVC, REST APIs, MoM, Docker, and Kubernetes",
    tag: "Full-Stack Development",
    gradient: "from-sky-500/40 via-indigo-500/20 to-transparent",
    featured: true,
    objective: "Develop a multi-phase full-stack web application that connects demand and supply of apartments and houses, while extending an MVC architecture with RESTful services, asynchronous messaging, and containerized deployment.",
    role: "Full-Stack Developer — Spring MVC implementation, backend service design, DSL/code generation, REST API integration, messaging setup, and deployment configuration.",
    technologies: [
      "Java",
      "Spring MVC",
      "Spring Boot",
      "Spring Data JPA",
      "JPQL",
      "Thymeleaf",
      "REST APIs",
      "Xtext",
      "Xtend",
      "ActiveMQ Artemis",
      "Message-Oriented Middleware",
      "Docker",
      "Docker Compose",
      "Kubernetes"
    ],
    methodology: [
      {
        step: "MVC Application Foundation",
        description: "The project started by setting up a Spring MVC-based web application following the Model-View-Controller pattern. This provided a structured foundation for separating frontend views, business logic, and data access."
      },
      {
        step: "Data Model and Repository Layer",
        description: "Entities and repository classes were implemented using Spring Data JPA and JPQL. This allowed the application to store, retrieve, and manage apartment and house data through a clean persistence layer."
      },
      {
        step: "Frontend Views with Thymeleaf",
        description: "Thymeleaf templates were created to display real-estate listings and application data in a dynamic user interface. This helped connect backend data with user-facing web pages."
      },
      {
        step: "DSL and Code Generation",
        description: "A domain-specific language was developed using Xtext to model parts of the real-estate application. Xtend was then used to generate entity classes, DTOs, and Thymeleaf templates from the DSL definitions."
      },
      {
        step: "Service Integration and Deployment",
        description: "The application was extended with RESTful backend services and asynchronous fraud detection using ActiveMQ Artemis. The full application stack was containerized with Docker and deployed in a Kubernetes cluster for scalable and reliable execution."
      }
    ],
    outcomes: [
      "Built a multi-phase full-stack real-estate application for connecting apartment and house demand with supply.",
      "Extended an MVC-based architecture using Spring MVC, Thymeleaf, Spring Data JPA, and JPQL.",
      "Implemented RESTful services to improve communication between frontend and backend logic.",
      "Created a DSL with Xtext and used Xtend for generating entities, DTOs, and frontend templates.",
      "Integrated Message-Oriented Middleware using ActiveMQ Artemis for asynchronous fraud detection workflows.",
      "Containerized the application using Docker and Docker Compose.",
      "Deployed the application in a Kubernetes cluster to support scalability, reliability, and production-style deployment."
    ],
    repoUrl: "https://github.com/salmanzebmalik/mymakler_project_acse",
    image: "/placeholder.svg",
    application: "This project reflects how modern web platforms are built using service-oriented architecture. In real life, a similar system could support real-estate marketplaces where users search for apartments, property owners publish listings, and backend services handle business logic such as listing management, user interaction, and fraud detection. The REST API structure makes the system easier to extend, while asynchronous messaging helps process tasks such as fraud checks without blocking the main application. Docker and Kubernetes make the application easier to deploy, scale, and maintain in production environments."
  },
  {
    slug: "multi-objective-hpo-yahpo-gym",
    title: "Comparative Analysis of Multi-Objective Optimization Algorithms",
    subtitle: "Benchmarking multi-objective hyperparameter optimization algorithms using YAHPO Gym",
    tag: "Optimization",
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
    featured: false,
    objective: "Compare different multi-objective optimization algorithms for hyperparameter optimization and analyze under which problem conditions specific algorithms perform more effectively.",
    role: "Optimization Researcher — experimental design, benchmark setup, optimizer comparison, evaluation, and result interpretation.",
    technologies: [
      "Python",
      "YAHPO Gym",
      "pymoo",
      "Optuna",
      "SMAC",
      "NSGA-II",
      "NSGA-III",
      "ParEGO",
      "EHVI",
      "Random Search",
      "Hypervolume",
      "Pareto Optimization"
    ],
    methodology: [
      {
        step: "Problem Framing",
        description: "The project frames hyperparameter optimization as a multi-objective problem where machine learning performance must be balanced with conflicting goals such as accuracy, runtime, and resource consumption."
      },
      {
        step: "Benchmark Selection",
        description: "YAHPO Gym is used as the benchmark environment because it provides surrogate-based HPO scenarios. This makes experiments efficient and reproducible without repeatedly training real machine learning models."
      },
      {
        step: "Optimizer Selection",
        description: "Multiple optimization strategies are compared, including evolutionary algorithms such as NSGA-II and NSGA-III, model-based methods such as ParEGO or EHVI, and Random Search as a baseline."
      },
      {
        step: "Controlled Experiment Setup",
        description: "Each optimizer is evaluated under the same experimental conditions, including equal evaluation budgets, multiple runs, and different benchmark scenarios to ensure a fair comparison."
      },
      {
        step: "Pareto-Based Evaluation",
        description: "The algorithms are evaluated using multi-objective metrics such as hypervolume, diversity or spread, and convergence to compare the quality and coverage of their Pareto fronts."
      }
    ],
    outcomes: [
      "Designed an experimental benchmarking study for multi-objective hyperparameter optimization.",
      "Compared evolutionary, model-based, and baseline optimization methods.",
      "Used YAHPO Gym to simulate HPO experiments efficiently through surrogate models.",
      "Focused on conflicting objectives such as predictive accuracy and runtime.",
      "Selected hypervolume as the primary metric for evaluating Pareto front quality.",
      "Planned comparison across different problem characteristics such as dimensionality, noise, and number of objectives.",
      "Generated insights into which optimizer types are better suited for specific machine learning optimization scenarios."
    ],
    repoUrl: "",
    image: "/placeholder.svg",
    application: "This project is useful in real-world machine learning workflows where teams must balance model performance with practical constraints such as training time, computational cost, and resource usage. Instead of choosing a model only because it has the highest accuracy, multi-objective optimization helps decision-makers identify trade-offs. For example, a company may prefer a slightly less accurate model if it trains much faster or requires fewer resources. The findings from this project can support better optimizer selection in AutoML systems, machine learning operations, and performance-sensitive AI applications."
  },
  {
    slug: "geoai-platform-urban-monitoring",
    title: "GeoAI Platform – Geospatial Deep Learning Application",
    subtitle: "End-to-end geospatial platform for running ML models on satellite imagery and visualizing urban monitoring results",
    tag: "Machine Learning",
    gradient: "from-teal-500/40 via-green-500/20 to-transparent",
    featured: true,
    objective: "Develop an end-to-end geospatial application where users can select an area, process satellite imagery, run a machine learning model, and visualize the results for urban monitoring use cases.",
    role: "Data & ML Pipeline Developer — satellite data pipeline setup, FastAPI backend coordination, ML service integration, deep learning model training, and data pipeline optimization.",
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Deep Learning",
      "Satellite Imagery",
      "Geospatial Data",
      "Machine Learning Pipeline",
      "REST APIs",
      "Docker",
      "Backend–ML Service Architecture",
      "Data Pipeline Optimization"
    ],
    methodology: [
      {
        step: "Geospatial Problem Framing",
        description: "The project was framed as a GeoAI platform for social remote sensing and urban monitoring. The goal was to support use cases such as identifying construction sites, blocking cars, pavement quality, and tree quality from image-based data."
      },
      {
        step: "Satellite Data Pipeline Setup",
        description: "A data pipeline was designed to handle large satellite image datasets. This included organizing image data, preparing it for model training, and improving the pipeline so that large-scale geospatial data could be processed more efficiently."
      },
      {
        step: "Backend and ML Service Coordination",
        description: "FastAPI was used to coordinate communication between the backend and the ML service. This allowed the platform to receive user requests, trigger model inference, and return analysis results in a structured way."
      },
      {
        step: "Deep Learning Model Development",
        description: "A deep learning pipeline was designed and trained to analyze satellite imagery. The model was built to support image-based detection and classification tasks relevant to urban monitoring."
      },
      {
        step: "Result Visualization and Platform Integration",
        description: "The trained model and data pipeline were integrated into the end-to-end application so users could select an area, run the ML model, and visualize or analyze the results through the platform."
      }
    ],
    outcomes: [
      "Developed an end-to-end GeoAI platform as part of a group project.",
      "Built and optimized a data pipeline for handling large satellite image datasets.",
      "Used FastAPI to connect backend logic with the ML service.",
      "Designed an ML pipeline and trained a deep learning model for satellite image analysis.",
      "Created a platform workflow where users can select an area, run a machine learning model, and visualize the results.",
      "Gained practical experience in optimizing geospatial data pipelines for large image datasets.",
      "Connected machine learning, backend services, and geospatial application design into one working system."
    ],
    repoUrl: "https://github.com/salmanzebmalik/geoai",
    image: "/placeholder.svg",
    application: "This project has practical applications in smart city management, urban planning, infrastructure monitoring, and environmental observation. A similar platform could help municipalities, researchers, or urban service providers analyze satellite or drone imagery to detect construction activity, blocked roads, pavement damage, tree health, or other urban changes. By combining geospatial data pipelines, deep learning models, and an interactive platform, decision-makers can monitor cities more efficiently and make faster, data-driven decisions."
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
