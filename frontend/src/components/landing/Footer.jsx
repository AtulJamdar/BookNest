import React from "react";
import { BookMarked, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Docs", "Help", "Guides"],
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* TOP */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-5 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <BookMarked className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">
                Library<span className="text-primary">SaaS</span>
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern library management system designed for simplicity, speed, and reliability.
            </p>

            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 border border-border rounded-md hover:bg-muted transition"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section, i) => (
            <div key={i} className="space-y-4 text-center md:text-left">
              <h4 className="font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition"
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
        <div className="w-full pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Library SaaS</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}