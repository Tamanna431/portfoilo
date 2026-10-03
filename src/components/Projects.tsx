import React from "react";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  homepage: string;
  html_url: string;
  topics: string[];
  accentGradient: string;
  categoryBadge: string;
  primaryButton: string;
  pillBadge: string;
  glowColor: string;
  domain: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Fable - Ebook Sharing Platform",
    category: "Full Stack • E-Commerce & Publishing",
    description:
      "A modern digital ebook sharing platform that connects passionate readers with talented writers. Browse curated libraries, discover trending titles, and purchase original ebooks with seamless Stripe payment processing and secure digital delivery.",
    homepage: "https://ebook-client-liard.vercel.app",
    html_url: "https://github.com/Tamanna431/ebook-client",
    topics: ["Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    accentGradient: "from-rose-500 via-pink-400 to-purple-400",
    categoryBadge: "text-rose-300 bg-rose-500/10 border-rose-500/20",
    primaryButton: "border-rose-500 text-white hover:bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.25)]",
    pillBadge: "bg-rose-950/40 text-rose-200 border-rose-500/30",
    glowColor: "from-rose-500/15 to-purple-500/15",
    domain: "ebook-client-liard.vercel.app",
  },
  {
    id: 2,
    name: "GadgetVerse - Smart Electronics",
    category: "Full Stack • E-Commerce & Analytics",
    description:
      "A sleek e-commerce web application for discovering and ordering premium smart gadgets. Features dynamic category filtering, a lightning-fast responsive product catalog, interactive analytics visualizations, and multi-provider user authentication.",
    homepage: "https://gadget-client-chi.vercel.app",
    html_url: "https://github.com/Tamanna431/gadget_client",
    topics: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    accentGradient: "from-cyan-400 via-sky-400 to-blue-500",
    categoryBadge: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
    primaryButton: "border-cyan-400 text-white hover:bg-cyan-500 hover:text-black shadow-[0_0_15px_rgba(6,182,212,0.25)]",
    pillBadge: "bg-cyan-950/40 text-cyan-200 border-cyan-500/30",
    glowColor: "from-cyan-500/15 to-blue-500/15",
    domain: "gadget-client-chi.vercel.app",
  },
  {
    id: 3,
    name: "SportNest - Strength Tracker",
    category: "Full Stack • Fitness & Progress Dashboard",
    description:
      "A full-stack fitness tracking web application for logging progressive overload workouts and tracking strength milestones. Includes an intuitive dashboard, visual analytics graphs, REST API endpoints, and real-time progress summaries.",
    homepage: "https://sportnest-client-iota.vercel.app",
    html_url: "https://github.com/Tamanna431/sportnest-client",
    topics: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
    accentGradient: "from-emerald-400 via-teal-300 to-cyan-400",
    categoryBadge: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    primaryButton: "border-emerald-400 text-white hover:bg-emerald-500 hover:text-black shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    pillBadge: "bg-emerald-950/40 text-emerald-200 border-emerald-500/30",
    glowColor: "from-emerald-500/15 to-teal-500/15",
    domain: "sportnest-client-iota.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Background ambient particle dots & glowing gradients (overflow-hidden isolated here so position:sticky works) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />

        {/* Subtle decorative grid/stars */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Header row */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-secondary font-medium">
                Where Code Meets Creativity 🎨💻
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-headline-lg font-bold text-white tracking-tight border-l-4 border-primary pl-5">
              Recent Projects
            </h2>
            <p className="mt-4 text-secondary max-w-2xl text-base sm:text-lg leading-relaxed">
              Explore real-world full-stack web applications and platforms I have built and deployed. Each project combines scalable architecture with clean, responsive user interfaces.
            </p>
          </div>

          <a
            href="https://github.com/Tamanna431"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium group self-start md:self-end"
          >
            <span>View all on GitHub</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Sticky Overlapping Project Cards Deck */}
        <div className="relative pb-24 sm:pb-32">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center sticky transition-all duration-300 py-6"
              style={{
                top: `calc(4.5rem + ${index * 20}px)`,
                zIndex: index + 10,
              }}
            >
              {/* Opaque Card Shell - Completely covers previous card upon overlap */}
              <div className="relative w-full max-w-4xl lg:max-w-5xl rounded-3xl bg-[#131d3f] border border-white/10 shadow-[0_-8px_30px_rgba(8,14,35,0.7),0_20px_45px_-12px_rgba(10,16,40,0.85)] hover:border-white/20 transition-all duration-300 overflow-hidden group">
                
                {/* Subtle top border highlight shine */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                {/* Ambient corner glow inside card */}
                <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${proj.glowColor} blur-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 relative z-10">
                  
                  {/* Left Column: Details, Buttons, Tech Stack */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Index & Category Pill */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-white/40 tracking-wider">
                          0{proj.id}
                        </span>
                        <span className="text-white/20 text-xs">•</span>
                        <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${proj.categoryBadge}`}>
                          {proj.category}
                        </span>
                      </div>

                      {/* Project Title with Glowing Gradient */}
                      <h3 className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r ${proj.accentGradient} bg-clip-text text-transparent mb-4`}>
                        {proj.name}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                        {proj.description}
                      </p>
                    </div>

                    {/* Action Buttons: Live view & Github Code */}
                    <div className="flex flex-wrap items-center gap-3.5 mb-6">
                      <a
                        href={proj.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${proj.primaryButton}`}
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Live view
                      </a>

                      <a
                        href={proj.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Github Code
                      </a>
                    </div>

                    {/* Tech Badges / Topics */}
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                        Technologies Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.topics.map((topic, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide border ${proj.pillBadge}`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Browser Window Mockup & Screenshot */}
                  <div className="lg:col-span-5">
                    <a
                      href={proj.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/preview relative rounded-xl overflow-hidden border border-white/15 bg-[#0f1736] shadow-xl hover:border-white/30 transition-all duration-300"
                    >
                      {/* Browser Window Header */}
                      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#162148] border-b border-white/10">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                        </div>

                        {/* URL Pill */}
                        <div className="px-2.5 py-0.5 rounded-md bg-[#0c132c] border border-white/10 text-[11px] text-white/60 font-mono truncate max-w-[190px]">
                          {proj.domain}
                        </div>

                        {/* External link icon */}
                        <span className="material-symbols-outlined text-white/40 text-xs">
                          open_in_new
                        </span>
                      </div>

                      {/* Website Screenshot with hover zoom */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0c132c]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(proj.homepage)}?w=800`}
                          alt={`${proj.name} live preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                          loading="lazy"
                        />

                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1736]/80 via-transparent to-transparent opacity-60 group-hover/preview:opacity-20 transition-opacity duration-300" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/preview:opacity-100 backdrop-blur-[2px] transition-all duration-300">
                          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                            <span>Open Live Website</span>
                            <span className="material-symbols-outlined text-xs">arrow_outward</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to GitHub */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-secondary text-sm mb-4">
            Looking for more repositories, open source contributions, or code samples?
          </p>
          <a
            href="https://github.com/Tamanna431"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-[#131d3f] hover:bg-[#18244d] text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span className="material-symbols-outlined text-primary text-[18px]">code</span>
            <span>Explore All Projects on GitHub</span>
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
