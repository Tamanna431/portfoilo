import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050814] py-section-padding border-t border-white/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg items-center relative z-10">
        <div>
          <span className="flex items-center gap-2 text-headline-md font-headline-md font-bold text-white mb-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-sm text-white shadow-[0_0_10px_rgba(0,210,255,0.5)]">
              T
            </div>
            Tamanna Akter
          </span>
          <p className="text-body-md font-body-md text-secondary">
            Frontend Developer &amp; Tech Enthusiast
          </p>
        </div>
        <div className="md:text-right">
          <div className="flex md:justify-end gap-stack-gap-md mb-4">
            <Link
              className="text-secondary hover:text-primary transition-all hover:glow-text font-label-sm text-label-sm flex items-center gap-1"
              href="https://github.com/Tamanna431"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="text-secondary hover:text-primary transition-all hover:glow-text font-label-sm text-label-sm flex items-center gap-1"
              href="https://linkedin.com/in/tamanna431"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-label-sm font-label-sm text-secondary/60">
            © {new Date().getFullYear()} Tamanna Akter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
