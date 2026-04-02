// import React, { useState } from "react";
// import Section from "../ui/Section";
// import { CheckCircle, ArrowRight } from "lucide-react";

// export default function CTA() {
//   const [email, setEmail] = useState("");

//   const benefits = [
//     "14-day free trial",
//     "Setup in minutes",
//     "Secure and reliable",
//   ];

//   return (
//     <Section className="bg-background min-h-screen flex items-center justify-center">
      
//       <div className="w-full flex justify-center">
//         <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center gap-16">
          
//           {/* Heading */}
//           <div className="w-full flex flex-col items-center gap-6">
//             <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
//               Start Managing Your Library Today
//             </h2>
//             <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
//               Simple setup. No complexity. Get started in minutes.
//             </p>
//           </div>
  
//           {/* Benefits */}
//           <div className="flex flex-wrap justify-center items-center gap-8 w-full">
//             {benefits.map((item, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5 text-primary" />
//                 <span className="text-sm md:text-base text-muted-foreground">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
  
//           {/* Input */}
//           <div className="w-full max-w-md flex flex-col items-center gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary text-center"
//             />
  
//             <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
//               Get Started
//               <ArrowRight className="w-4 h-4" />
//             </button>
  
//             <p className="text-xs text-muted-foreground text-center">
//               No credit card required
//             </p>
//           </div>
  
//         </div>
//       </div>
  
//     </Section>
//   );
// }

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
    <Section className="py-24 px-6 bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto text-center bg-primary rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Background Decorative Blur Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Heading */}
          <div className="w-full flex flex-col items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground font-serif leading-tight">
              Start Managing Your Library Today
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-lg">
              Simple setup. No complexity. Get started in minutes.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-6 w-full mb-10">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base text-primary-foreground/90 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Input & Action */}
          <div className="w-full max-w-md flex flex-col items-center gap-4">
            <div className="w-full group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl outline-none focus:ring-2 focus:ring-accent text-primary-foreground placeholder:text-primary-foreground/40 text-center transition-all"
              />
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition-all group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-primary-foreground/50 text-center">
              No credit card required • Cancel anytime
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}