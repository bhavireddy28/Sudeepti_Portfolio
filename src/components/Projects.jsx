// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    name: "Pharma Research Modernization",
    accent: "from-indigo-500 via-purple-500 to-pink-500",
    stack: [
      "ASP.NET Core",
      "EF Core",
      "Azure DevOps",
      "Docker",
      "ASP.NET Identity",
      "Serilog",
    ],
    summary:
      "Modernized legacy research applications to a cloud-ready .NET Core stack with secure RBAC and deep observability.",
    bullets: [
      "Cut average response time by ~35% through API refactors, async I/O, and cached reads.",
      "Implemented Identity-based RBAC and audit trails to meet 21 CFR Part 11.",
      "Containerized services and standardized CI/CD; blue-green deploys with rollbacks.",
      "Added structured logging + dashboards (Serilog + ELK) for fast incident triage.",
    ],
  },
  {
    name: "Financial Analytics Suite",
    accent: "from-fuchsia-500 via-rose-500 to-orange-400",
    stack: ["ASP.NET MVC", "SQL Server", "SSRS", "Redis", "OAuth2/JWT"],
    summary:
      "Interactive analytics for revenue, churn, and portfolio KPIs with secure data flows and faster reporting.",
    bullets: [
      "Built KPI dashboards and SSRS reports used by leadership for forecasting.",
      "Optimized SQL schemas and heavy queries; 45% faster report generation.",
      "Reduced infra cost and latency with Redis caching + fine-grained invalidation.",
      "Hardened auth with OAuth2/JWT; aligned to SOX & PCI-DSS requirements.",
    ],
  },
  {
    name: "Cloud DevOps Enablement",
    accent: "from-cyan-500 via-sky-500 to-indigo-500",
    stack: ["AWS", "Azure", "Jenkins", "Git", "IaC"],
    summary:
      "Standardized CI/CD and environment provisioning to accelerate delivery across teams.",
    bullets: [
      "Automated build/test/release across services; +50% release frequency.",
      "Reusable pipelines (linting, tests, SCA, container scan) as templates.",
      "Infra as Code for repeatable environments; secrets managed centrally.",
      "Release health checks + canary strategy to de-risk rollouts.",
    ],
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border-2 border-transparent bg-white text-gray-900 text-xs font-semibold px-2.5 py-1 ring-1 ring-inset ring-gray-200 shadow-sm">
    {children}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="section-title">Projects</h2>
      <hr className="mt-3 hr-gradient" />

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="card p-6 transition will-change-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            {/* Accent bar */}
            <div className={`h-2 w-full rounded-xl bg-gradient-to-r ${p.accent}`} />

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.name}</h3>

            {/* Stack badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            {/* Summary */}
            <p className="mt-3 text-gray-700">{p.summary}</p>

            {/* Bullets */}
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
