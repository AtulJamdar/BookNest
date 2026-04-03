import React from "react";
import { Book, Users, BarChart2, Shield, Zap, Globe } from "lucide-react";
import Section from "../ui/Section";

const features = [
  {
    icon: Book,
    title: "Smart catalog",
    desc: "Titles, copies, and availability stay accurate as loans move through your branches.",
  },
  {
    icon: Users,
    title: "Members & access",
    desc: "Students, faculty, and staff—each with permissions that match your institution’s policy.",
  },
  {
    icon: BarChart2,
    title: "Reports & insights",
    desc: "Circulation trends and usage summaries without exporting to spreadsheets.",
  },
  {
    icon: Shield,
    title: "Governance-ready",
    desc: "Audit-friendly workflows and access control for sensitive patron data.",
  },
  {
    icon: Zap,
    title: "Built for rush hour",
    desc: "Fast search and checkout when queues form at the issue desk.",
  },
  {
    icon: Globe,
    title: "Work from anywhere",
    desc: "Cloud access for librarians and admins—on campus or remote—on modern browsers.",
  },
];

export default function Features() {
  return (
    <Section id="features" className="!py-16 md:!py-24 bg-[#f7f5f2]">
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 px-2">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#0f766e] mb-3">
          Product
        </p>
        <h2 className="text-[1.875rem] sm:text-[2.25rem] font-bold text-[#1e3a5f] tracking-tight leading-tight mb-4">
          Everything your library runs on—delivered clearly
        </h2>
        <p className="text-stone-600 text-[1.0625rem] leading-relaxed">
          A complete operations layer—from acquisition to returns—designed for
          schools, colleges, and public libraries that need reliability first.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <article
              key={i}
              className="rounded-2xl border border-stone-200/90 bg-white p-7 shadow-sm shadow-stone-900/5 hover:shadow-md hover:border-[#0f766e]/25 transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ecfdf5] to-[#e0f2fe] text-[#0f766e]">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#1e3a5f] tracking-tight mb-2">
                {f.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-stone-600">
                {f.desc}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <a
          href="/register"
          className="inline-flex items-center justify-center rounded-xl bg-[#1e3a5f] px-8 py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-[#2d4a73] transition-colors shadow-md shadow-[#1e3a5f]/20"
        >
          Explore BookNest
        </a>
      </div>
    </Section>
  );
}
