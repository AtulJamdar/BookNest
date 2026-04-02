import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { BookOpen, Menu, X, Sun, Moon, LogOut, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const isLanding = !user && location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-serif text-xl font-bold text-foreground">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
            <BookOpen className="w-5 h-5 text-accent-foreground" />
          </div>
          LibraFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {isLanding ? (
            navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))
          ) : user && (
            <span className="text-sm font-medium text-muted-foreground">Welcome back, {user.name}</span>
          )}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-secondary transition-colors text-muted-foreground">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {!user ? (
            <>
              <Link to="/login" className="text-sm font-semibold px-5 py-2.5">Sign In</Link>
              <Link to="/register" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-all">
                Get Started
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-600 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-all">
              <LogOut size={18} /> Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border p-6 space-y-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="block text-lg font-serif font-medium text-foreground" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-muted-foreground">
               {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>} Toggle Theme
            </button>
            {!user ? (
              <Link to="/register" className="w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold">Get Started</Link>
            ) : (
              <button onClick={handleLogout} className="w-full py-4 bg-red-500 text-white rounded-xl font-bold">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}