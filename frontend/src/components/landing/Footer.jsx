import React from "react";
import { BookMarked, Twitter, Linkedin, Github, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#security" },
        { name: "API Docs", href: "#api" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Webinars", href: "#webinars" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Library Guides", href: "#guides" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "GDPR", href: "#gdpr" },
        { name: "Security", href: "#security" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@librarysaas.com", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-xl p-2 shadow-lg shadow-primary/20">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tighter text-foreground">
                Library<span className="text-primary">SaaS</span>
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Empowering libraries worldwide with next-generation management software. Transform how you serve your community with our AI-powered platform.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Innovation Drive, Tech Valley, CA 94043</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@librarysaas.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ease-out group hover:scale-110 hover:-translate-y-1"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-bold text-foreground text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-out flex items-center gap-1 group hover:translate-x-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background/50 border border-border rounded-2xl p-8 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Get the latest library technology insights and product updates.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 ease-out hover:scale-[1.01]"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Library SaaS. All rights reserved worldwide.</p>
              <div className="flex items-center gap-4">
                <span>Made with ❤️ for libraries</span>
                <span>•</span>
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-105">
                Privacy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-105">
                Terms
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-105">
                Cookies
              </a>
              <a href="#accessibility" className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-105">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium text-muted-foreground">ISO 27001 Certified</div>
            <div className="text-sm font-medium text-muted-foreground">GDPR Compliant</div>
            <div className="text-sm font-medium text-muted-foreground">SOC 2 Type II</div>
            <div className="text-sm font-medium text-muted-foreground">HIPAA Ready</div>
            <div className="text-sm font-medium text-muted-foreground">99.9% Uptime SLA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}