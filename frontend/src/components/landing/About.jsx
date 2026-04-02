// import React from "react";
// import Section from "../ui/Section";
// import { Cloud, Lock, Zap, Award } from "lucide-react";

// export default function About() {
//   const features = [
//     {
//       icon: <Cloud className="w-5 h-5" />,
//       title: "Cloud Based",
//       desc: "Access your system anywhere, anytime.",
//     },
//     {
//       icon: <Lock className="w-5 h-5" />,
//       title: "Secure",
//       desc: "Your data is protected with strong security.",
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       title: "Fast",
//       desc: "Optimized for smooth and quick performance.",
//     },
//     {
//       icon: <Award className="w-5 h-5" />,
//       title: "Reliable",
//       desc: "Built to handle real-world usage.",
//     },
//   ];

//   return (
//     <Section id="about" className="bg-background py-24">
//       {/* Force true center alignment */}
//       <div className="flex justify-center">
//         <div className="max-w-5xl w-full text-center px-4">
//           {/* Heading */}
//           <div className="space-y-6 mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
//               Simple. Fast. Reliable.
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//               A modern library management system designed to simplify daily
//               operations, reduce manual work, and improve efficiency.
//             </p>
//           </div>

//           {/* Features */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 place-items-center">
//             {features.map((item, i) => (
//               <div
//                 key={i}
//                 className="w-full max-w-sm flex flex-col items-center text-center gap-4 p-6 border border-border rounded-xl"
//               >
//                 <div className="p-3 bg-primary/10 rounded-lg text-primary">
//                   {item.icon}
//                 </div>
//                 <div className="space-y-2">
//                   <h4 className="font-medium text-foreground text-base">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="mt-16">
//             <a
//               href="#contact"
//               className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React from "react";
import Section from "../ui/Section";
import { Cloud, Lock, Zap, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Based",
      desc: "Access your system anywhere, anytime — from any device, any location.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure",
      desc: "Your data is protected with enterprise-grade encryption and security.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast",
      desc: "Optimized for lightning-quick performance even at scale.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Reliable",
      desc: "Built to handle real-world usage with 99.9% uptime guarantee.",
    },
  ];

  return (
    <Section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 70%, #0c1a2e 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="relative z-10 flex justify-center">
        <div className="max-w-5xl w-full text-center px-4">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Why Choose Us
          </div>

          {/* Heading */}
          <div className="space-y-5 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Simple.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Fast.
              </span>{" "}
              Reliable.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              A modern library management system designed to simplify daily
              operations, reduce manual work, and improve efficiency.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 place-items-center">
            {features.map((item, i) => (
              <div
                key={i}
                className="w-full max-w-sm flex flex-col items-center text-center gap-4 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.1))",
                    color: "#f59e0b",
                  }}
                >
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#0f172a",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}