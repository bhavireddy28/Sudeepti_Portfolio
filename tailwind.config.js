// tailwind.config.js
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn .7s ease-out both",
        slideUp: "slideUp .7s ease-out both",
        textSlide: "textSlide 4s ease-in-out infinite",
        fadeInDown: "fadeInDown .6s ease-out",
        float: "float 4s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        glowPulse: "glowPulse 2.2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": {opacity:0}, "100%": {opacity:1} },
        slideUp: { "0%": {opacity:0, transform:"translateY(16px)"}, "100%": {opacity:1, transform:"translateY(0)"} },
        textSlide: { "0%,100%":{backgroundPosition:"0% 50%"}, "50%":{backgroundPosition:"100% 50%"} },
        fadeInDown: { "0%": {opacity:0, transform:"translateY(-10px)"}, "100%": {opacity:1, transform:"translateY(0)"} },
        float: { "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-10px)"} },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "25%": { transform: "translate(12px,-18px) scale(1.05)" },
          "50%": { transform: "translate(-10px,10px) scale(0.98)" },
          "75%": { transform: "translate(-6px,-8px) scale(1.03)" }
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(236,72,153,.35)" },
          "50%": { boxShadow: "0 20px 50px -12px rgba(236,72,153,.55)" }
        }
      },
      backgroundSize: { "200%": "200% 200%" },
      dropShadow: { glow: "0 10px 30px rgba(59,130,246,.35)" },
    },
  },
  plugins: [],
};
