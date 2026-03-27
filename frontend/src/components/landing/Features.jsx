import React from "react";
import { Book, Users, BarChart2, Shield, Zap, Globe } from "lucide-react";
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
    <Section id="features" className="bg-background py-32">
      {/* FULL WIDTH CENTER */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center space-y-6 mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Everything you need to manage your library efficiently without complexity.
          </p>
        </div>

        {/* GRID CENTERED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="w-full max-w-md flex flex-col items-center text-center gap-5 p-10 border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/10 rounded-xl text-primary">
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {f.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </Section>
  );
}