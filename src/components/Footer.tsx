import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050814] py-section-padding border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <span className="flex items-center gap-2 text-xl font-bold text-white mb-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-sm text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                T
              </div>
              Tamanna Akter
            </span>
            <p className="text-secondary text-sm leading-relaxed">
              Frontend Developer &amp; Fresh Graduate<br />
              Moakhali, Dhaka, Bangladesh
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="#home" className="text-secondary hover:text-primary transition-colors text-sm">Home</Link>
              <Link href="#journey" className="text-secondary hover:text-primary transition-colors text-sm">Journey</Link>
              <Link href="#skills" className="text-secondary hover:text-primary transition-colors text-sm">Skills</Link>
              <Link href="#projects" className="text-secondary hover:text-primary transition-colors text-sm">Projects</Link>
              <Link href="#contact" className="text-secondary hover:text-primary transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary">
              <a href="mailto:tamannashuchi06@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">mail</span>
                tamannashuchi06@gmail.com
              </a>
              <a href="tel:01825984740" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">call</span>
                01825984740
              </a>
              <a
                href="https://github.com/Tamanna431"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm text-primary">code</span>
                github.com/Tamanna431
              </a>
              <a
                href="https://www.linkedin.com/in/tamanna431/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm text-primary">work</span>
                linkedin.com/in/tamanna431
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-sm">
            © {new Date().getFullYear()} Tamanna Akter. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Tamanna431"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors text-sm font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tamanna431/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
