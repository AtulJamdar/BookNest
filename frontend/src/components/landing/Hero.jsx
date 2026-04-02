import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Home.jpg')" }} />
      <div className="absolute inset-0 bg-foreground/75 backdrop-blur-[2px]" />

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10 text-primary-foreground">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-accent" />
          Smart Library System
        </div>

        <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight font-serif">
          Manage Your Library
          <br />
          <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
            Without the Chaos
          </span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Track books, manage users, and automate operations with a system built for real-world reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link to="/register" className="group px-10 py-4 bg-accent text-accent-foreground rounded-2xl font-bold shadow-2xl hover:shadow-accent/40 transition-all flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#features" className="px-10 py-4 border border-primary-foreground/30 rounded-2xl font-bold hover:bg-primary-foreground/10 transition-colors">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}