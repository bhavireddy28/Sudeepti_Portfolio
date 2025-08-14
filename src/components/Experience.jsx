import React from "react";

const jobs = [
  {
    company: "McKesson, USA",
    title: ".NET Developer",
    period: "Jan 2023 – Present",
    bullets: [
      "Migrated legacy research apps to .NET Core → 35% faster response time.",
      "Tuned SQL Server & Cassandra → 55% lower query latency for real-time analytics.",
      "Automated CI/CD (Git, Jenkins, Docker, Azure DevOps) → 65% shorter release cycles.",
      "HIPAA-compliant migration (1.5M+ patient records) with zero data loss.",
      "ASP.NET Identity RBAC (21 CFR Part 11) • Better observability → ~50% faster incident resolution."
    ],
    accent: "from-pink-500 to-rose-500"
  },
  {
    company: "Intex Technologies, India",
    title: ".NET Developer",
    period: "Feb 2019 – Dec 2022",
    bullets: [
      "Built financial web apps (ASP.NET MVC, C#, JS) → +20% user engagement.",
      "Integrated payment/data provider APIs → +35% satisfaction; less manual entry.",
      "Optimized SQL Server schemas → 45% faster transactions; SSRS dashboards.",
      "Redis/MemoryCache → ~40% faster responses; lower infra costs.",
      "Security with OAuth2/JWT • CI/CD in Azure DevOps & Git → +50% release frequency."
    ],
    accent: "from-cyan-500 to-indigo-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experience</h2>
      <hr className="mt-3 hr-gradient" />
      <div className="mt-8 grid gap-6">
        {jobs.map((j, idx) => (
          <article
            key={j.company}
            className="card p-6 animate-slideUp"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${j.accent}`} />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {j.title} • <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{j.company}</span>
              </h3>
              <span className="text-sm text-gray-500">{j.period}</span>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              {j.bullets.map((b, i) => (
                <li key={i} className="transition hover:translate-x-0.5">{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
