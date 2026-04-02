import React from "react";
import Section from "../ui/Section";
import { BookMarked, UserCircle, RefreshCcw, HandCoins } from "lucide-react";

const stats = [
  { icon: <BookMarked className="w-7 h-7" />, label: "Libraries", value: "1200+" },
  { icon: <UserCircle className="w-7 h-7" />, label: "Users", value: "850K+" },
  { icon: <RefreshCcw className="w-7 h-7" />, label: "Resources", value: "4.2M+" },
  { icon: <HandCoins className="w-7 h-7" />, label: "Efficiency", value: "98%" },
];

export default function Stats() {
  return (
    <Section className="bg-background py-32">
      {/* CENTERED FULL WIDTH */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center space-y-6 mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Trusted by Libraries Worldwide
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Thousands of institutions rely on our system to manage operations efficiently.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-full">
          {stats.map((s, i) => (
            <div
              key={i}
              className="w-full max-w-xs flex flex-col items-center text-center gap-4 p-10 border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/10 rounded-xl text-primary">
                {s.icon}
              </div>

              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {s.value}
              </div>

              <div className="text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}