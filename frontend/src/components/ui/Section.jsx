import React from "react";

export default function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 lg:px-8 py-20 md:py-28 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}
