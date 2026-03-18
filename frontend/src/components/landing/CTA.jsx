import React from "react";
import Section from "../ui/Section";
import { Zap } from "lucide-react";

export default function CTA() {
  return (
    <Section className="bg-slate-950">
      <div className="text-center text-foreground space-y-12 bg-card border border-border p-20 md:p-28 rounded-[4rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none text-foreground relative z-10">Modernize <br /> Your <span className="text-primary">Library</span>.</h2>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto relative z-10 leading-relaxed">
          Join 1,200+ institutions already modernizing their future with our next-gen platform. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center pt-10 relative z-10">
          <a href="/register" className="px-12 py-6 bg-primary text-primary-foreground rounded-full text-2xl font-extrabold shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
             <Zap className="w-7 h-7" /> Start Free Trial
          </a>
          <a href="/demo" className="px-12 py-6 bg-slate-950/40 text-foreground border border-border rounded-full text-2xl font-extrabold hover:bg-slate-950/60 transition-all text-center">
            Schedule a Demo
          </a>
        </div>
      </div>
    </Section>
  );
}