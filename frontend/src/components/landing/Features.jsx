import React from "react";
import { Layers, Users, BarChart2, Book } from "lucide-react";
import Section from "../ui/Section";

const features = [
  { icon: <Book className="w-12 h-12" />, title: "Inventory Control", desc: "Automated cataloging with real-time availability tracking." },
  { icon: <Users className="w-12 h-12" />, title: "Member Portals", desc: "Dedicated spaces for students to track loans and history." },
  { icon: <BarChart2 className="w-12 h-12" />, title: "Smart Analytics", desc: "Predictive insights on book popularity and late returns." },
  { icon: <Layers className="w-12 h-12" />, title: "Admin Power", desc: "Granular permissions for librarians and staff members." },
];

export default function Features() {
  return (
    <Section id="features" className="bg-background">
      <div className="text-center mb-28">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Powerful Capabilities</h2>
        <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Built on a robust, secure architecture that handles everything from community libraries to massive university archives.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <div key={i} className="group bg-card border border-border rounded-[3rem] p-12 hover:bg-slate-800 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-4">
            <div className="mb-10 text-primary transition-colors">
              {f.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}