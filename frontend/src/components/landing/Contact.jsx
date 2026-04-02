// import React, { useState } from "react";
// import Section from "../ui/Section";
// import { Mail, Phone } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     institution: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <Section id="contact" className="bg-background py-32">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT SIDE */}
//         <div className="space-y-8 max-w-md">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
//             Get in Touch
//           </h2>

//           <p className="text-muted-foreground text-lg">
//             Have questions or want a demo? Fill the form and we’ll get back to you.
//           </p>

//           <div className="space-y-4 text-muted-foreground">
//             <div className="flex items-center gap-3">
//               <Mail className="w-5 h-5 text-primary" />
//               <span>hello@librarysaas.com</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Phone className="w-5 h-5 text-primary" />
//               <span>+1 (555) 123-4567</span>
//             </div>
//           </div>
//         </div>

//         {/* FORM */}
//         <div className="w-full max-w-lg mx-auto border border-border rounded-2xl p-10 space-y-6">
          
//           <input
//             type="text"
//             name="institution"
//             placeholder="Institution name"
//             value={formData.institution}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Work email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
//           />

//           <textarea
//             name="message"
//             rows={5}
//             placeholder="Your message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary resize-none"
//           />

//           <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
//             Send Message
//           </button>

//           <p className="text-xs text-muted-foreground text-center">
//             We’ll respond within 24 hours.
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    institution: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0c1a2e 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-8 max-w-md">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Contact Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p className="text-white/60 text-lg">
            Have questions or want a demo? Fill the form and we'll get back to
            you within 24 hours.
          </p>

          <div className="space-y-4">
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="p-2 rounded-lg"
                style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b" }}
              >
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-white/70 text-sm">hello@librarysaas.com</span>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="p-2 rounded-lg"
                style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b" }}
              >
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-white/70 text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div
          className="w-full max-w-lg mx-auto rounded-2xl p-10 space-y-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            Send us a message
          </h3>

          {["institution", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "institution" ? "Institution name" : "Work email"}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid rgba(245,158,11,0.5)";
                e.target.style.background = "rgba(245,158,11,0.05)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                e.target.style.background = "rgba(255,255,255,0.05)";
              }}
            />
          ))}

          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
            }}
            onFocus={(e) => {
              e.target.style.border = "1px solid rgba(245,158,11,0.5)";
              e.target.style.background = "rgba(245,158,11,0.05)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid rgba(255,255,255,0.1)";
              e.target.style.background = "rgba(255,255,255,0.05)";
            }}
          />

          <button
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#0f172a",
            }}
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>

          <p className="text-xs text-white/30 text-center">
            We'll respond within 24 hours.
          </p>
        </div>
      </div>
    </Section>
  );
}