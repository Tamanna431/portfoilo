"use client";

import React, { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    icon: "web",
    description: "Crafting beautiful, responsive, and highly interactive user interfaces.",
    items: [
      { name: "React / Next.js", level: "90%" },
      { name: "Tailwind CSS", level: "95%" },
      { name: "JavaScript (ES6+)", level: "85%" },
      { name: "HTML5 / CSS3", level: "95%" },
    ],
  },
  {
    category: "Backend",
    icon: "database",
    description: "Building scalable and robust server-side architectures and APIs.",
    items: [
      { name: "Node.js", level: "80%" },
      { name: "Express.js", level: "85%" },
      { name: "MongoDB", level: "80%" },
    ],
  },
  {
    category: "Tools & Others",
    icon: "build",
    description: "Utilizing modern development tools to streamline the workflow.",
    items: [
      { name: "Git / GitHub", level: "90%" },
      { name: "Figma to Code", level: "85%" },
      { name: "Responsive Design", level: "95%" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-surface-container-low py-section-padding relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="mb-stack-gap-lg">
          <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 text-white glow-text">
            Core Competencies
          </h2>
          <p className="mt-4 text-secondary max-w-2xl text-lg">
            My technical toolkit allows me to build full-stack applications from the ground up, focusing heavily on delivering exceptional frontend experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-[#111832] p-8 rounded-xl border border-white/10 shadow-lg hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1]/20 to-primary/20 rounded-full flex items-center justify-center mb-6 border border-white/5">
                <span className="material-symbols-outlined text-primary text-2xl font-fill glow-text">{skillGroup.icon}</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-4 text-white">{skillGroup.category}</h3>
              <p className="text-body-md font-body-md text-secondary mb-8 h-16">
                {skillGroup.description}
              </p>
              <div className="space-y-5">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="flex justify-between text-label-sm font-label-sm mb-2 text-white/80">
                      <span>{item.name}</span>
                      <span className="text-primary">{item.level}</span>
                    </div>
                    <div className="h-2 bg-[#0c1228] rounded-full overflow-hidden border border-white/5 shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-[#6366f1] to-primary relative"
                        style={{
                          width: animate ? item.level : "0%",
                          transition: animate ? "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
                          transitionDelay: `${idx * 0.1 + itemIdx * 0.1}s`
                        }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
