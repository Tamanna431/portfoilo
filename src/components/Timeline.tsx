import React from "react";

const milestones = [
  {
    role: "BSc in Computer Science & Engineering",
    org: "International Standard University (ISU)",
    description: "Pursuing my degree while actively building full-stack web projects.",
  },
  {
    role: "Full-Stack Projects",
    org: "Self-Learning",
    description: "Built apps like SkillSphere and SportNest using React, Node.js & MongoDB.",
  },
  {
    role: "Frontend Development",
    org: "Self-Learning",
    description: "Mastered React.js, Next.js, and Tailwind CSS. Built responsive applications.",
  },
  {
    role: "Web Foundation",
    org: "Self-Learning",
    description: "Started coding with HTML, CSS, and JS. Built modern static websites.",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="bg-[#0a0e23] max-w-container-max mx-auto px-gutter py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg">
        <div className="md:col-span-4">
          <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 mb-8 text-white glow-text">
            My Journey
          </h2>
          <p className="text-body-lg font-body-lg text-secondary mb-8">
            A fresh graduate continuously learning modern web technologies and building real-world projects to grow as a developer.
          </p>

          {/* Stats card */}
          <div className="p-8 bg-[#111832] rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">school</span>
              <div>
                <span className="text-lg font-bold block text-white">BSc CSE</span>
                <span className="text-label-sm font-label-sm text-secondary">ISU, Dhaka</span>
              </div>
            </div>
            <hr className="border-white/10 mb-6" />
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">rocket_launch</span>
              <div>
                <span className="text-lg font-bold block text-white">10+ Projects</span>
                <span className="text-label-sm font-label-sm text-secondary">Live &amp; Deployed</span>
              </div>
            </div>
            <hr className="border-white/10 mb-6" />
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">code</span>
              <div>
                <span className="text-lg font-bold block text-white">Frontend</span>
                <span className="text-label-sm font-label-sm text-secondary">Specialization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="relative ml-3 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[2px] before:bg-white/10">
            {milestones.map((item, idx) => {
              const stepNumber = `0${milestones.length - idx}`;
              return (
                <div key={idx} className="relative pl-12 mb-stack-gap-lg group last:mb-0">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-[#0a0e23] rounded-full border-[3px] border-white/20 z-10 group-hover:border-primary transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-transparent group-hover:bg-primary rounded-full transition-colors duration-300"></div>
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest text-primary/60 mb-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 uppercase">
                      Phase {stepNumber}
                    </span>
                    <h4 className="text-headline-md font-headline-md mb-1 text-white group-hover:text-primary transition-colors">{item.role}</h4>
                    <span className="text-sm text-white/50 mb-3 block">{item.org}</span>
                    <p className="text-body-md font-body-md text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
