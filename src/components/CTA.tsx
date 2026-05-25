import React from "react";

export default function CTA() {
  return (
    <section className="bg-primary text-on-primary py-stack-gap-lg">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <h2 className="text-headline-lg font-headline-lg mb-6">
          Ready to start your next project?
        </h2>
        <button className="bg-white text-primary px-10 py-4 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform active:scale-95 duration-200 cursor-pointer">
          Let&apos;s collaborate
        </button>
      </div>
    </section>
  );
}
