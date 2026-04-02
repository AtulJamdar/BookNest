import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Section from "../ui/Section";

const testimonials = [
  { name: "Sarah Jenkins", role: "Head Librarian", text: "This system saved us hours every week. Everything is faster and easier now." },
  { name: "David Chen", role: "IT Director", text: "Setup was simple and performance is excellent. Our team loves it." },
  { name: "Elena Rodriguez", role: "Library Director", text: "Very intuitive system. No training needed for our staff." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Reviews</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-serif">Trusted by Leaders</h2>
        </div>

        <div className="w-full bg-card border border-border/50 rounded-[3rem] p-12 md:p-20 relative shadow-2xl text-center">
          <Quote className="absolute top-10 left-10 w-12 h-12 text-accent/10" />
          
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>

          <p className="text-xl md:text-3xl font-serif italic text-foreground leading-relaxed mb-10">
            "{testimonials[index].text}"
          </p>

          <div>
            <div className="font-bold text-lg">{testimonials[index].name}</div>
            <div className="text-accent font-medium text-sm">{testimonials[index].role}</div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prev} className="p-4 rounded-2xl border border-border hover:bg-secondary transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-4 rounded-2xl border border-border hover:bg-secondary transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}