import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import Contact from "../components/landing/Contact";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}