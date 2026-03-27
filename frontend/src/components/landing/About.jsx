import React from "react";
import Section from "../ui/Section";
import { Cloud, Lock, Zap, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Based",
      desc: "Access your system anywhere, anytime.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Secure",
      desc: "Your data is protected with strong security.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast",
      desc: "Optimized for smooth and quick performance.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Reliable",
      desc: "Built to handle real-world usage.",
    },
  ];

  return (
    <Section id="about" className="bg-background py-24">
      {/* Force true center alignment */}
      <div className="flex justify-center">
        <div className="max-w-5xl w-full text-center px-4">
          {/* Heading */}
          <div className="space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Simple. Fast. Reliable.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              A modern library management system designed to simplify daily
              operations, reduce manual work, and improve efficiency.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 place-items-center">
            {features.map((item, i) => (
              <div
                key={i}
                className="w-full max-w-sm flex flex-col items-center text-center gap-4 p-6 border border-border rounded-xl"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-base">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}