import React from "react";

const stats = [
  { value: "50K+", label: "Books Managed" },
  { value: "12K+", label: "Active Members" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "User Rating" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl md:text-6xl font-bold text-primary-foreground font-serif mb-2 tracking-tighter">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-primary-foreground/60 font-bold uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}