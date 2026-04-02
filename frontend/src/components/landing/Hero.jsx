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
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Home.jpg')" }}
      />
      
      {/* Refined Overlay using foreground colors */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10 text-primary-foreground">
        
        {/* Animated Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          Smart Library System
        </div>

        {/* Heading with Serif Styling */}
        <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight font-serif">
          Manage Your Library
          <br />
          <span className="text-accent">Without the Chaos</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Track books, manage users, and automate operations with a clean,
          simple system built for real-world usage.
        </p>

        {/* CTA Section */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/register"
            className="group px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#features"
            className="px-8 py-4 border border-primary-foreground/30 rounded-xl font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Explore Features
          </a>
        </div>

        {/* Trust Line */}
        <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-6 pt-8 text-xs md:text-sm text-primary-foreground/60 font-medium italic">
          <span>✓ Free 14-day trial</span>
          <span className="opacity-30">|</span>
          <span>✓ No credit card</span>
          <span className="opacity-30">|</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}