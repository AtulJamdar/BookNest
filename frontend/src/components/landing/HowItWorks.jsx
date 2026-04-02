import React from "react";
import { UserPlus, BookPlus, ArrowLeftRight, BarChart } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Register Members", desc: "Add members and issue digital cards." },
  { icon: BookPlus, step: "02", title: "Add Books", desc: "Catalog books with ISBN scanning." },
  { icon: ArrowLeftRight, step: "03", title: "Issue & Return", desc: "Seamlessly track checkouts and returns." },
  { icon: BarChart, step: "04", title: "Track & Analyze", desc: "Monitor usage patterns and reports." },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Process</span>
          <h2 className="mt-4 text-4xl font-bold font-serif">Get Started in Minutes</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((item, i) => (
            <div key={i} className="text-center relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-card border border-border flex items-center justify-center mb-6 relative shadow-xl">
                <item.icon className="w-8 h-8 text-accent" />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}