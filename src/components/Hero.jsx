import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-20 pb-28 min-h-[80vh] flex items-center"
    >
      {/* Gradient accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-400/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-400/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            I’m Sudeepti
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Full-stack .NET developer delivering scalable, secure, and fast web apps.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/90">
            5+ years in pharma & finance — performance engineering, CI/CD, and
            audit-ready systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-white px-5 py-3 font-semibold text-purple-700 shadow transition hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="rounded-2xl border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-purple-700"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT: waving memoji */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-2xl ring-2 ring-yellow-300/50">
            {/* brighter halo */}
            <div className="pointer-events-none absolute -inset-5 rounded-full bg-gradient-to-tr from-yellow-300 via-orange-300 to-pink-300 blur-2xl opacity-90 animate-pulse" />
            {/* waving animation */}
            <img
              src="/memoji-wave.png" // put this in /public
              alt="Waving memoji"
              className="relative h-44 w-44 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-wave"
            />
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2s infinite;
          transform-origin: bottom center;
        }
      `}</style>
    </section>
  );
}
