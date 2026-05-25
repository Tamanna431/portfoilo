import React from "react";

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter pt-36 pb-section-padding grid grid-cols-1 md:grid-cols-12 items-center gap-stack-gap-lg">
      <div className="md:col-span-6 order-2 md:order-1">
        <span className="text-primary font-medium block mb-4">Do you need a website?</span>
        <h1 className="text-display-hero font-display-hero border-l-4 border-primary pl-6 mb-8">
          My story as a <br />web developer.
        </h1>
        <p className="text-body-lg font-body-lg text-secondary max-w-[500px]">
          I started my journey with a simple goal: to build digital experiences that are as functional as they are beautiful. Over the last decade, I&apos;ve transformed complex technical challenges into streamlined, user-friendly solutions.
        </p>
      </div>
      <div className="md:col-span-6 order-1 md:order-2 flex justify-center relative">
        <div className="hero-blob-bg w-[320px] h-[320px] md:w-[450px] md:h-[450px] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Bill Pinder Portrait"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 contrast-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBngjt1kXndJjixQqI0ZMGBHPejimogXeDsaMVo6n-SQA5y6_iDZ6a-lXo7A6TKZOJHMYukNAT1iWLrf-C_BFMKolr55lCNndvM2MXSlm5YQl2o4RutVbIUiqpj6Kj7r4Uc36-tP5anRGfapruMrLYLnu2Do7lHEh1MrvLRR7VE0wXI-TL8cbPyTMD9Pe5iYV7-INWBJAKzAHO0xFZScI66-H2OOcle_hHVzUjvkiE9DzIyf0tHK32b69TMP0_X1UWvN0ysEu00aOwh"
          />
        </div>
        {/* Ambient Floating UI Elements */}
        <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-[0_20px_20px_rgba(0,0,0,0.08)] hidden md:block">
          <span className="material-symbols-outlined text-primary">code</span>
        </div>
        <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-[0_20px_20px_rgba(0,0,0,0.08)] hidden md:block">
          <span className="material-symbols-outlined text-primary">design_services</span>
        </div>
      </div>
    </section>
  );
}
