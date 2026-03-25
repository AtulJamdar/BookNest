import React, { useState } from "react";
import { Layers, Users, BarChart2, Book, Shield, Zap, Globe, Cpu } from "lucide-react";
import Section from "../ui/Section";

const features = [
  {
    icon: <Book className="w-12 h-12" />,
    title: "Smart Inventory Control",
    desc: "AI-powered cataloging with real-time availability tracking, automated ISBN recognition, and predictive restocking alerts.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    stats: "99.9% accuracy"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Advanced Member Portals",
    desc: "Dedicated dashboards for students, faculty, and staff with personalized recommendations, reading history, and seamless borrowing.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    stats: "850K+ users"
  },
  {
    icon: <BarChart2 className="w-12 h-12" />,
    title: "AI-Powered Analytics",
    desc: "Predictive insights on book popularity, usage patterns, and collection optimization with real-time reporting and custom dashboards.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    stats: "4.2M+ data points"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Enterprise Security",
    desc: "Bank-grade encryption, role-based access control, audit trails, and compliance with GDPR, FERPA, and other privacy standards.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    stats: "SOC 2 compliant"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Lightning Fast Performance",
    desc: "Sub-second search results, instant checkouts, and 99.9% uptime with global CDN and edge computing for optimal performance.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    stats: "< 100ms response"
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Cloud-Native Architecture",
    desc: "Scalable infrastructure that grows with your institution, automatic backups, and seamless integration with existing systems.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    stats: "Global scale"
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section id="features" className="bg-background">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
          <Cpu className="w-4 h-4" />
          <span>Powered by Advanced AI</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Powerful Capabilities
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Built on a robust, secure architecture that handles everything from community libraries to massive university archives with enterprise-grade reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative bg-card border border-border rounded-[2rem] p-8 hover:bg-card/80 transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:-translate-y-2 hover:scale-[1.01] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 ${f.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Content */}
            <div className="relative z-10">
              <div
                className={`mb-6 p-4 ${f.bgColor} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={f.color}>
                  {f.icon}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {f.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                {f.desc}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-background/50 border border-border/50 rounded-full text-sm font-medium text-foreground group-hover:scale-105 transition-transform duration-300">
                {f.stats}
              </div>
            </div>

            {/* Hover Effect */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: hoveredIndex === i ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          Ready to transform your library?
        </p>
        <a
          href="/register"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
        >
          Get Started Today
          <Book className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}