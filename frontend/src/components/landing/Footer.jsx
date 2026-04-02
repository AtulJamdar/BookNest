import React from "react";
import { BookOpen, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Resources: ["Documentation", "API Reference", "Blog", "Community"],
  Company: ["About", "Careers", "Contact", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 font-serif text-2xl font-bold">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent-foreground" />
              </div>
              LibraFlow
            </Link>
            <p className="text-primary-foreground/50 leading-relaxed">
              Leading the future of library management with intelligent automation and cloud technology.
            </p>
            <div className="flex gap-4">
               {[Twitter, Linkedin, Github].map((Icon, i) => (
                 <a key={i} href="#" className="p-3 bg-primary-foreground/5 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-accent">{cat}</h4>
              <ul className="space-y-4">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors font-medium">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-10 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/30">
          © {new Date().getFullYear()} LibraFlow. Handcrafted for modern libraries.
        </div>
      </div>
    </footer>
  );
}