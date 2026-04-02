import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Section from "../ui/Section";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <Section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10" />

        <div className="relative z-10 flex flex-col items-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground font-serif">
            Ready to Modernize?
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl">
            Join thousands of libraries using LibraFlow to streamline their daily operations.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {["14-day free trial", "Setup in minutes", "No credit card"].map((text) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground font-medium">
                <CheckCircle className="w-5 h-5 text-accent" /> {text}
              </div>
            ))}
          </div>

          <div className="w-full max-w-md flex flex-col gap-4">
            <input type="email" placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white text-center placeholder:text-white/40 focus:ring-2 focus:ring-accent outline-none backdrop-blur-md transition-all" />
            <button className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-black text-xl shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              Start Free Trial <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}