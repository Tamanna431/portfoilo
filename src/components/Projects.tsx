import React from "react";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  updated_at: string;
}

export default async function Projects() {
  let repos: Repo[] = [];
  try {
    // Fetching the user's latest updated public repositories
    const res = await fetch("https://api.github.com/users/Tamanna431/repos?sort=updated&per_page=10", {
      next: { revalidate: 3600 }, // revalidate every hour
    });
    
    if (res.ok) {
      const data = await res.json();
      // Filter out repos without a homepage (live link) if we want, or just take the first 3
      // We will try to prioritize ones with homepage, then fallback to just the latest 3
      const withHomepage = data.filter((repo: Repo) => repo.homepage && repo.homepage !== "");
      
      if (withHomepage.length >= 3) {
        repos = withHomepage.slice(0, 3);
      } else {
        repos = data.slice(0, 3);
      }
    }
  } catch (error) {
    console.error("Failed to fetch projects from GitHub", error);
  }

  if (repos.length === 0) {
    return null; // or a fallback UI
  }

  return (
    <section className="bg-surface py-section-padding relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="mb-stack-gap-lg flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 text-white glow-text">
              Recent Projects
            </h2>
            <p className="mt-4 text-secondary max-w-2xl text-lg">
              Check out my latest work from GitHub. I am constantly learning and building new things.
            </p>
          </div>
          <Link 
            href="https://github.com/Tamanna431" 
            target="_blank"
            className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            View all on GitHub <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
          {repos.map((repo) => (
            <div 
              key={repo.id}
              className="bg-[#111832] rounded-xl border border-white/10 overflow-hidden shadow-lg hover:border-[#6366f1]/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Header area */}
              <div className="h-32 bg-gradient-to-br from-[#0c1228] to-[#111832] border-b border-white/5 relative p-6 flex items-end">
                <div className="absolute top-4 right-4 flex gap-2">
                  <Link href={repo.html_url} target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary text-white/70 transition-colors" title="View Source Code">
                     <span className="material-symbols-outlined text-[18px]">code</span>
                  </Link>
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 text-primary transition-colors" title="Live Preview">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </Link>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white truncate w-full pr-16">{repo.name}</h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-secondary text-sm flex-1 mb-6">
                  {repo.description || "No description provided for this repository. Check it out on GitHub to learn more about the code and implementation."}
                </p>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics.slice(0, 3).map(topic => (
                      <span key={topic} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                  <span className="text-xs text-white/40">Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                  {repo.homepage ? (
                    <Link 
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`} 
                      target="_blank"
                      className="text-primary text-sm font-medium hover:underline glow-text"
                    >
                      Live Link
                    </Link>
                  ) : (
                    <span className="text-secondary text-sm">Code only</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="https://github.com/Tamanna431" 
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            View all on GitHub <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
