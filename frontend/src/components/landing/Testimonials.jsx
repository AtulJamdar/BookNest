import React, { useState } from "react";
import Section from "../ui/Section";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const quotes = [
  {
    name: "Dr. Meera Nair",
    role: "University Librarian · South India",
    text: "Our consortium moved three colleges onto BookNest in one academic year. Training was short and support was responsive when we needed custom rules.",
  },
  {
    name: "Arjun Kapoor",
    role: "IT Lead · K–12 chain",
    text: "Permissions and audit trails were non-negotiable for our leadership team. BookNest gave us both without slowing librarians down.",
  },
  {
    name: "Sunita Deshpande",
    role: "Public library district",
    text: "Peak-hour checkout finally feels smooth. Patrons notice the shorter wait more than they notice the software—and that is exactly what we wanted.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = quotes[idx];

  return (
    <Section id="testimonials" className="!py-16 md:!py-24 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#0f766e] mb-3">
          Stories
        </p>
        <h2 className="text-[1.875rem] sm:text-[2.25rem] font-bold text-[#1e3a5f] tracking-tight">
          Hear from librarians on the ground
        </h2>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 sm:p-10 md:p-12 relative">
        <Quote
          className="absolute top-8 right-8 w-10 h-10 text-[#0f766e]/15 hidden sm:block"
          aria-hidden
        />
        <blockquote className="text-[1.0625rem] sm:text-[1.125rem] leading-relaxed text-stone-800 text-left mb-10">
          “{t.text}”
        </blockquote>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-left">
            <cite className="not-italic text-[1rem] font-semibold text-[#1e3a5f]">
              {t.name}
            </cite>
            <p className="text-[0.875rem] text-stone-500 mt-1">{t.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setIdx((i) => (i - 1 + quotes.length) % quotes.length)
              }
              className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:border-[#0f766e]/40 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5 px-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-8 bg-[#0f766e]" : "w-2 bg-stone-300"
                  }`}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIdx((i) => (i + 1) % quotes.length)}
              className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:border-[#0f766e]/40 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
