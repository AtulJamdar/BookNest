import React from "react";
import Section from "../ui/Section";
import { BookMarked, UserCircle, RefreshCcw, HandCoins } from "lucide-react";

const stats = [
  { icon: <BookMarked className="w-10 h-10" />, label: "Libraries Onboard", value: "1,200+" },
  { icon: <UserCircle className="w-10 h-10" />, label: "Active Readers", value: "850k+" },
  { icon: <RefreshCcw className="w-10 h-10" />, label: "Resources Managed", value: "4.2M" },
  { icon: <HandCoins className="w-10 h-10" />, label: "Fine Efficiency", value: "98.5%" },
];

export default function Stats() {
  return (
    <Section className="bg-slate-950 text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-center">
        {stats.map((s, i) => (
          <div key={i} className="text-center flex flex-col items-center group">
            <div className="mb-6 text-primary p-6 bg-slate-900 border border-border rounded-full group-hover:scale-110 group-hover:bg-slate-800 transition-all">
              {s.icon}
            </div>
            <div className="text-8xl md:text-9xl font-extrabold text-foreground tracking-tighter mb-4">
              {s.value}
            </div>
            <div className="text-xl text-muted-foreground font-medium uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}