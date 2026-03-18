import React from "react";
import Section from "../ui/Section";

const reviews = [
  { name: "Sarah Jenkins", role: "Head Librarian, Oxford High", text: "This system saved us 20 hours of manual data entry every single week. It's a game changer." },
  { name: "David Chen", role: "University IT Director", text: "The API integration was seamless. Our students actually enjoy using the library portal now." },
  { name: "Elena Rodriguez", role: "Community Organizer", text: "Finally, a system that doesn't require a 100-page manual to understand. Simply brilliant." },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-background">
      <div className="text-center mb-28">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground">User Stories</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card p-12 rounded-[3.5rem] border border-border flex flex-col justify-between hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <p className="text-2xl md:text-3xl italic leading-relaxed mb-12 text-foreground">“{r.text}”</p>
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-border flex items-center justify-center font-bold text-2xl text-primary">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">{r.name}</div>
                <div className="text-primary font-medium">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}