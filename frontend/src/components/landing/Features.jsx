import React from "react";
import { BookOpen, Users, BarChart3, Search, Bell, Shield } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Book Catalog", desc: "Organize your collection with smart categorization and ISBN lookup." },
  { icon: Users, title: "Member Management", desc: "Register members, track borrowing history, and manage memberships." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Gain insights into circulation trends and library performance metrics." },
  { icon: Search, title: "Smart Search", desc: "Find any book instantly with powerful filters by genre or availability." },
  { icon: Bell, title: "Automated Alerts", desc: "Send overdue reminders and reservation notifications automatically." },
  { icon: Shield, title: "Secure Access", desc: "Role-based permissions with complete audit trails for all actions." },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Capabilities</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground font-serif">Everything You Need</h2>
          <p className="mt-4 text-muted-foreground text-lg">LibraFlow handles the complexity so you can focus on your readers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <f.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-serif mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}