import React, { useState } from "react";
import Section from "../ui/Section";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Head Librarian, Oxford High School",
    image: "SJ",
    rating: 5,
    text: "This system saved us 20 hours of manual data entry every single week. The AI-powered recommendations have increased our circulation by 35%. It's a complete game changer for modern libraries.",
    highlight: "35% increase in circulation"
  },
  {
    name: "David Chen",
    role: "University IT Director, Stanford University",
    image: "DC",
    rating: 5,
    text: "The API integration was seamless. Our students actually enjoy using the library portal now, and we've seen a 50% reduction in support tickets. The analytics dashboard gives us insights we never had before.",
    highlight: "50% fewer support tickets"
  },
  {
    name: "Elena Rodriguez",
    role: "Community Library Director, Los Angeles Public Library",
    image: "ER",
    rating: 5,
    text: "Finally, a system that doesn't require a 100-page manual to understand. The interface is intuitive, and the automation features handle everything from fines to inventory. Simply brilliant engineering.",
    highlight: "Zero training required"
  },
  {
    name: "Marcus Thompson",
    role: "Dean of Libraries, Harvard University",
    image: "MT",
    rating: 5,
    text: "In our research environment, precision and speed are critical. This platform delivers on both fronts with enterprise-grade security and performance that scales with our 20 million item collection.",
    highlight: "20M+ items managed"
  },
  {
    name: "Priya Patel",
    role: "Digital Services Manager, London School of Economics",
    image: "PP",
    rating: 5,
    text: "The mobile app integration and real-time notifications have transformed how our students interact with library resources. We've seen engagement metrics improve dramatically.",
    highlight: "Mobile-first design"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section id="testimonials" className="bg-background">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
          <Star className="w-4 h-4 fill-current" />
          <span>Client Success Stories</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          What Our Partners Say
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how leading educational institutions are transforming their libraries with our platform
        </p>
      </div>

      {/* Main Testimonial */}
      <div className="max-w-4xl mx-auto mb-12 relative">
        <div
          key={currentIndex}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300 ease-out animate-fade-in hover:scale-[1.01] hover:-translate-y-1"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-60" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="w-12 h-12 text-primary/30" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <div key={i}>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-8 text-foreground">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Highlight */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>{currentTestimonial.highlight}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xl text-primary-foreground shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 ease-out">
                {currentTestimonial.image}
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">{currentTestimonial.name}</div>
                <div className="text-primary font-medium">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-card border border-border rounded-full hover:bg-card/80 transition-all duration-200 ease-out hover:scale-110 hover:-translate-x-1 group"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-border/80'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-card border border-border rounded-full hover:bg-card/80 transition-all duration-200 ease-out hover:scale-110 hover:translate-x-1 group"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
          </button>
        </div>
      </div>

      {/* Additional Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.slice(0, 3).map((testimonial, i) => (
          <div
            key={i}
            className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:bg-card/80 transition-all hover:scale-105 hover:-translate-y-1.5 group cursor-pointer"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, j) => (
                <div key={j}>
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              ))}
            </div>
            <p className="text-foreground italic mb-4 line-clamp-3">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-primary hover:scale-110 hover:rotate-5 transition-transform duration-300">
                {testimonial.image}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                <div className="text-muted-foreground text-xs">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </Section>
  );
}