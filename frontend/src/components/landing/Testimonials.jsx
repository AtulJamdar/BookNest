import React, { useState } from "react";
import Section from "../ui/Section";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Head Librarian",
    text: "This system saved us hours every week. Everything is faster and easier now.",
  },
  {
    name: "David Chen",
    role: "IT Director",
    text: "Setup was simple and performance is excellent. Our team loves it.",
  },
  {
    name: "Elena Rodriguez",
    role: "Library Director",
    text: "Very intuitive system. No training needed for our staff.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <Section id="testimonials" className="bg-background py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            What Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from people using the system daily.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="w-full max-w-3xl text-center border border-border rounded-2xl p-10 space-y-6 transition-all duration-300 hover:shadow-lg">
          {/* Stars */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary" />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            "{current.text}"
          </p>

          {/* Author */}
          <div className="space-y-1">
            <div className="font-semibold text-foreground">{current.name}</div>
            <div className="text-sm text-muted-foreground">{current.role}</div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="p-3 border border-border rounded-full hover:bg-muted transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="p-3 border border-border rounded-full hover:bg-muted transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}