import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="section-title">About</h2>
      <div className="mt-6 card p-8 bg-gradient-to-r from-indigo-50 via-pink-50 to-amber-50 shadow-xl border border-transparent hover:border-indigo-300 transition-all duration-300">
        <p className="text-[19px] text-gray-900 leading-relaxed">
          <span className="font-semibold text-indigo-700">.NET Developer</span> focused on 
          <span className="font-medium text-pink-600"> performance</span>, 
          <span className="font-medium text-purple-600"> reliability</span>, and 
          <span className="font-medium text-amber-600"> compliance</span>.
          I modernize legacy systems to <span className="font-semibold text-indigo-700">ASP.NET Core</span>, 
          automate <span className="font-semibold text-pink-600">CI/CD pipelines</span>, and deliver 
          measurable gains in <span className="font-semibold text-green-600">response time</span>, 
          <span className="font-semibold text-green-600"> release frequency</span>, and 
          <span className="font-semibold text-green-600"> operational visibility</span>.
        </p>
      </div>
    </section>
  );
}
