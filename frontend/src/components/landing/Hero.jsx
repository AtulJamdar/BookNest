import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Image (Replace URL later) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Home.jpg')", // <-- replace with your image
        }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-3xl w-full text-center space-y-6 relative z-10 text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium backdrop-blur">
          <Sparkles className="w-4 h-4" />
          Smart Library System
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Manage Your Library
          <br />
          Without the Chaos
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
          Track books, manage users, and automate operations with a clean,
          simple system built for real-world usage.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href="/register"
            className="group px-6 py-3 bg-primary text-white rounded-xl font-medium shadow hover:shadow-md transition flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>

          <a
            href="#demo"
            className="px-6 py-3 border border-white/30 rounded-xl font-medium text-white hover:bg-white/10 transition"
          >
            View Demo
          </a>
        </div>

        {/* Trust Line */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs text-white/70">
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
