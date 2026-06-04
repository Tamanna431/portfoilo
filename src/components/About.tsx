import React from "react";

export default function About() {
  const highlights = [
    { icon: "🎓", title: "CSE Student", desc: "Currently pursuing my BSc in Computer Science & Engineering, building a strong foundation in software principles." },
    { icon: "💻", title: "Web Development", desc: "Passionate about bringing ideas to life in the browser and creating intuitive, dynamic user experiences." },
    { icon: "🌱", title: "MERN Stack Learner", desc: "Currently learning and expanding my skill set with MongoDB, Express, React, and Node.js for full-stack apps." },
    { icon: "⚡", title: "Modern Websites", desc: "I love building modern websites, focusing on responsive design, performance, and modern UI/UX aesthetics." }
  ];

  return (
    <section id="about" className="max-w-container-max mx-auto px-gutter py-section-padding">
      <h2 className="text-headline-lg font-headline-lg border-l-4 border-primary pl-6 mb-12 text-white glow-text">
        About Me
      </h2>
      
      <div className="mb-12 text-body-lg text-secondary max-w-3xl leading-relaxed">
        <p>
          I'm a self-motivated learner and a frontend enthusiast. My journey into tech has been fueled by curiosity and a desire to build things that make a difference. I'm constantly exploring new technologies and love turning complex problems into simple, beautiful, and intuitive designs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="bg-[#111832] p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] transition-all duration-300">
            <div className="text-4xl mb-6 bg-gradient-to-br from-white/5 to-white/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 shadow-inner">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-secondary text-body-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
