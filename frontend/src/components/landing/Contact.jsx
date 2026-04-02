import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    institution: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-8 max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Get in Touch
          </h2>

          <p className="text-muted-foreground text-lg">
            Have questions or want a demo? Fill the form and we’ll get back to you.
          </p>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>hello@librarysaas.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full max-w-lg mx-auto border border-border rounded-2xl p-10 space-y-6">
          
          <input
            type="text"
            name="institution"
            placeholder="Institution name"
            value={formData.institution}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Work email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary resize-none"
          />

          <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Send Message
          </button>

          <p className="text-xs text-muted-foreground text-center">
            We’ll respond within 24 hours.
          </p>
        </div>
      </div>
    </Section>
  );
}