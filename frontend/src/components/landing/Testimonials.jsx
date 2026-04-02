// import React, { useState } from "react";
// import Section from "../ui/Section";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Sarah Jenkins",
//     role: "Head Librarian",
//     text: "This system saved us hours every week. Everything is faster and easier now.",
//   },
//   {
//     name: "David Chen",
//     role: "IT Director",
//     text: "Setup was simple and performance is excellent. Our team loves it.",
//   },
//   {
//     name: "Elena Rodriguez",
//     role: "Library Director",
//     text: "Very intuitive system. No training needed for our staff.",
//   },
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   const current = testimonials[currentIndex];

//   return (
//     <Section id="testimonials" className="bg-background py-32">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
//         {/* Heading */}
//         <div className="text-center space-y-6 mb-20 max-w-3xl">
//           <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
//             What Users Say
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Real feedback from people using the system daily.
//           </p>
//         </div>

//         {/* MAIN CARD */}
//         <div className="w-full max-w-3xl text-center border border-border rounded-2xl p-10 space-y-6 transition-all duration-300 hover:shadow-lg">
//           {/* Stars */}
//           <div className="flex justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-5 h-5 text-primary" />
//             ))}
//           </div>

//           {/* Text */}
//           <p className="text-lg md:text-xl text-foreground leading-relaxed">
//             "{current.text}"
//           </p>

//           {/* Author */}
//           <div className="space-y-1">
//             <div className="font-semibold text-foreground">{current.name}</div>
//             <div className="text-sm text-muted-foreground">{current.role}</div>
//           </div>
//         </div>

//         {/* NAVIGATION */}
//         <div className="flex items-center justify-center gap-6 mt-10">
//           <button
//             onClick={prev}
//             className="p-3 border border-border rounded-full hover:bg-muted transition"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <button
//             onClick={next}
//             className="p-3 border border-border rounded-full hover:bg-muted transition"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React, { useState } from "react";
import Section from "../ui/Section";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Head Librarian",
    initials: "SJ",
    text: "This system saved us hours every week. Everything is faster and easier now. Our staff adapted immediately with zero friction.",
  },
  {
    name: "David Chen",
    role: "IT Director",
    initials: "DC",
    text: "Setup was simple and performance is excellent. Our team loves it — and I love how easy it is to maintain.",
  },
  {
    name: "Elena Rodriguez",
    role: "Library Director",
    initials: "ER",
    text: "Very intuitive system. No training needed for our staff. It just works, and works beautifully.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <Section
      id="testimonials"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #0c1a2e 100%)",
      }}
    >
      {/* Blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          Testimonials
        </div>

        {/* Heading */}
        <div className="text-center space-y-5 mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            What{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Users Say
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            Real feedback from people using the system daily.
          </p>
        </div>

        {/* Card */}
        <div
          className="relative w-full max-w-3xl rounded-2xl p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Quote icon */}
          <div
            className="absolute top-8 left-8 opacity-20"
            style={{ color: "#f59e0b" }}
          >
            <Quote className="w-10 h-10" />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            "{current.text}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
              }}
            >
              {current.initials}
            </div>
            <div className="text-left">
              <div className="font-semibold text-white text-sm">{current.name}</div>
              <div className="text-xs text-white/40">{current.role}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="p-3 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? "24px" : "8px",
                  height: "8px",
                  background: i === currentIndex ? "#f59e0b" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}