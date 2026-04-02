import React from "react";
import { Book, Users, BarChart2, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../ui/Section";

const features = [
  { icon: <Book className="w-7 h-7" />, title: "Inventory Control", desc: "Track and manage books with real-time availability." },
  { icon: <Users className="w-7 h-7" />, title: "User Management", desc: "Handle students and staff with ease." },
  { icon: <BarChart2 className="w-7 h-7" />, title: "Analytics", desc: "Get insights on usage and trends." },
  { icon: <Shield className="w-7 h-7" />, title: "Security", desc: "Keep your data safe and protected." },
  { icon: <Zap className="w-7 h-7" />, title: "Performance", desc: "Fast and smooth experience always." },
  { icon: <Globe className="w-7 h-7" />, title: "Cloud Access", desc: "Access from anywhere anytime." },
];

export default function Features() {
  return (
    <Section id="features" className="bg-background py-24 relative overflow-hidden">
      {/* Decorative background blurs to match CTA style */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Heading Section */}
        <div className="text-center space-y-4 mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif tracking-tight">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to manage your library efficiently without complexity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="group w-full flex flex-col items-center text-center gap-5 p-10 bg-card/50 border border-border/50 rounded-3xl transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="p-4 bg-primary rounded-2xl text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground font-serif">
                {f.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button - Styled like CTASection */}
        <div className="mt-20">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Section>
  );
}