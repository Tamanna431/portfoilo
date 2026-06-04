import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#111832] via-[#1e293b] to-[#111832] py-stack-gap-lg relative overflow-hidden border-y border-white/5">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-primary/10 rounded-[100%] blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
        <h2 className="text-headline-lg font-headline-lg mb-6 text-white glow-text">
          Ready to start your next project?
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
          Whether you have a specific project in mind or just want to explore possibilities, I&apos;m always open to discussing new opportunities.
        </p>
        <a href="mailto:tamannaakter431@gmail.com" className="bg-gradient-to-r from-[#6366f1] to-primary text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform active:scale-95 duration-200 cursor-pointer shadow-[0_0_30px_rgba(0,210,255,0.4)] inline-block">
          Let&apos;s collaborate
        </a>
      </div>
    </section>
  );
}
