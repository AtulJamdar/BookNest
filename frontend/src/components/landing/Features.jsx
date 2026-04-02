// import React from "react";
// import { Book, Users, BarChart2, Shield, Zap, Globe } from "lucide-react";
// import Section from "../ui/Section";

// const features = [
//   { icon: <Book className="w-7 h-7" />, title: "Inventory Control", desc: "Track and manage books with real-time availability." },
//   { icon: <Users className="w-7 h-7" />, title: "User Management", desc: "Handle students and staff with ease." },
//   { icon: <BarChart2 className="w-7 h-7" />, title: "Analytics", desc: "Get insights on usage and trends." },
//   { icon: <Shield className="w-7 h-7" />, title: "Security", desc: "Keep your data safe and protected." },
//   { icon: <Zap className="w-7 h-7" />, title: "Performance", desc: "Fast and smooth experience always." },
//   { icon: <Globe className="w-7 h-7" />, title: "Cloud Access", desc: "Access from anywhere anytime." },
// ];

// export default function Features() {
//   return (
//     <Section id="features" className="bg-background py-32">
//       {/* FULL WIDTH CENTER */}
//       <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
//         {/* Heading */}
//         <div className="text-center space-y-6 mb-24 max-w-3xl">
//           <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
//             Powerful Features
//           </h2>
//           <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
//             Everything you need to manage your library efficiently without complexity.
//           </p>
//         </div>

//         {/* GRID CENTERED */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center w-full">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="w-full max-w-md flex flex-col items-center text-center gap-5 p-10 border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//             >
//               <div className="p-4 bg-primary/10 rounded-xl text-primary">
//                 {f.icon}
//               </div>

//               <h3 className="text-xl font-semibold text-foreground">
//                 {f.title}
//               </h3>

//               <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-24">
//           <a
//             href="/register"
//             className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:opacity-90 transition"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React from "react";
import { Book, Users, BarChart2, Shield, Zap, Globe } from "lucide-react";
import Section from "../ui/Section";

const features = [
  { icon: <Book className="w-7 h-7" />, title: "Inventory Control", desc: "Track and manage books with real-time availability across your entire collection." },
  { icon: <Users className="w-7 h-7" />, title: "User Management", desc: "Handle students and staff profiles with roles, permissions, and activity logs." },
  { icon: <BarChart2 className="w-7 h-7" />, title: "Analytics", desc: "Get deep insights on usage patterns, trends, and popular resources." },
  { icon: <Shield className="w-7 h-7" />, title: "Security", desc: "Keep your data safe with encryption, backups, and role-based access control." },
  { icon: <Zap className="w-7 h-7" />, title: "Performance", desc: "Blazing-fast and smooth experience — even with thousands of records." },
  { icon: <Globe className="w-7 h-7" />, title: "Cloud Access", desc: "Access your library system from any device, anywhere in the world." },
];

export default function Features() {
  return (
    <Section
      id="features"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #0c1a2e 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          Features
        </div>

        {/* Heading */}
        <div className="text-center space-y-5 mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Powerful{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Features
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Everything you need to manage your library efficiently — without the complexity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="group w-full max-w-md flex flex-col items-center text-center gap-5 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(251,191,36,0.08))",
                  color: "#f59e0b",
                }}
              >
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {f.title}
              </h3>

              <p className="text-base text-white/50 leading-relaxed max-w-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#0f172a",
            }}
          >
            Get Started Free
          </a>
        </div>
      </div>
    </Section>
  );
}