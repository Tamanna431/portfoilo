import React from "react";

const milestones = [
  {
    period: "2021 - PRESENT",
    role: "Senior Developer at TechFlow",
    description: "Leading the frontend engineering team in developing a globally scaled SaaS platform using React and GraphQL.",
  },
  {
    period: "2018 - 2021",
    role: "Full-Stack Freelance Studio",
    description: "Founded a specialized web agency focused on high-end portfolio websites and custom e-commerce solutions for boutique brands.",
  },
  {
    period: "2015 - 2018",
    role: "Junior Web Designer",
    description: "Mastered the fundamentals of HTML, CSS, and modern UI design principles at a creative marketing agency.",
  },
  {
    period: "2012 - 2015",
    role: "Computer Science Degree",
    description: "Academic foundation in algorithms, data structures, and the engineering principles of robust software.",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap-lg">
        <div className="md:col-span-5">
          <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 mb-8">
            Career Milestones
          </h2>
          <p className="text-body-lg font-body-lg text-secondary">
            A decade of growth, from building simple static pages to architecting enterprise-level digital platforms.
          </p>
          <div className="mt-stack-gap-lg p-8 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block">90%</span>
                <span className="text-label-sm font-label-sm text-secondary">Client satisfaction</span>
              </div>
            </div>
            <hr className="border-surface-container mb-6" />
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary font-fill">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block">+12</span>
                <span className="text-label-sm font-label-sm text-secondary">Years of experience</span>
              </div>
            </div>
            <hr className="border-surface-container mb-6" />
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary font-fill">
                check_circle
              </span>
              <div>
                <span className="text-headline-lg font-headline-lg block">+80</span>
                <span className="text-label-sm font-label-sm text-secondary">Successful projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="relative timeline-line ml-3">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-12 mb-stack-gap-lg group last:mb-0">
                <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300" />
                <div>
                  <span className="text-label-sm font-label-sm text-primary mb-1 block">
                    {item.period}
                  </span>
                  <h4 className="text-headline-md font-headline-md mb-2">{item.role}</h4>
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
