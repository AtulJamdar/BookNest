import React from "react";
import Section from "../ui/Section";
import { ArrowRight, Headphones } from "lucide-react";

export default function CTA() {
  return (
    <Section className="!py-14 md:!py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#134e4a] px-6 sm:px-12 py-12 sm:py-14 shadow-xl shadow-[#1e3a5f]/25">
        <div className="absolute top-0 right-0 w-[min(50%,320px)] h-full opacity-[0.12] bg-[radial-gradient(circle_at_70%_30%,#f59e0b,transparent)] pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 text-amber-200/95 text-[0.8125rem] font-semibold mb-4">
              <Headphones className="w-4 h-4" />
              Implementation &amp; training
            </div>
            <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-white tracking-tight leading-tight mb-3">
              Bring your catalogue online this semester
            </h2>
            <p className="text-white/85 text-[1.0625rem] leading-relaxed">
              Start with a guided pilot, migrate at your pace, and roll out to
              departments when your team is confident—not before.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-7 py-3.5 text-[0.9375rem] font-bold text-[#422006] hover:bg-amber-400 transition-colors whitespace-nowrap"
            >
              Schedule a demo
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-7 py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Request proposal
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
