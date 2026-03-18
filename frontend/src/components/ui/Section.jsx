import React from "react";

export default function Section({ children, id, className = "" }) {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex items-center justify-center px-6 lg:px-8 py-32 border-b border-border/50 last:border-b-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}