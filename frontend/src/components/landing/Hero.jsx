// import React from "react";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
//       {/* Background Image (Replace URL later) */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/Home.jpg')", // <-- replace with your image
//         }}
//       />

//       {/* Dark Overlay for readability */}
//       <div className="absolute inset-0 bg-black/60" />

//       <div className="max-w-3xl w-full text-center space-y-6 relative z-10 text-white">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium backdrop-blur">
//           <Sparkles className="w-4 h-4" />
//           Smart Library System
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
//           Manage Your Library
//           <br />
//           Without the Chaos
//         </h1>

//         {/* Subtext */}
//         <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
//           Track books, manage users, and automate operations with a clean,
//           simple system built for real-world usage.
//         </p>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
//           <a
//             href="/register"
//             className="group px-6 py-3 bg-primary text-white rounded-xl font-medium shadow hover:shadow-md transition flex items-center justify-center gap-2"
//           >
//             Get Started
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//           </a>

//           <a
//             href="#demo"
//             className="px-6 py-3 border border-white/30 rounded-xl font-medium text-white hover:bg-white/10 transition"
//           >
//             View Demo
//           </a>
//         </div>

//         {/* Trust Line */}
//         <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs text-white/70">
//           <span>✓ Free 14-day trial</span>
//           <span>✓ No credit card</span>
//           <span>✓ Cancel anytime</span>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 60%, #1e1b4b 80%, #0f172a 100%)",
      }}
    >
      {/* Mesh gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(129,140,248,0.1) 0%, transparent 40%)",
        }}
      />

      {/* Animated ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-5"
        style={{
          border: "1px solid rgba(245,158,11,0.5)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-5"
        style={{
          border: "1px solid rgba(99,102,241,0.5)",
        }}
      />

      {/* Background Image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/Home.jpg')" }}
      />
      {/* Extra dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="max-w-3xl w-full text-center space-y-7 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          <Sparkles className="w-3.5 h-3.5" />
          Smart Library System
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Manage Your Library
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #f59e0b, #fbbf24, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Without the Chaos
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          Track books, manage users, and automate operations with a clean,
          simple system built for real-world usage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/register"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#0f172a",
            }}
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#demo"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            View Demo
          </a>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Free 14-day trial
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            No credit card
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
