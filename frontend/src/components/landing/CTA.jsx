import React, { useState } from "react";
import Section from "../ui/Section";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const benefits = [
    "14-day free trial",
    "Setup in minutes",
    "Secure and reliable",
  ];

  return (
    <Section className="bg-background min-h-screen flex items-center justify-center">
      
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center gap-16">
          
          {/* Heading */}
          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Start Managing Your Library Today
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Simple setup. No complexity. Get started in minutes.
            </p>
          </div>
  
          {/* Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
  
          {/* Input */}
          <div className="w-full max-w-md flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary text-center"
            />
  
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
  
            <p className="text-xs text-muted-foreground text-center">
              No credit card required
            </p>
          </div>
  
        </div>
      </div>
  
    </Section>
  );
}