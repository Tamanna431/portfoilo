import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-inverse-surface py-section-padding border-t border-surface-variant dark:border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg items-center">
        <div>
          <span className="text-headline-md font-headline-md font-bold text-on-surface dark:text-inverse-on-surface">
            Bill Pinder
          </span>
          <p className="text-body-md font-body-md text-secondary mt-2">
            Professional Web Developer &amp; UI Designer
          </p>
        </div>
        <div className="md:text-right">
          <div className="flex md:justify-end gap-stack-gap-md mb-4">
            <Link
              className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-opacity opacity-80 hover:opacity-100 underline decoration-2 underline-offset-4 font-label-sm text-label-sm"
              href="#"
            >
              GitHub
            </Link>
            <Link
              className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-opacity opacity-80 hover:opacity-100 underline decoration-2 underline-offset-4 font-label-sm text-label-sm"
              href="#"
            >
              LinkedIn
            </Link>
            <Link
              className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-opacity opacity-80 hover:opacity-100 underline decoration-2 underline-offset-4 font-label-sm text-label-sm"
              href="#"
            >
              Twitter
            </Link>
          </div>
          <p className="text-label-sm font-label-sm text-secondary opacity-60">
            © {new Date().getFullYear()} Bill Pinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
