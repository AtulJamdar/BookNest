import React from "react";
import { ArrowRight, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[min(88vh,860px)] flex items-end sm:items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-stone-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/landing-hero.jpg')" }}
        role="img"
        aria-label="Library shelves and reading space"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/92 via-[#1e3a5f]/78 to-[#0f766e]/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/55 via-transparent to-[#1e3a5f]/25"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-14 pt-28 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/95 backdrop-blur-sm mb-6">
            <Building2 className="w-3.5 h-3.5 text-amber-200" aria-hidden />
            Trusted by libraries &amp; campuses
          </div>

          <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-5">
            Library management software
            <span className="block mt-1 text-amber-100/95 font-semibold">
              built for Indian institutions
            </span>
          </h1>

          <p className="text-[1.0625rem] sm:text-lg text-white/88 leading-relaxed max-w-xl mb-8 font-medium">
            Catalog, circulation, members, and reports in one secure place—so
            your team spends less time on paperwork and more time supporting
            readers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-6 py-3.5 text-[0.9375rem] font-bold text-[#422006] shadow-lg shadow-black/20 hover:bg-amber-400 transition-colors"
            >
              Start free trial
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3.5 text-[0.9375rem] font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              View capabilities
            </a>
          </div>

          <p className="mt-8 text-[0.8125rem] leading-relaxed text-white/70 tracking-wide">
            ISO-minded workflows · Role-based access · Dedicated onboarding support
          </p>
        </div>
      </div>
    </section>
  );
}
