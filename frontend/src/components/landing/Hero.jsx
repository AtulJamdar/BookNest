import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background px-6 pt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-12 text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-heading font-extrabold text-foreground tracking-tight leading-none">
            Modern <span className="text-primary">Library</span> Management
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            Streamline your collection, automate requests, and gain deep insights with our next-gen SaaS dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-6">
            <a href="/register" className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center">
              Start Free Trial <ArrowRight className="w-6 h-6" />
            </a>
            <a href="#features" className="px-12 py-5 bg-card border border-border text-foreground rounded-full font-bold text-lg shadow-sm hover:bg-slate-800 transition-all text-center">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center relative">
          <div className="w-[500px] h-[500px] bg-card backdrop-blur-3xl rounded-[3rem] shadow-2xl flex items-center justify-center border border-border">
            <BookOpen className="w-64 h-64 text-primary/20 animate-pulse" />
            <div className="absolute top-10 right-10 p-6 bg-slate-900 border border-border rounded-2xl shadow-xl text-foreground font-medium flex items-center gap-2">📈 <span className="text-muted-foreground">Analytics</span></div>
            <div className="absolute bottom-20 left-10 p-6 bg-slate-900 border border-border rounded-2xl shadow-xl text-foreground font-medium flex items-center gap-2 [animation-delay:1s]">📚 <span className="text-muted-foreground">12k+ Books</span></div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}