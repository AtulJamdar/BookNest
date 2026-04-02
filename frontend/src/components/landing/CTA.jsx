// import React, { useState } from "react";
// import Section from "../ui/Section";
// import { CheckCircle, ArrowRight } from "lucide-react";

// export default function CTA() {
//   const [email, setEmail] = useState("");

//   const benefits = [
//     "14-day free trial",
//     "Setup in minutes",
//     "Secure and reliable",
//   ];

//   return (
//     <Section className="bg-background min-h-screen flex items-center justify-center">
      
//       <div className="w-full flex justify-center">
//         <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center gap-16">
          
//           {/* Heading */}
//           <div className="w-full flex flex-col items-center gap-6">
//             <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
//               Start Managing Your Library Today
//             </h2>
//             <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
//               Simple setup. No complexity. Get started in minutes.
//             </p>
//           </div>
  
//           {/* Benefits */}
//           <div className="flex flex-wrap justify-center items-center gap-8 w-full">
//             {benefits.map((item, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5 text-primary" />
//                 <span className="text-sm md:text-base text-muted-foreground">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
  
//           {/* Input */}
//           <div className="w-full max-w-md flex flex-col items-center gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary text-center"
//             />
  
//             <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
//               Get Started
//               <ArrowRight className="w-4 h-4" />
//             </button>
  
//             <p className="text-xs text-muted-foreground text-center">
//               No credit card required
//             </p>
//           </div>
  
//         </div>
//       </div>
  
//     </Section>
//   );
// }

import React, { useState } from "react";
import Section from "../ui/Section";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const benefits = [
    "14-day free trial",
    "Setup in minutes",
    "Secure and reliable",
  ];

  return (
    <Section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #1e1b4b 80%, #0f172a 100%)",
      }}
    >
      {/* Decorative glow rings */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
          }}
        />
      </div>
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center gap-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Ready to get started?
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Start Managing Your{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Library
              </span>{" "}
              Today
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-xl">
              Simple setup. No complexity. Get started in minutes.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm md:text-base text-white/70">{item}</span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="w-full max-w-md flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl text-sm outline-none text-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid rgba(245,158,11,0.5)";
                e.target.style.background = "rgba(245,158,11,0.07)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid rgba(255,255,255,0.12)";
                e.target.style.background = "rgba(255,255,255,0.06)";
              }}
            />

            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#0f172a",
              }}
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-white/30">
              No credit card required · Cancel anytime
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}