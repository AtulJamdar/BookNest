// import React from "react";
// import Section from "../ui/Section";
// import { BookMarked, UserCircle, RefreshCcw, HandCoins } from "lucide-react";

// const stats = [
//   { icon: <BookMarked className="w-7 h-7" />, label: "Libraries", value: "1200+" },
//   { icon: <UserCircle className="w-7 h-7" />, label: "Users", value: "850K+" },
//   { icon: <RefreshCcw className="w-7 h-7" />, label: "Resources", value: "4.2M+" },
//   { icon: <HandCoins className="w-7 h-7" />, label: "Efficiency", value: "98%" },
// ];

// export default function Stats() {
//   return (
//     <Section className="bg-background py-32">
//       {/* CENTERED FULL WIDTH */}
//       <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
//         {/* Heading */}
//         <div className="text-center space-y-6 mb-24 max-w-3xl">
//           <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
//             Trusted by Libraries Worldwide
//           </h2>
//           <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
//             Thousands of institutions rely on our system to manage operations efficiently.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center w-full">
//           {stats.map((s, i) => (
//             <div
//               key={i}
//               className="w-full max-w-xs flex flex-col items-center text-center gap-4 p-10 border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//             >
//               <div className="p-4 bg-primary/10 rounded-xl text-primary">
//                 {s.icon}
//               </div>

//               <div className="text-4xl md:text-5xl font-bold text-foreground">
//                 {s.value}
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 {s.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

import React from "react";
import Section from "../ui/Section";
import { BookMarked, UserCircle, RefreshCcw, HandCoins } from "lucide-react";

const stats = [
  { icon: <BookMarked className="w-7 h-7" />, label: "Libraries", value: "1,200+" },
  { icon: <UserCircle className="w-7 h-7" />, label: "Users", value: "850K+" },
  { icon: <RefreshCcw className="w-7 h-7" />, label: "Resources", value: "4.2M+" },
  { icon: <HandCoins className="w-7 h-7" />, label: "Efficiency", value: "98%" },
];

export default function Stats() {
  return (
    <Section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0c1a2e 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          Our Impact
        </div>

        {/* Heading */}
        <div className="text-center space-y-5 mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Trusted by Libraries{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Worldwide
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Thousands of institutions rely on our system to manage operations efficiently.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-full">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group w-full max-w-xs flex flex-col items-center text-center gap-4 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
                {s.icon}
              </div>

              <div
                className="text-4xl md:text-5xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>

              <div className="text-sm text-white/50 font-medium uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}