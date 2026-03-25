import React from "react";
import Section from "../ui/Section";
import { BookMarked, UserCircle, RefreshCcw, HandCoins, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: <BookMarked className="w-10 h-10" />,
    label: "Libraries Onboard",
    value: 1200,
    suffix: "+",
    description: "Institutions worldwide",
    color: "text-blue-500"
  },
  {
    icon: <UserCircle className="w-10 h-10" />,
    label: "Active Readers",
    value: 850000,
    suffix: "+",
    description: "Students & faculty",
    color: "text-green-500"
  },
  {
    icon: <RefreshCcw className="w-10 h-10" />,
    label: "Resources Managed",
    value: 4200000,
    suffix: "+",
    description: "Books & materials",
    color: "text-purple-500"
  },
  {
    icon: <HandCoins className="w-10 h-10" />,
    label: "Fine Efficiency",
    value: 98.5,
    suffix: "%",
    description: "Automated collection",
    color: "text-yellow-500"
  },
];

export default function Stats() {
  const formatValue = (value, suffix) => {
    if (typeof value === 'number' && value >= 1000) {
      return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K${suffix}`;
    }
    return `${value}${suffix}`;
  };

  return (
    <Section className="bg-gradient-to-br from-slate-950 via-background to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            <Award className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of libraries already modernizing their operations with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group text-center flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:bg-card/80 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-2 hover:scale-[1.01] relative overflow-hidden cursor-pointer"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`mb-6 p-4 bg-card border border-border rounded-2xl group-hover:scale-110 transition-transform duration-300 ease-out ${s.color}`}
                >
                  {s.icon}
                </div>

                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tighter mb-2 group-hover:text-primary transition-colors">
                    {formatValue(s.value, s.suffix)}
                  </div>
                  <div className="text-lg font-medium text-muted-foreground uppercase tracking-widest mb-2">
                    {s.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {s.description}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-border/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-[2s] ease-out"
                    style={{ animation: `slideIn 2s ease-out ${0.5 + i * 0.1}s forwards` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <TrendingUp className="w-6 h-6 text-success" />, bg: "bg-success/20", title: "Growing", subtitle: "25% MoM" },
            { icon: <Award className="w-6 h-6 text-primary" />, bg: "bg-primary/20", title: "Award Winning", subtitle: "2024 EdTech" },
            { icon: <RefreshCcw className="w-6 h-6 text-yellow-500" />, bg: "bg-yellow-500/20", title: "99.9% Uptime", subtitle: "SLA Guaranteed" },
            { icon: <UserCircle className="w-6 h-6 text-cyan-500" />, bg: "bg-cyan-500/20", title: "24/7 Support", subtitle: "Global Team" }
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center transition-transform hover:rotate-360 duration-600`}>
                {item.icon}
              </div>
              <div className="text-sm font-medium text-foreground">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
}