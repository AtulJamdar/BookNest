import React from "react";
import { Twitter, Linkedin, Github, BookMarked } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 text-muted-foreground">
          <div className="space-y-6">
             <div className="flex items-center gap-3 font-extrabold text-2xl text-foreground">
               <BookMarked className="w-8 h-8 text-primary" />
               <span>Library<span className="text-primary">SaaS</span></span>
             </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A modern library management system built on cloud architecture for educational institutions of the digital age.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-xl">Resources</h4>
            <ul className="space-y-3 text-lg">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About platform</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing plans</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact sales</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-xl">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all"><Github className="w-6 h-6" /></a>
            </div>
            <p className="text-base text-muted-foreground pt-12">Built by <span className="text-primary">Library Solutions Inc</span>.</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-border/50 text-center text-base text-muted-foreground">
          © {new Date().getFullYear()} Library SaaS. All rights reserved worldwide.
        </div>
      </div>
    </footer>
  );
}