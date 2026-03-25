import React, { useState, useEffect } from "react";
import { BookMarked, Menu, X, ChevronDown, User, LogIn, UserPlus } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Product",
      href: "#features",
      type: "link",
      submenu: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#security" },
        { name: "API", href: "#api" }
      ]
    },
    { name: "About", href: "#about", type: "link" },
    { name: "Testimonials", href: "#testimonials", type: "link" },
    { name: "Contact", href: "#contact", type: "link" },
    { name: "Login", href: "/login", type: "secondary-btn" },
    { name: "Sign Up", href: "/register", type: "primary-btn" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6
      ${isScrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border py-3 shadow-lg"
        : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-primary rounded-xl p-2 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <BookMarked className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter text-foreground">
            Library<span className="text-primary">SaaS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => {
            if (item.type === "link") {
              return (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 ease-out py-2 hover:scale-105"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out py-2 hover:scale-[1.01] hover:-translate-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.href);
                          }}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 ease-out hover:translate-x-1"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.type === "secondary-btn") {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-105"
                >
                  {item.name}
                </a>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-300 ease-out shadow-lg hover:shadow-primary/25 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 ease-out hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 space-y-4">
            {navigationItems.map((item) => {
              if (item.type === "link") {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
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
                    className="block py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <LogIn className="w-5 h-5" />
                    {item.name}
                  </a>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}