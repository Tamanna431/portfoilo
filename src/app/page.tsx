import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <CTA />
      </main>
      <Footer />

      {/* SVG Clip Path for Organic Blob */}
      <svg className="absolute" height="0" width="0">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="blob-path">
            <path d="M0.85,0.2 C0.95,0.35 1,0.5 0.95,0.65 C0.9,0.8 0.75,0.9 0.6,0.95 C0.45,1 0.25,1 0.15,0.85 C0.05,0.7 0,0.5 0.05,0.35 C0.1,0.2 0.3,0 0.5,0 C0.7,0 0.75,0.05 0.85,0.2"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
