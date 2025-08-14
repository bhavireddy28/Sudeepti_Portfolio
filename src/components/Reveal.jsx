// src/components/Reveal.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", delay = 0, children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${className} ${
        show ? "animate-slideUp" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </Tag>
  );
}
