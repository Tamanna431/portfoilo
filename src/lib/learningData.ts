export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    lessons: [
      { id: "lesson-1-1", title: "HTML Basics", content: "HTML tags, structure, semantics." },
      { id: "lesson-1-2", title: "CSS Fundamentals", content: "Selectors, flexbox, grid, theming." },
      { id: "lesson-1-3", title: "JavaScript Intro", content: "Variables, functions, DOM manipulation." },
    ],
  },
  {
    id: "course-2",
    title: "Modern React & Next.js",
    description: "Build full‑stack React apps with Next.js and TypeScript.",
    lessons: [
      { id: "lesson-2-1", title: "React Fundamentals", content: "Components, hooks, state management." },
      { id: "lesson-2-2", title: "Next.js Routing", content: "App router, server components, API routes." },
      { id: "lesson-2-3", title: "Deployment", content: "Vercel workflow and environment variables." },
    ],
  },
];
