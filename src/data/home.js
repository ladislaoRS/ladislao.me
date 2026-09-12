/**
 * Home Page Data Model (The Eloquent Schema)
 *
 * Dedicated single source of truth for the Home landing page content.
 * Follows read.cv and editorial engineering portfolio conventions:
 * - Direct profile lockup with avatar and availability badge
 * - Curated experience highlights and engineering writing
 */

export const homeData = {
  profile: {
    name: "Ladislao Ramirez",
    role: "Lead Software Engineer",
    location: "El Paso, TX",
    avatar: "/avatar.jpeg",
    availability: "@ Guild Mortgage",
  },
  about: `Over 15 years designing, modernizing, and operating high-throughput distributed systems. Specialized in event-driven architectures, platform reliability, and leading engineering teams across FinTech, Healthcare, and Automotive.`,
  featuredExperience: [
    {
      company: "Guild Mortgage",
      role: "Senior Software Engineer",
      period: "2022 — Present",
      description: "Architecting high-concurrency microservices and resilient event pipelines across AWS and Azure for U.S. mortgage platforms.",
      href: "#/resume",
    },
    {
      company: "OtterBox",
      role: "Full-Stack Backend Engineer",
      period: "2021 — 2022",
      description: "Engineered global e-commerce integrations across Salesforce Commerce Cloud, enterprise ERPs, and distributed payment systems.",
      href: "#/resume",
    },
  ],
  featuredWriting: [
    {
      slug: "idempotency-in-payment-apis",
      title: "Preventing Duplicate Charges: Implementing Idempotency in Laravel",
      readTime: "6 min read",
      year: "2026",
    },
    {
      slug: "transactional-outbox-pattern",
      title: "The Outbox Pattern: Zero Message Loss Across Microservices",
      readTime: "7 min read",
      year: "2026",
    },
    {
      slug: "contract-first-api-governance",
      title: "Contract-First Architecture: OpenAPI as Single Source of Truth",
      readTime: "5 min read",
      year: "2026",
    },
  ],
  footer: {
    location: "El Paso, TX",
    year: 2026,
  },
};