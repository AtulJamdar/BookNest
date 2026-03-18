import React, { useState, useEffect } from "react";
import { BookMarked, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Features", href: "#features", type: "link" },
    { name: "About", href: "#about", type: "link" },
    { name: "Stats", href: "#stats", type: "link" },
    { name: "Contact", href: "#contact", type: "link" },
    { name: "Login", href: "/login", type: "secondary-btn" },
    { name: "Sign Up", href: "/register", type: "primary-btn" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6
      ${isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border py-4" 
        : "bg-transparent py-7"}`}
    >
      {/* FIXED ALIGNMENT: 
          'w-full' ensures the flexbox takes up the whole 7xl width.
          'justify-between' will now properly push items to the opposite corners.
      */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* 1. LOGO (Now pinned to the far left) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-primary rounded-xl p-2 shadow-lg shadow-primary/20">
            <BookMarked className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-white">
            Library<span className="text-primary">SaaS</span>
          </span>
        </div>

        {/* 2. RIGHT SIDE GROUP (Pinned to the far right) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {menuItems.map((item) => {
            if (item.type === "link") {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap"
                >
                  {item.name}
                </a>
              );
            }
            if (item.type === "secondary-btn") {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold text-muted-foreground hover:text-white transition-all whitespace-nowrap"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2.5 rounded-xl font-bold bg-white text-black hover:bg-primary hover:text-white transition-all text-xs border border-white whitespace-nowrap shadow-sm"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-10 flex flex-col gap-8 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-2xl font-bold ${item.type === 'primary-btn' ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}