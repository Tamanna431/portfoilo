"use client";

import React, { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    icon: "web",
    description: "Crafting responsive, high-performance interfaces using modern frameworks.",
    items: [
      { name: "React / Next.js", level: "95%" },
      { name: "Tailwind CSS", level: "100%" },
    ],
  },
  {
    category: "Backend",
    icon: "database",
    description: "Building robust server-side architectures and efficient data pipelines.",
    items: [
      { name: "Node.js / Express", level: "88%" },
      { name: "PostgreSQL", level: "82%" },
    ],
  },
  {
    category: "Design",
    icon: "brush",
    description: "User-centric design focusing on accessibility and visual hierarchy.",
    items: [
      { name: "Figma", level: "90%" },
      { name: "UI/UX Principles", level: "92%" },
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
    <section ref={sectionRef} className="bg-surface-container-low py-section-padding">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-stack-gap-lg">
          <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6">
            Core Competencies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-surface-container shadow-sm hover:border-primary transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">{skillGroup.icon}</span>
              </div>
              <h3 className="text-headline-md font-headline-md mb-4">{skillGroup.category}</h3>
              <p className="text-body-md font-body-md text-secondary mb-8">
                {skillGroup.description}
              </p>
              <div className="space-y-4">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="flex justify-between text-label-sm font-label-sm mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}</span>
                    </div>
                    <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: animate ? item.level : "0%",
                          transition: animate ? "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
                        }}
                      />
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
