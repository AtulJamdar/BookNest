import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import Section from "../ui/Section";

export default function Contact() {
  const [formData, setFormData] = useState({ institution: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Connect</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Let's talk about your library.</h2>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Ready to modernize? Our team is here to help you transition to a smarter system.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl w-fit">
              <Mail className="text-accent" />
              <span className="font-bold">hello@libraflow.com</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl w-fit">
              <Phone className="text-accent" />
              <span className="font-bold">+1 (555) 000-1234</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-[2.5rem] p-10 md:p-14 shadow-2xl space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-bold ml-1">Institution</label>
            <input name="institution" placeholder="University of Oxford" value={formData.institution} onChange={handleChange}
              className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" />
          </div>
          <div className="space-y-4">
            <label className="text-sm font-bold ml-1">Work Email</label>
            <input name="email" type="email" placeholder="admin@university.edu" value={formData.email} onChange={handleChange}
              className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" />
          </div>
          <div className="space-y-4">
            <label className="text-sm font-bold ml-1">Message</label>
            <textarea name="message" rows={4} placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange}
              className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all resize-none" />
          </div>
          <button className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/20">
            Send Message <Send size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
}