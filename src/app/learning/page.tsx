// src/app/learning/page.tsx
import React from "react";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  description: string;
  lessons: string[];
}

export const dynamic = "force-dynamic"; // ensure server‑side fetch each request

export default async function LearningPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/courses`, {
    cache: "no-store",
  });
  const courses: Course[] = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Online Learning Platform</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article key={c.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{c.title}</h2>
            <p className="mb-4 text-gray-300">{c.description}</p>
            <h3 className="font-medium mb-2">Lessons:</h3>
            <ul className="list-disc list-inside text-gray-400">
              {c.lessons.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
