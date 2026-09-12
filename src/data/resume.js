/**
 * Resume Data Model (The Eloquent Schema)
 * 
 * Authentic, updated 2026 resume data for Ladislao Ramirez.
 * Follows the Laravel & Artisan craftsmanship principles:
 * - Expressive, human-first naming
 * - Clean separation of data and presentation
 * - Preserves the authentic 3 philosophy cards, timeline, and 3-column skills layout
 */

export const resumeData = {
  personal: {
    name: "Ladislao Ramirez",
    role: "Lead Software Engineer",
    location: "El Paso, TX",
    email: "ladislao.ramirez@gmail.com",
    website: "https://ladislao.me",
    github: "https://github.com/ladislaoRS",
    linkedin: "https://www.linkedin.com/in/ladislao-ramirez-43b447207/",
    availability: "@ Guild Mortgage",
    avatar: "/avatar.jpeg",
  },

  summary: `Senior Software Engineer & Systems Architect with 15+ years of engineering craftsmanship designing, modernizing, and scaling mission-critical distributed systems. Proven track record leading high-concurrency FinTech platforms at Guild Mortgage, state-level public health infrastructure for California (CalVax), and enterprise e-commerce solutions at OtterBox. Specialist in event-driven microservices across AWS and Azure cloud platforms, modern PHP/Laravel architectures, contract-first APIs (GraphQL, OpenAPI), and developer tooling that eliminates friction across distributed teams.`,

  philosophy: [
    {
      title: "Architectural Clarity",
      description: "Designing decoupled microservices, domain-driven systems, and explicit contracts (OpenAPI, GraphQL) that make complex business domains intuitive.",
    },
    {
      title: "Resilient Event Pipelines",
      description: "Architecting fault-tolerant asynchronous messaging pipelines across AWS and Azure cloud platforms to guarantee high throughput and zero data loss.",
    },
    {
      title: "Craftsmanship & Team Parity",
      description: "Standardizing containerized Docker shared environments, robust automated test suites, and strict code review governance to eliminate environment drift.",
    },
  ],

  competencies: {
    "Microservices & Cloud Platforms": [
      "Microservices Architecture",
      "AWS (SQS, SNS)",
      "Azure (Azure AD B2C, Service Bus)",
      "RabbitMQ & Message Queues",
      "Docker & Shared Local Environments",
      "Event-Driven Architecture",
      "Observability & Metrics (Grafana)",
    ],
    "Languages & Frameworks": [
      "PHP 8.x (Laravel 4 — 12, Yii)",
      "Node.js Runtime & Express",
      "GraphQL & RESTful APIs (OpenAPI 3.0)",
      "Vue.js (Vue 2 & Vue 3)",
      "JavaScript (ES6+) & TypeScript",
      "Tailwind CSS & Modern Tooling",
    ],
    "Databases & Infrastructure": [
      "Redis & Memcached Caching",
      "PostgreSQL & MSSQL",
      "MySQL & MariaDB",
      "Elasticsearch & Algolia",
      "Linux Administration (Ubuntu, CentOS)",
      "Git & CI/CD Pipelines",
    ],
  },

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Guild Mortgage Company / Tavant Technologies",
      location: "San Diego, CA (Remote)",
      period: "Oct 2022 — Present",
      isCurrent: true,
      description: "Lead technical planning, design, and full-stack software development for Guild Mortgage's enterprise digital lending applications supporting U.S. mortgage markets.",
      achievements: [
        "Architected and implemented scalable microservices powering Guild Mortgage's digital lending platform, handling high-concurrency mortgage origination workflows across the United States.",
        "Engineered resilient event-driven messaging pipelines utilizing AWS SQS/SNS, Azure Service Bus, and RabbitMQ for real-time asynchronous data distribution across internal and external financial services.",
        "Implemented end-to-end distributed system observability, metrics, and centralized logging using Grafana, providing real-time telemetry, automated alerting, and proactive incident diagnostics across production microservices.",
        "Designed in-house GraphQL and RESTful APIs with OpenAPI 3.0 specifications, integrating third-party banking platforms and securing consumer identity with Azure AD B2C.",
        "Managed heterogeneous multi-database environments across PostgreSQL, MSSQL, MySQL, and MariaDB, implementing Redis cache layers to minimize query latency under peak loads.",
        "Configured and standardized Docker containerized workflows for shared local environments, ensuring consistency across distributed engineering teams and eliminating environment-drift.",
      ],
      techStack: ["Microservices", "PHP / Laravel", "GraphQL", "REST / OpenAPI 3.0", "AWS (SQS/SNS)", "Azure B2C / Service Bus", "RabbitMQ", "Grafana", "PostgreSQL", "MSSQL", "MySQL", "Redis", "Docker"],
    },
    {
      role: "Full-Stack Engineer / Backend Developer",
      company: "OtterBox, LLC",
      location: "Fort Collins, CO (Remote)",
      period: "May 2021 — Oct 2022",
      isCurrent: false,
      description: "Hands-on engineering within a global e-commerce environment managing enterprise integrations across Salesforce Commerce Cloud, Sugar CRM, ERP, and payment processors.",
      achievements: [
        "Architected and maintained high-volume integrations between Salesforce Commerce Cloud, Sugar CRM, enterprise ERP systems, and payment gateways across global regional storefronts.",
        "Advocated for and enforced engineering craftsmanship by establishing rigorous code review processes and best practices across the product support team.",
        "Engineered functional enhancements, custom workflows, and automated backend services supporting 24/7 customer service operations and global sales.",
        "Troubleshot and debugged high-priority production escalations, maximizing system uptime and data consistency across distributed third-party APIs.",
      ],
      techStack: ["PHP", "Sugar CRM", "Salesforce Commerce Cloud", "ERP Integrations", "REST APIs", "MySQL", "Git"],
    },
    {
      role: "Backend Developer (CalVax Tracking System)",
      company: "California Department of Public Health",
      location: "Sacramento, CA (Remote)",
      period: "Oct 2020 — May 2021",
      isCurrent: false,
      description: "Architected and delivered the statewide CalVax COVID-19 vaccine tracking and allocation platform during the height of California's public health emergency response.",
      achievements: [
        "Spearheaded the design and backend delivery of the CalVax tracking system, monitoring and orchestrating COVID-19 vaccine distribution for hospitals and healthcare providers statewide.",
        "Engineered modular, testable, and reusable APIs and PHP modules in Laravel (8.*) and MySQL, interfacing with Vue.js frontend dashboards under critical state deadlines.",
        "Collaborated closely with cross-agency CDPH leadership, public health teams, and CRM stakeholders to align software development with evolving health mandates.",
      ],
      techStack: ["Laravel 8", "PHP 8", "MySQL", "Vue.js", "RESTful APIs", "Docker", "GitLab CI"],
    },
    {
      role: "Laravel Backend Developer",
      company: "USA Cycling & USA Hockey",
      location: "Colorado Springs, CO (Remote)",
      period: "Dec 2019 — Oct 2020",
      isCurrent: false,
      description: "Spearheaded digital modernization initiatives, retiring legacy infrastructure and building next-generation digital products and customer suites from the ground up.",
      achievements: [
        "Led the architecture and engineering of new customer digital tools and member management products utilizing Laravel (8.*), MariaDB 10, Node.js, Vue.js 2, Docker, and Laradock.",
        "Decommissioned legacy systems by establishing containerized local and staging environments, accelerating release frequency and developer productivity.",
        "Integrated backend services with enterprise CRM platforms, payment processors (POS), and Business Intelligence (BI) data pipelines.",
      ],
      techStack: ["Laravel 8", "MariaDB", "Node.js", "Vue.js", "Docker", "Laradock", "REST APIs"],
    },
    {
      role: "Software Engineer & Test Engineer",
      company: "Delphi Technical Center / Aptiv",
      location: "Juarez, Mexico",
      period: "Oct 2010 — Dec 2019",
      isCurrent: false,
      description: "Engineered global engineering software systems and automated verification frameworks for automotive electronics.",
      achievements: [
        "Conceived and developed the Global SCM (Supplier Chain Management) Tracking System, solving international compliance by standardizing reporting across global facilities through the Global Engineering Database.",
        "Honored with the **Delphi Excellence Award (2016)** for technical innovation and measurable impact across international divisions.",
        "Authored automated test suites, unit tests, and integration scripts for automotive instrument clusters and Body Security Electronics (BSE) adhering to rigorous GSCP standards.",
      ],
      techStack: ["PHP", "MySQL", "Automated Testing", "Shell Scripting", "Linux", "Enterprise Architecture"],
    },
  ],

  projects: [],

  education: [
    {
      degree: "Bachelor of Science in Electrical Engineering",
      institution: "Universidad Autonoma de Ciudad Juarez",
      period: "Aug 2001 — Dec 2006",
      details: "Comprehensive foundation in Systems Engineering, Digital Architecture, Microprocessors, and Complex Problem Solving.",
    },
  ],

  certifications: [
    {
      title: "Delphi Excellence Award (SCM System)",
      issuer: "Delphi Corporation / Aptiv",
      year: "2016",
    },
    {
      title: "Agile & SDLC Technical Leadership",
      issuer: "Enterprise Professional Development",
      year: "2022",
    },
  ],
};
