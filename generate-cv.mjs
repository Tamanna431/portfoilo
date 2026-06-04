import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(createWriteStream('./public/resume.pdf'));

const PRIMARY = '#6366f1';
const DARK    = '#0f1629';
const GRAY    = '#64748b';

// ── Header ──────────────────────────────────────────────────────────
doc.rect(0, 0, doc.page.width, 120).fill(DARK);

doc.fillColor(PRIMARY).fontSize(28).font('Helvetica-Bold')
   .text('Tamanna Akter', 50, 40);

doc.fillColor('#ffffff').fontSize(13).font('Helvetica')
   .text('Frontend Developer', 50, 78);

// Contact line
doc.fillColor('#a0aec0').fontSize(10)
   .text(
     'Moakhali, Dhaka  |  tamannashuchi06@gmail.com  |  01825984740',
     50, 100,
     { lineGap: 2 }
   );

// Links
doc.fillColor(PRIMARY).fontSize(10)
   .text('github.com/Tamanna431', 50, 116)
   .text('linkedin.com/in/tamanna431', 200, 116);

// ── Section helper ───────────────────────────────────────────────────
const sectionTop = (title, y) => {
  doc.moveDown(0.5);
  const yPos = y || doc.y;
  doc.fillColor(PRIMARY).fontSize(13).font('Helvetica-Bold')
     .text(title, 50, yPos);
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2)
     .strokeColor(PRIMARY).lineWidth(1).stroke();
  doc.moveDown(0.4);
};

// ── Summary ──────────────────────────────────────────────────────────
sectionTop('Summary', 145);
doc.fillColor('#333333').fontSize(10).font('Helvetica')
   .text(
     'Motivated and detail-oriented Frontend Developer with hands-on experience building responsive, user-friendly web applications. Passionate about clean code, modern UI design, and continuous learning.',
     50, doc.y, { width: 495, lineGap: 3 }
   );

// ── Skills ───────────────────────────────────────────────────────────
sectionTop('Skills');
const skills = [
  ['Languages',     'JavaScript, HTML5, CSS3'],
  ['Frameworks',    'React.js, Next.js'],
  ['Styling',       'Tailwind CSS, Bootstrap'],
  ['Tools',         'Git, GitHub, VS Code'],
  ['Auth',          'Firebase Authentication'],
  ['Database',      'MongoDB, Firebase Firestore'],
  ['Professional',  'LinkedIn, GitHub Collaboration'],
];
skills.forEach(([label, value]) => {
  doc.fillColor(PRIMARY).fontSize(10).font('Helvetica-Bold')
     .text(`${label}: `, 50, doc.y, { continued: true });
  doc.fillColor('#333333').font('Helvetica')
     .text(value, { lineGap: 3 });
});

// ── Projects ─────────────────────────────────────────────────────────
sectionTop('Projects');

const projects = [
  {
    name: 'SkillSphere — Online Learning Platform',
    url:  'https://delightful-semifreddo-3296f6.netlify.app',
    desc: 'A modern learning platform where users can browse courses, watch lessons, and enroll in skill-based programs (Web Dev, Design, Marketing). Features protected routes, real-time search, and full authentication.',
    tech: 'React.js, Firebase, Tailwind CSS',
  },
  {
    name: 'Note Keeper',
    url:  'https://assignment-8-delta-ten.vercel.app',
    desc: 'A minimalist note-taking app with full CRUD operations via a RESTful API. Clean UI, fast performance, and seamless data persistence.',
    tech: 'Next.js, Node.js, MongoDB',
  },
  {
    name: 'Strength Tracker (SportNest)',
    url:  'https://sportnest-client-iota.vercel.app',
    desc: 'A full-stack web app for tracking personal fitness goals, strength levels, and progress. Features a responsive dashboard with visual progress indicators.',
    tech: 'React.js, Node.js, Express, MongoDB',
  },
];

projects.forEach((p) => {
  doc.fillColor(PRIMARY).fontSize(11).font('Helvetica-Bold')
     .text(p.name, 50, doc.y);
  doc.fillColor(GRAY).fontSize(9).font('Helvetica')
     .text(p.url, 50, doc.y, { lineGap: 1 });
  doc.fillColor('#333333').fontSize(10)
     .text(p.desc, 50, doc.y, { width: 495, lineGap: 2 });
  doc.fillColor(PRIMARY).fontSize(9).font('Helvetica-Bold')
     .text(`Tech: `, 50, doc.y, { continued: true });
  doc.fillColor(GRAY).font('Helvetica').text(p.tech, { lineGap: 4 });
  doc.moveDown(0.4);
});

// ── Education ────────────────────────────────────────────────────────
sectionTop('Education');
doc.fillColor('#333333').fontSize(11).font('Helvetica-Bold')
   .text('International Standard University (ISU)', 50, doc.y);
doc.fillColor(GRAY).fontSize(10).font('Helvetica')
   .text('BSc in Computer Science & Engineering (CSE)', 50, doc.y, { lineGap: 2 });
doc.fillColor('#333333').fontSize(10)
   .text('CGPA: 0.90  |  Dhaka, Bangladesh', 50, doc.y, { lineGap: 4 });

// ── Languages ────────────────────────────────────────────────────────
sectionTop('Languages');
doc.fillColor('#333333').fontSize(10).font('Helvetica')
   .text('Bangla (Native)  •  English (Proficient)', 50, doc.y, { lineGap: 4 });

// ── Footer ───────────────────────────────────────────────────────────
doc.fillColor(GRAY).fontSize(8)
   .text('Generated for Tamanna Akter — tamannashuchi06@gmail.com', 50, doc.page.height - 40, {
     align: 'center', width: 495,
   });

doc.end();
console.log('✅ public/resume.pdf generated successfully!');
