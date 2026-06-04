import React from "react";

const projects = [
  {
    id: 1,
    name: "SkillSphere — Online Learning Platform",
    description:
      "A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, and Marketing. Features protected routes, real-time search, Firebase auth, and a fully responsive UI.",
    homepage: "https://delightful-semifreddo-3296f6.netlify.app",
    html_url: "https://github.com/Tamanna431/online-learning-platform",
    topics: ["React.js", "Firebase", "Tailwind CSS", "Authentication"],
  },
  {
    id: 2,
    name: "Note Keeper",
    description:
      "A minimalist note-taking web app with full CRUD operations via a RESTful API. Features a clean UI, fast performance, seamless data persistence, and user authentication for private notes.",
    homepage: "https://assignment-8-delta-ten.vercel.app",
    html_url: "https://github.com/Tamanna431/note-keeper",
    topics: ["Next.js", "Node.js", "MongoDB", "REST API"],
  },
  {
    id: 3,
    name: "SportNest — Strength Tracker",
    description:
      "A full-stack web app for tracking personal fitness goals, strength levels, and progress. Features a responsive dashboard with a server-side API, client-side interface, and visual progress tracking.",
    homepage: "https://sportnest-client-iota.vercel.app",
    html_url: "https://github.com/Tamanna431/sportnest-client",
    topics: ["React.js", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Header row */}
        <div className="mb-12 flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 text-white glow-text">
              Recent Projects
            </h2>
            <p className="mt-4 text-secondary max-w-2xl text-lg">
              Here are some of the projects I have built and deployed. Each one is a real, working application with a live link.
            </p>
          </div>
          <a
            href="https://github.com/Tamanna431"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
          >
            View all on GitHub
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#111832] rounded-xl border border-white/10 overflow-hidden shadow-lg hover:border-[#6366f1]/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group"
            >
              {/* Card header / Image */}
              <div className="h-48 relative overflow-hidden border-b border-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(proj.homepage)}?w=600`}
                  alt={`${proj.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111832] via-[#111832]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <a
                    href={proj.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:text-primary text-white transition-colors"
                    title="View Source Code"
                  >
                    <span className="material-symbols-outlined text-[18px]">code</span>
                  </a>
                  <a
                    href={proj.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors"
                    title="Live Preview"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col relative z-10 bg-[#111832]">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{proj.name}</h3>
                <p className="text-secondary text-sm flex-1 mb-6 leading-relaxed">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                  <a
                    href={proj.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline glow-text flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">public</span>
                    Live Demo
                  </a>
                  <a
                    href={proj.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile GitHub link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/Tamanna431"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            View all on GitHub
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
