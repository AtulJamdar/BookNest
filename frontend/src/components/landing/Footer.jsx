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
import { BookOpen, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Resources: ["Documentation", "API Reference", "Blog", "Community"],
  Company: ["About", "Careers", "Contact", "Privacy Policy"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-20 px-6 border-t border-primary-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-10">
          
          {/* Brand & Description */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 font-serif text-xl font-bold">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
              </div>
              LibraFlow
            </Link>
            
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              Modern library management for institutions of all sizes. Designed for simplicity, speed, and reliability.
            </p>

            {/* Social Links - Styled to match the new dark theme */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-primary-foreground/10 rounded-lg hover:bg-primary-foreground/5 hover:border-primary-foreground/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-primary-foreground/80">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/50 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/30">
            © {currentYear} LibraFlow. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}