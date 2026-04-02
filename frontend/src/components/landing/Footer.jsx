// import React from "react";
// import { BookMarked, Twitter, Linkedin, Github } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const sections = [
//     {
//       title: "Product",
//       links: ["Features", "Pricing", "Security"],
//     },
//     {
//       title: "Company",
//       links: ["About", "Careers", "Contact"],
//     },
//     {
//       title: "Resources",
//       links: ["Docs", "Help", "Guides"],
//     },
//   ];

//   return (
//     <footer className="bg-background border-t border-border py-24">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
//         {/* TOP */}
//         <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
//           {/* Brand */}
//           <div className="space-y-5 max-w-sm">
//             <div className="flex items-center gap-3">
//               <div className="bg-primary p-2 rounded-lg">
//                 <BookMarked className="w-5 h-5 text-white" />
//               </div>
//               <span className="font-bold text-lg text-foreground">
//                 Library<span className="text-primary">SaaS</span>
//               </span>
//             </div>

//             <p className="text-sm text-muted-foreground leading-relaxed">
//               Modern library management system designed for simplicity, speed, and reliability.
//             </p>

//             <div className="flex gap-3">
//               {[Twitter, Linkedin, Github].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="p-2 border border-border rounded-md hover:bg-muted transition"
//                 >
//                   <Icon className="w-4 h-4" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {sections.map((section, i) => (
//             <div key={i} className="space-y-4 text-center md:text-left">
//               <h4 className="font-semibold text-foreground">
//                 {section.title}
//               </h4>
//               <ul className="space-y-2">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="text-sm text-muted-foreground hover:text-foreground transition"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM */}
//         <div className="w-full pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
//           <p>© {currentYear} Library SaaS</p>

//           <div className="flex gap-6">
//             <a href="#" className="hover:text-foreground transition">Privacy</a>
//             <a href="#" className="hover:text-foreground transition">Terms</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { BookMarked, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    { title: "Product", links: ["Features", "Pricing", "Security"] },
    { title: "Company", links: ["About", "Careers", "Contact"] },
    { title: "Resources", links: ["Docs", "Help", "Guides"] },
  ];

  return (
    <footer
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c1a2e 0%, #0f172a 60%, #080f1e 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Subtle gradient accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(245,158,11,0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* TOP */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-5 max-w-sm">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
              >
                <BookMarked className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Library<span style={{ color: "#f59e0b" }}>SaaS</span>
              </span>
            </div>

            <p className="text-sm text-white/40 leading-relaxed">
              Modern library management system designed for simplicity, speed, and reliability.
            </p>

            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f59e0b";
                    e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section, i) => (
            <div key={i} className="space-y-4 text-center md:text-left">
              <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-white/40 transition-colors duration-200 hover:text-amber-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          className="w-full pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p>© {currentYear} Library SaaS · All rights reserved</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}