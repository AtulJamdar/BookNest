import React from "react";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="aspect-[4/5] rounded-[4rem] bg-gradient-to-tr from-primary to-accent/30 p-1">
             <div className="w-full h-full bg-slate-950 rounded-[3.8rem] flex items-center justify-center shadow-inner border border-border">
               <div className="w-[80%] h-4 bg-slate-800 rounded-full mb-4 animate-pulse"></div>
               <div className="w-[60%] h-4 bg-slate-800 rounded-full mb-4 animate-pulse [animation-delay:0.5s]"></div>
             </div>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-background p-8 rounded-3xl shadow-2xl border border-border group-hover:-translate-y-2 transition-transform">
            <div className="text-5xl font-extrabold text-primary tracking-tighter">99.9%</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Server Uptime</div>
          </div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
        </div>
        <div className="space-y-10">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">Next Generation <span className="text-primary">Library Software</span></h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We realized that library systems were stuck in the 90s. We built a platform that feels like your favorite modern apps—fast, beautiful, and effortless to use.
          </p>
          <div className="grid grid-cols-2 gap-10 pt-8 border-t border-border">
            <div>
              <h4 className="font-bold text-2xl text-foreground">Cloud Architecture</h4>
              <p className="text-lg text-muted-foreground">Access from anywhere, secure on any device.</p>
            </div>
            <div>
              <h4 className="font-bold text-2xl text-foreground">End-to-End Encryption</h4>
              <p className="text-lg text-muted-foreground">Enterprise-grade security for user data.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}