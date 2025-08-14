// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "sudeeptisetti36@gmail.com";
  const phone = "+12038249338";
  const linkedin = "http://linkedin.com/in/sudeepti-chalamalasetti-9408b128a";
  const resumeLink = "/resume.pdf"; // ← change if your resume path is different

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h2>

        {/* Card */}
        <div className="mt-8 rounded-2xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-white/40 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 text-gray-900">

            {/* Location (bold, highlighted) */}
            <span
              title="Location"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold
                         text-gray-900 bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200
                         shadow transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>📍</span> Atlanta, GA
            </span>

            {/* Phone */}
            <a
              href={`tel:${phone}`}
              title="Call"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold
                         bg-white text-gray-900 shadow ring-1 ring-black/5
                         transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>📞</span> {phone}
            </a>

            {/* Email (highlighted with copy) */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold
                         text-gray-900 bg-gradient-to-r from-amber-100 via-pink-100 to-blue-100
                         shadow ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>✉️</span>
              <a href={`mailto:${email}`} className="font-semibold hover:underline">{email}</a>
              <button
                onClick={() => copy(email)}
                aria-label="Copy email"
                className="ml-2 rounded-md border border-black/10 bg-white/80 px-2 py-0.5 text-xs font-semibold
                           hover:bg-white transition"
              >
                Copy
              </button>
            </span>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              title="Open LinkedIn"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-white
                         bg-gradient-to-r from-blue-600 to-indigo-600 shadow transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>🔗</span> LinkedIn
            </a>

            {/* Resume */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              title="Open Resume"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-white
                         bg-gradient-to-r from-green-500 to-emerald-600 shadow transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>📄</span> Resume
            </a>
          </div>
        </div>
      </div>

      {/* Copy toast */}
      <div
        className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform transition
        ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <div className="rounded-full bg-black/85 px-4 py-2 text-sm font-medium text-white shadow-lg">
          Email copied to clipboard
        </div>
      </div>
    </section>
  );
}
