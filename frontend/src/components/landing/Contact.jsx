import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    institution: "",
    email: "",
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Section
      id="contact"
      className="!py-16 md:!py-24 border-t border-stone-200 bg-[#fafaf9]"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#0f766e] mb-3">
            Contact
          </p>
          <h2 className="text-[1.875rem] sm:text-[2.25rem] font-bold text-[#1e3a5f] tracking-tight leading-tight mb-5">
            We reply within one business day
          </h2>
          <p className="text-stone-600 text-[1.0625rem] leading-relaxed mb-10">
            Share your institution type, locations, and rough volume—we will
            suggest a rollout plan and commercials that fit your budget cycle.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-[0.9375rem] text-stone-700">
              <Mail className="w-5 h-5 text-[#0f766e] shrink-0 mt-0.5" />
              <a
                href="mailto:hello@booknest.in"
                className="font-medium hover:text-[#0f766e] transition-colors"
              >
                hello@booknest.in
              </a>
            </li>
            <li className="flex items-start gap-3 text-[0.9375rem] text-stone-700">
              <Phone className="w-5 h-5 text-[#0f766e] shrink-0 mt-0.5" />
              <span>+91 80 4710 0000</span>
            </li>
            <li className="flex items-start gap-3 text-[0.9375rem] text-stone-600">
              <MapPin className="w-5 h-5 text-[#0f766e] shrink-0 mt-0.5" />
              <span>Bengaluru · Serving institutions across India</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <input
            name="institution"
            placeholder="Institution name"
            value={form.institution}
            onChange={update}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-[0.9375rem] placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e]"
          />
          <input
            type="email"
            name="email"
            placeholder="Official email"
            value={form.email}
            onChange={update}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-[0.9375rem] placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about branches, users, and timeline"
            value={form.message}
            onChange={update}
            className="w-full resize-none rounded-xl border border-stone-200 px-4 py-3 text-[0.9375rem] placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e]"
          />
          <button
            type="button"
            className="w-full rounded-xl bg-[#0f766e] py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-[#0d9488] transition-colors"
          >
            Send message
          </button>
          <p className="text-center text-[0.75rem] text-stone-500">
            By submitting, you agree to be contacted about BookNest.
          </p>
        </div>
      </div>
    </Section>
  );
}
