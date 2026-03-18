import React from "react";
import Section from "../ui/Section";
import { Mail, MessageSquare, BookOpenCheck } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-14">
          <h2 className="text-7xl font-bold tracking-tight text-foreground">Let's talk.</h2>
          <div className="space-y-10">
            <div className="flex items-center gap-6 group p-8 bg-card border border-border rounded-3xl hover:bg-slate-800 transition-all">
              <div className="p-6 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-10 h-10" />
              </div>
              <div>
                <div className="text-base text-muted-foreground font-bold uppercase tracking-widest">General inquiries</div>
                <div className="text-2xl md:text-3xl font-medium text-foreground">hello@librarysaas.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group p-8 bg-card border border-border rounded-3xl hover:bg-slate-800 transition-all">
              <div className="p-6 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <MessageSquare className="w-10 h-10" />
              </div>
              <div>
                <div className="text-base text-muted-foreground font-bold uppercase tracking-widest">Support / Demo Request</div>
                <div className="text-2xl md:text-3xl font-medium text-foreground">24/7 Live Chat Support</div>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-slate-950 border border-border p-12 rounded-[3.5rem] shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <h3 className="text-3xl font-bold text-foreground mb-8">Quick contact</h3>
          <input type="text" placeholder="Institution / Full Name" className="w-full bg-slate-900 border-none rounded-2xl px-6 py-6 text-xl text-foreground focus:ring-2 focus:ring-primary outline-none" />
          <input type="email" placeholder="Work Email" className="w-full bg-slate-900 border-none rounded-2xl px-6 py-6 text-xl text-foreground focus:ring-2 focus:ring-primary outline-none" />
          <textarea placeholder="Tell us about your library..." rows={5} className="w-full bg-slate-900 border-none rounded-2xl px-6 py-6 text-xl text-foreground focus:ring-2 focus:ring-primary outline-none" />
          <button className="w-full bg-primary text-primary-foreground rounded-2xl py-6 text-2xl font-bold hover:opacity-95 transition-all shadow-xl">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}