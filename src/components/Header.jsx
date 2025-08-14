// src/components/Header.jsx
import React, { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// gradient TOP highlight for nav items (active + hover)
const topHighlight = (isActive) =>
  `relative px-1 py-2 font-semibold text-lg
   bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 bg-clip-text text-transparent
   after:absolute after:top-0 after:left-0 after:h-[3px] after:rounded-full
   after:bg-gradient-to-r after:from-purple-700 after:via-indigo-600 after:to-pink-600 after:transition-all
   ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`;

export default function Header() {
  const [elevate, setElevate] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Elevate header on scroll
  useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: highlight section in view
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target?.id) setActive(vis.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "backdrop-blur supports-[backdrop-filter]:bg-white/70",
        elevate ? "bg-white/85 shadow-sm" : "bg-white/60",
      ].join(" ")}
      style={{ willChange: "transform" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Brand: animated, highlighted name */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight
                     bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600
                     bg-clip-text text-transparent animate-gradient-move"
        >
          Sudeepti Setti
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`group opacity-90 hover:opacity-100 ${topHighlight(active === l.id)}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          className="hidden md:inline-block rounded-2xl bg-black px-5 py-2 text-base font-semibold text-white shadow hover:opacity-90"
        >
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden rounded-xl border px-3 py-2 text-sm font-medium"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 pb-4">
          <div className="rounded-2xl border bg-white/90 p-3 shadow-sm">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between rounded-xl px-3 py-3 text-lg font-semibold ${
                  active === l.id ? "bg-gray-50" : "hover:bg-gray-50"
                } ${topHighlight(active === l.id)}`}
              >
                {l.label}
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-black px-4 py-3 text-center font-semibold text-white shadow hover:opacity-90"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Gradient divider under header */}
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 opacity-50" />
    </header>
  );
}
