import React from "react";

const stats = [
  { value: "1,200+", label: "Libraries & campuses" },
  { value: "8,50,000+", label: "Patrons supported" },
  { value: "42,00,000+", label: "Resources catalogued" },
  { value: "98%", label: "Teams happy with onboarding" },
];

export default function Stats() {
  return (
    <section id="stats" className="w-full border-y border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center lg:text-left ${
                i > 0 ? "lg:border-l lg:border-stone-200 lg:pl-8" : ""
              }`}
            >
              <div className="text-[1.75rem] sm:text-[2rem] font-bold tabular-nums tracking-tight text-[#0f766e]">
                {s.value}
              </div>
              <p className="mt-1.5 text-[0.8125rem] sm:text-[0.875rem] font-medium text-stone-600 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
