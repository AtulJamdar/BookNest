import React, { useState } from "react";
import Section from "../ui/Section";
import { Zap, CheckCircle, ArrowRight, Sparkles, Clock, Shield } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "14-day free trial, no credit card required" },
    { icon: <Zap className="w-5 h-5" />, text: "Setup in under 30 minutes" },
    { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security included" },
  ];

  return (
    <Section className="bg-gradient-to-br from-slate-950 via-background to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-50" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-30" />

      <div className="relative z-10">
        <div className="text-center text-foreground space-y-12 bg-card/50 backdrop-blur-sm border border-border/50 p-8 md:p-16 lg:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500 ease-out">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl opacity-20" />

          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              Transform Your Library in{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                30 Days
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join 1,200+ institutions already modernizing their future with our next-gen platform. Start your free trial today and see the difference in weeks, not years.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-left max-w-2xl mx-auto">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-foreground hover:scale-105 transition-transform duration-200 ease-out"
                >
                  <div className="text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-background/50 border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:scale-105 duration-200 ease-out"
                />
                <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 whitespace-nowrap hover:scale-105 hover:-translate-y-0.5">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy. Unsubscribe at any time.
              </p>
            </div>

            {/* Alternative CTA */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground mb-4">
                Prefer to talk first?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-full font-bold hover:bg-card/80 transition-all hover:scale-105"
                >
                  <Clock className="w-4 h-4" />
                  Schedule a Demo
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary/50 text-primary rounded-full font-bold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4" />
                  Explore Features
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by leading institutions
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["Stanford", "Harvard", "Oxford", "MIT", "+1200 more"].map((institution, i) => (
                  <div
                    key={i}
                    className="text-lg font-bold text-muted-foreground hover:scale-110 hover:text-primary transition-all duration-300"
                  >
                    {institution}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}