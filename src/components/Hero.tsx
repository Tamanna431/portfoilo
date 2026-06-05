import React from "react";

export default function Hero() {
  return (
    <section id="home" className="max-w-container-max mx-auto px-gutter pt-48 pb-section-padding grid grid-cols-1 md:grid-cols-12 items-center gap-stack-gap-lg">
      <div className="md:col-span-7 order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3a4b7c] bg-[#111832] mb-8">
          <span className="text-sm">🚀</span>
          <span className="text-sm text-primary font-medium tracking-wide">Welcome to my portfolio</span>
        </div>

        <h1 className="text-display-hero font-display-hero text-white mb-6 leading-tight">
          Hi, I&apos;m <br />
          <span className="text-[#6366f1] glow-text text-7xl inline-block mt-2 font-bold">Tamanna Akter</span>
        </h1>

        <h2 className="text-3xl text-white font-medium mb-6">
          I build <span className="text-primary glow-text">Frontend</span> Experiences
        </h2>

        <div className="text-body-lg font-body-lg text-secondary max-w-[550px] mb-10 leading-relaxed">
          <p>
            I'm an aspiring Frontend Developer who loves to craft solid and scalable web products with great user experiences. I specialize in building modern web applications with cutting-edge tech stacks.
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
            <span className="text-3xl font-bold text-white glow-text">Fresh</span>
            <p className="text-secondary text-sm mt-1">Graduate</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative mt-10 md:mt-0">
        <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] relative rounded-full border border-white/10 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-dashed before:border-white/20 before:animate-[spin_60s_linear_infinite]">
          <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] relative rounded-full border border-white/10 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[1px] before:border-dashed before:border-[#6366f1]/40 before:animate-[spin_40s_linear_infinite_reverse]">
            <div className="hero-blob-bg w-[240px] h-[240px] md:w-[360px] md:h-[360px] relative overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Tamanna Akter Portrait"
                className="w-full h-full object-cover"
                src="https://avatars.githubusercontent.com/Tamanna431"
              />
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute top-10 right-0 md:-right-10 bg-[#111832]/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
          <span className="material-symbols-outlined text-primary">code</span>
          <span className="text-white text-sm font-medium">React / Next.js</span>
        </div>

        <div className="absolute bottom-20 left-0 md:-left-10 bg-[#111832]/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          <span className="material-symbols-outlined text-[#6366f1]">palette</span>
          <span className="text-white text-sm font-medium">Tailwind CSS</span>
        </div>

        <div className="absolute -bottom-5 right-10 bg-[#111832]/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}}>
          <span className="material-symbols-outlined text-[#a855f7]">database</span>
          <span className="text-white text-sm font-medium">MongoDB</span>
        </div>
      </div>
    </section>
  );
}
