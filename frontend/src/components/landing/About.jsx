import React from "react";
import Section from "../ui/Section";
import { Cloud, Lock, Zap, Award, CheckCircle } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Architecture", desc: "Access from anywhere, secure on any device." },
    { icon: <Lock className="w-6 h-6" />, title: "End-to-End Encryption", desc: "Enterprise-grade security for user data." },
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Performance", desc: "Sub-second response times globally." },
    { icon: <Award className="w-6 h-6" />, title: "Award Winning", desc: "Recognized by leading tech publications." },
  ];

  return (
    <Section id="about" className="bg-card">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group order-2 lg:order-1">
          {/* Main Visual */}
          <div className="relative aspect-[4/5] rounded-[3rem] bg-gradient-to-tr from-primary/20 via-accent/10 to-primary/5 p-1 group-hover:scale-105 transition-transform duration-500 ease-out">
            <div className="w-full h-full bg-gradient-to-br from-card to-card/80 rounded-[2.8rem] flex items-center justify-center shadow-inner border border-border/50 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.02)_25%,rgba(37,99,235,0.02)_50%,transparent_50%)] bg-[length:30px_30px]" />

              {/* Central Content */}
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Trusted by</h3>
                  <p className="text-4xl font-extrabold text-primary">
                    1,200+
                  </p>
                  <p className="text-muted-foreground">Institutions Worldwide</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 left-8 p-3 bg-background/90 backdrop-blur-sm border border-border rounded-xl shadow-lg">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div className="absolute bottom-12 right-8 p-3 bg-background/90 backdrop-blur-sm border border-border rounded-xl shadow-lg">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-2xl shadow-xl border border-border group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-300 ease-out">
            <div className="text-3xl font-extrabold text-primary-foreground tracking-tighter">99.9%</div>
            <div className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">Server Uptime</div>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
              <Award className="w-4 h-4" />
              <span>Industry Leader</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Next Generation{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Library Software
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We revolutionized library management by building a platform that feels like your favorite modern apps—fast, beautiful, and effortless to use. Our AI-powered system handles everything from cataloging to analytics, giving librarians more time to focus on what matters most: connecting people with knowledge.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-background/50 border border-border/50 rounded-2xl hover:bg-background/80 transition-all duration-300 ease-out group cursor-pointer hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {achievement.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-foreground text-base">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Learn More About Us
              <Award className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}