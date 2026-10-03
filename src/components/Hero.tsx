import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-container-max mx-auto px-gutter pt-36 sm:pt-44 md:pt-48 pb-section-padding grid grid-cols-1 md:grid-cols-12 items-center gap-stack-gap-lg"
    >
      <div className="md:col-span-7 order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3a4b7c] bg-[#141e42] mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-sm text-primary font-medium tracking-wide">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-display-hero font-display-hero text-white mb-6">
          Hi, I&apos;m <br />
          <span className="text-[#6366f1] inline-block mt-2 font-bold">
            TAMANNA AKTER
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl text-white font-medium mb-6">
          I build <span className="text-primary glow-text">Full Stack</span> Experiences
        </h2>

        <div className="text-body-lg font-body-lg text-secondary max-w-[550px] mb-10 leading-relaxed">
          <p>
            I&apos;m an aspiring Full Stack Developer who loves to craft solid and scalable web products with great user experiences. I specialize in building modern web applications with cutting-edge tech stacks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="bg-gradient-to-r from-[#6366f1] to-primary text-white px-8 py-3 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer"
          >
            Explore My Work
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>

          <a
            href="/resume.pdf"
            download="Tamanna_Akter_Resume.pdf"
            className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-label-sm text-label-sm hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-primary">download</span>
            Download CV
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mt-12">
          <div>
            <span className="text-3xl font-bold text-white glow-text">10+</span>
            <p className="text-secondary text-sm mt-1">Projects Built</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-white glow-text">5+</span>
            <p className="text-secondary text-sm mt-1">Technologies</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-white glow-text">3.95</span>
            <p className="text-secondary text-sm mt-1">CGPA / 4.00</p>
          </div>
        </div>
      </div>

      {/* Developer Profile Card (Replacing the round circle) */}
      <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative mt-6 md:mt-0">
        <div className="relative group w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px]">
          
          {/* Ambient Glow Aura matching text colors (Indigo #6366f1 & Cyan primary) */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6366f1] via-primary to-purple-600 opacity-40 blur-2xl group-hover:opacity-70 transition duration-700 -z-10" />

          {/* Profile Card Container */}
          <div className="relative rounded-3xl p-4 sm:p-5 bg-[#121c3d] border border-[#6366f1]/40 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)] backdrop-blur-xl group hover:border-primary/60 transition-all duration-500 overflow-hidden">
            
            {/* Top Shine Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Card Window Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/90" />
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for hire</span>
              </div>
            </div>

            {/* Image Frame */}
            <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0e1634] shadow-inner mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Tamanna Akter Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src="https://avatars.githubusercontent.com/Tamanna431"
              />

              {/* Bottom Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c3d] via-transparent to-transparent opacity-85" />

              {/* Info Label inside Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    Tamanna Akter
                  </h3>
                  <p className="text-primary text-xs font-medium">
                    Full Stack Developer
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase font-bold tracking-wider text-white">
                  CSE • CGPA 3.95
                </span>
              </div>
            </div>

            {/* Card Bottom Quick Badges */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#6366f1]/20 text-[#a5b4fc] border border-[#6366f1]/30">
                  React
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/20 text-[#67e8f9] border border-primary/30">
                  Next.js
                </span>
              </div>
            </div>

          </div>

          {/* Floating Badges */}
          <div
            className="absolute -top-3 -right-3 md:-right-6 bg-[#141e42]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-2.5 animate-bounce"
            style={{ animationDuration: "3.5s" }}
          >
            <span className="material-symbols-outlined text-primary text-lg">code</span>
            <span className="text-white text-xs font-semibold">React / Next.js</span>
          </div>

          <div
            className="absolute -bottom-4 -left-3 md:-left-6 bg-[#141e42]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-2.5 animate-bounce"
            style={{ animationDuration: "4.2s", animationDelay: "1s" }}
          >
            <span className="material-symbols-outlined text-[#6366f1] text-lg">palette</span>
            <span className="text-white text-xs font-semibold">Tailwind CSS</span>
          </div>

          <div
            className="absolute top-1/2 -right-4 md:-right-8 bg-[#141e42]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-2 animate-bounce hidden sm:flex"
            style={{ animationDuration: "3.8s", animationDelay: "2s" }}
          >
            <span className="material-symbols-outlined text-[#a855f7] text-lg">database</span>
            <span className="text-white text-xs font-semibold">MongoDB</span>
          </div>

        </div>
      </div>
    </section>
  );
}
