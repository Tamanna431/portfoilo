import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#111832] via-[#1e293b] to-[#111832] py-stack-gap-lg relative overflow-hidden border-y border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-primary/10 rounded-[100%] blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
        <h2 className="text-headline-lg font-headline-lg mb-6 text-white glow-text">
          Let&apos;s Work Together
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-4">
          I&apos;m a fresher actively looking for opportunities. Whether you have a project, internship, or just want to connect — feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-secondary text-sm">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">mail</span>
            tamannashuchi06@gmail.com
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">call</span>
            01825984740
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">location_on</span>
            Moakhali, Dhaka
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:tamannashuchi06@gmail.com"
            className="bg-gradient-to-r from-[#6366f1] to-primary text-white px-10 py-4 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform active:scale-95 duration-200 cursor-pointer shadow-[0_0_30px_rgba(99,102,241,0.4)] inline-block"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/tamanna431/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-primary text-primary px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all inline-block"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
