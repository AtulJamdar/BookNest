import React from "react";
import { BookOpen, ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-slate-900/50 px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Next-Generation Library Management</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-foreground tracking-tight leading-none">
            Transform Your{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Library
            </span>{" "}
            Experience
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Streamline operations, boost engagement, and unlock insights with our AI-powered platform. Join 1,200+ institutions already modernizing their libraries.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">850K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">98.5% Efficiency</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="/register"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-primary/90 transition-all duration-300 ease-out flex items-center gap-3 justify-center hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-card/50 backdrop-blur-sm border border-border text-foreground rounded-full font-bold text-lg shadow-md hover:bg-card hover:shadow-lg transition-all duration-300 ease-out text-center hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Watch Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-8 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:flex justify-center relative">
          <div className="relative w-[600px] h-[600px]">
            {/* Main Dashboard Mockup */}
            <div className="w-full h-full bg-gradient-to-br from-card to-card/80 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-border/50 flex items-center justify-center relative overflow-hidden hover:shadow-2xl transition-shadow duration-500 ease-out hover:scale-[1.01]">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.02)_25%,rgba(37,99,235,0.02)_50%,transparent_50%)] bg-[length:20px_20px]" />

              {/* Central Icon */}
              <div className="relative z-10">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Library Management</h3>
                  <p className="text-muted-foreground">AI-Powered Platform</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-12 left-12 p-4 bg-background/90 backdrop-blur-sm border border-border rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Analytics</div>
                    <div className="text-xs text-muted-foreground">Real-time insights</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 right-12 p-4 bg-background/90 backdrop-blur-sm border border-border rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">12,847 Books</div>
                    <div className="text-xs text-muted-foreground">Managed collection</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 right-8 p-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl shadow-lg">
                <div className="text-xs font-bold text-primary">98.5%</div>
                <div className="text-xs text-primary/80">Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}