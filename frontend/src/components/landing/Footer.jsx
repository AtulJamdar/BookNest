import React from "react";
import { BookMarked, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const y = new Date().getFullYear();

  const groups = [
    {
      title: "Product",
      links: ["Features", "Security", "Pricing", "API"],
    },
    { title: "Company", links: ["About us", "Careers", "Partners"] },
    { title: "Support", links: ["Help centre", "Docs", "Status"] },
  ];

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-11 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <BookMarked className="w-5 h-5 text-amber-300" strokeWidth={2} />
              </span>
              <span className="text-[1.0625rem] font-bold tracking-tight">
                BookNest
              </span>
            </div>
            <p className="text-white/75 text-[0.875rem] leading-relaxed max-w-sm mb-6">
              Library automation for schools, universities, and public systems
              across India—trusted where reading communities grow.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-amber-200/90 mb-4">
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.875rem] text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[0.8125rem] text-white/65">
          <p>© {y} BookNest Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
