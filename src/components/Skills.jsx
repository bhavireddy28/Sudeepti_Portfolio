// src/components/Skills.jsx
import React from "react";

/** ——— Icon discs (clean SVG, always crisp) ——— */
const IconDisc = ({ children, gradient }) => (
  <div
    className={`relative h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${gradient} shadow-md`}
    aria-hidden="true"
  >
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      <div className="absolute -inset-2 rounded-[1rem] bg-white/20 blur-md" />
    </div>
    <div className="relative h-full w-full grid place-items-center text-white">{children}</div>
  </div>
);

const ServerGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="8" cy="7" r="1" fill="currentColor"/>
    <circle cx="8" cy="17" r="1" fill="currentColor"/>
  </svg>
);

const LaptopGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="3" y="17" width="18" height="2.5" rx="1.2" fill="currentColor"/>
  </svg>
);

const CloudGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 18a4 4 0 1 1 .7-7.95A5.5 5.5 0 0 1 18.2 9 3.8 3.8 0 1 1 19 17H7z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
  </svg>
);

/** ——— Data ——— */
const categories = [
  {
    title: "Backend (.NET)",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: <ServerGlyph />,
    skills: [
      ".NET / ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Redis", "Cassandra", "SSRS",
    ],
    chipColor: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Frontend",
    gradient: "from-sky-500 to-indigo-600",
    icon: <LaptopGlyph />,
    skills: ["React", "Angular/AngularJS", "TypeScript", "JavaScript"],
    chipColor: "from-sky-500 to-indigo-600",
  },
  {
    title: "Cloud & DevOps",
    gradient: "from-emerald-500 to-teal-600",
    icon: <CloudGlyph />,
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins", "Azure DevOps"],
    chipColor: "from-emerald-500 to-teal-600",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        <p className="mt-2 text-lg text-gray-600">Crafting solutions with these technologies.</p>

        <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="card p-6 hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <IconDisc gradient={c.gradient}>{c.icon}</IconDisc>
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
              </div>

              {/* Accent line */}
              <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r ${c.chipColor} transition-all group-hover:w-24`} />

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className={`chip border-transparent bg-white text-gray-900 ring-1 ring-inset 
                                ${/* gradient border via background-clip trick */""}
                                inline-flex items-center`}
                    style={{
                      backgroundImage: `linear-gradient(white,white), linear-gradient(90deg, var(--from), var(--to))`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box,border-box",
                      // pass Tailwind colors as CSS vars for each card
                      ["--from"]: "color-mix(in oklab, rgb(236 72 153) 1, transparent)", // default
                      ["--to"]: "color-mix(in oklab, rgb(147 51 234) 1, transparent)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
