import React from "react";

const milestones = [
  {
    period: "2023 - PRESENT",
    role: "Frontend Developer",
    description: "Developing highly interactive user interfaces using React, Next.js, and Tailwind CSS. Implementing modern UI/UX designs and ensuring cross-browser compatibility.",
  },
  {
    period: "2022 - 2023",
    role: "Full-Stack Development Learner",
    description: "Mastered the MERN stack (MongoDB, Express, React, Node.js). Built several full-stack projects focusing on scalable architectures.",
  },
  {
    period: "2021 - 2022",
    role: "Web Design & Foundation",
    description: "Started the journey with HTML, CSS, and JavaScript. Learned the fundamentals of web architecture and responsive design.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#0a0e23] max-w-container-max mx-auto px-gutter py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg">
        <div className="md:col-span-5">
          <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 mb-8 text-white glow-text">
            My Journey
          </h2>
          <p className="text-body-lg font-body-lg text-secondary">
            Continuous learning and adapting to modern web technologies to build exceptional digital products.
          </p>
          <div className="mt-stack-gap-lg p-8 bg-[#111832] rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block text-white">Frontend</span>
                <span className="text-label-sm font-label-sm text-secondary">Specialization</span>
              </div>
            </div>
            <hr className="border-white/10 mb-6" />
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block text-white">Full-Stack</span>
                <span className="text-label-sm font-label-sm text-secondary">Capabilities</span>
              </div>
            </div>
            <hr className="border-white/10 mb-6" />
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary font-fill text-3xl glow-text">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block text-white">100%</span>
                <span className="text-label-sm font-label-sm text-secondary">Dedication</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="relative ml-3 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[2px] before:bg-white/10">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-12 mb-stack-gap-lg group last:mb-0">
                <div className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-br from-[#6366f1] to-primary rounded-full border-4 border-[#0a0e23] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
                <div>
                  <span className="text-label-sm font-label-sm text-primary mb-1 block glow-text">
                    {item.period}
                  </span>
                  <h4 className="text-headline-md font-headline-md mb-2 text-white">{item.role}</h4>
                  <p className="text-body-md font-body-md text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
