import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, MessageSquare, BookOpenCheck, Send, CheckCircle, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    institution: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ institution: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "General inquiries and support",
      contact: "hello@librarysaas.com",
      action: "mailto:hello@librarysaas.com"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "24/7 instant support",
      contact: "Available now",
      action: "#chat"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Schedule a consultation",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    }
  ];

  return (
    <Section id="contact" className="bg-background">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
      `}</style>

      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
          <MessageSquare className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions about our platform? Want to schedule a demo? We're here to help you transform your library operations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Methods */}
        <div className="space-y-8">
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 p-6 bg-card border border-border rounded-2xl hover:bg-card/80 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 ease-out hover:shadow-lg cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {method.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                  <a
                    href={method.action}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                  >
                    {method.contact}
                    <BookOpenCheck className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Office Info */}
          <div className="p-6 bg-card/50 border border-border/50 rounded-2xl hover:scale-[1.01] transition-all duration-300 ease-out animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Office</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Innovation Drive, Tech Valley, CA 94043</span>
              </div>
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <Phone className="w-5 h-5 text-primary" />
                <span>Mon-Fri 9AM-6PM PST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { href: "#features", title: "Features", desc: "Explore capabilities" },
              { href: "#pricing", title: "Pricing", desc: "View plans" }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="p-4 bg-card/50 border border-border/50 rounded-xl hover:bg-card/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out text-center animate-fade-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-lg font-semibold text-foreground">{link.title}</div>
                <div className="text-sm text-muted-foreground">{link.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border p-8 rounded-3xl shadow-2xl relative overflow-hidden hover:scale-[1.01] transition-all duration-300 ease-out animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Background Elements */}
          <div
            className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            style={{
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl"
            style={{
              animation: 'pulse 5s ease-in-out infinite 1s',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Send us a message
            </h3>
            <p className="text-muted-foreground mb-8">
              We'll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Institution / Organization
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 ease-out hover:scale-[1.01]"
                    placeholder="Your institution name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 ease-out hover:scale-[1.01]"
                    placeholder="your.email@institution.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 ease-out resize-none hover:scale-[1.01]"
                    placeholder="Tell us about your library and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-bold hover:bg-primary/90 transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 hover:scale-105 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        style={{
                          animation: 'spin 1s linear infinite',
                        }}
                      />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </div>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}