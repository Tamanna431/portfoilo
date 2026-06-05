import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(createWriteStream('./public/resume.pdf'));

const margin = 50;
const rightMargin = 545; // 595 - 50
const BLUE = '#2563eb';
const BLACK = '#000000';

// ── Header ──────────────────────────────────────────────────────────
let y = 40;
doc.fillColor(BLACK).fontSize(22).font('Helvetica-Bold').text('Tamanna Akter', margin, y);
doc.fontSize(10).font('Helvetica').text('Moakhali, Dhaka', margin, y + 4, { align: 'right' });

y += 20;
doc.fontSize(12).font('Helvetica-Bold').text('Frontend Developer', margin, y);
doc.fontSize(10).font('Helvetica').text('01825984740', margin, y, { align: 'right' });

y += 14;
doc.fontSize(10).font('Helvetica').text('tamannashuchi06@gmail.com', margin, y, { align: 'right' });

y += 16;
// Links
doc.fontSize(10).font('Helvetica-Bold');
const linksStr = 'Portfolio | LinkedIn | Github';
const linksWidth = doc.widthOfString(linksStr);
const linksX = rightMargin - linksWidth;

doc.fillColor(BLUE).text('Portfolio', linksX, y, { continued: true, link: 'https://github.com/Tamanna431' })
   .fillColor(BLACK).text(' | ', { continued: true, link: null })
   .fillColor(BLUE).text('LinkedIn', { continued: true, link: 'https://linkedin.com/in/tamanna431' })
   .fillColor(BLACK).text(' | ', { continued: true, link: null })
   .fillColor(BLUE).text('Github', { link: 'https://github.com/Tamanna431' });

doc.moveDown(1);

// ── Section helper ───────────────────────────────────────────────────
const sectionTop = (title) => {
  doc.moveDown(0.5);
  doc.fillColor(BLACK).fontSize(11).font('Helvetica-Bold')
     .text(title.toUpperCase(), margin, doc.y);
  doc.moveTo(margin, doc.y + 2).lineTo(rightMargin, doc.y + 2)
     .strokeColor(BLACK).lineWidth(0.5).stroke();
  doc.moveDown(0.5);
};

// ── SKILLS ───────────────────────────────────────────────────────────
sectionTop('Skills');

const writeSkill = (label, values) => {
  doc.fillColor(BLACK).fontSize(10).font('Helvetica-Bold')
     .text(`${label}: `, margin, doc.y, { continued: true });
  doc.font('Helvetica')
     .text(values, { lineGap: 3 });
};

writeSkill('Expertise', 'JavaScript | HTML5 | CSS3 | React.js | Next.js | Tailwind CSS');
writeSkill('Comfortable', 'Node.js | Express | MongoDB | BetterAuth');
writeSkill('Tools', 'Git | GitHub | VS Code | Postman');

doc.moveDown(0.5);

// ── PROJECTS ─────────────────────────────────────────────────────────
sectionTop('Projects');

const projects = [
  {
    name: 'SkillSphere',
    desc: 'Online Learning Platform',
    url:  'https://delightful-semifreddo-3296f6.netlify.app',
    tech: 'React.js | BetterAuth | Tailwind CSS | MongoDB',
    bullets: [
      'A modern learning platform where users can browse courses, watch lessons, and enroll in skill-based programs.',
      'Features protected routes, real-time search, and full authentication using BetterAuth.'
    ]
  },
  {
    name: 'Note Keeper',
    desc: 'Note Taking App',
    url:  'https://assignment-8-delta-ten.vercel.app',
    tech: 'Next.js | Node.js | MongoDB',
    bullets: [
      'A minimalist note-taking app with full CRUD operations via a RESTful API.',
      'Clean UI, fast performance, and seamless data persistence.'
    ]
  },
  {
    name: 'SportNest',
    desc: 'Strength Tracker',
    url:  'https://sportnest-client-iota.vercel.app',
    tech: 'React.js | Node.js | Express | MongoDB',
    bullets: [
      'A full-stack web app for tracking personal fitness goals, strength levels, and progress.',
      'Features a responsive dashboard with visual progress indicators.'
    ]
  },
];

projects.forEach((p) => {
  let startY = doc.y;
  
  // Left side: Name and Desc
  doc.fillColor(BLACK).fontSize(11).font('Helvetica-Bold')
     .text(`${p.name} `, margin, startY, { continued: true })
     .font('Helvetica').fontSize(10)
     .text(`(${p.desc})`, { continued: false });

  // Right side: Live Link
  doc.y = startY;
  doc.fillColor(BLUE).fontSize(10).font('Helvetica-Bold')
     .text('Live Link', margin, startY, { align: 'right', link: p.url });

  doc.moveDown(0.3);
  
  // Tech stack
  doc.fillColor(BLACK).fontSize(10).font('Helvetica-Bold')
     .text('Technologies used: ', margin, doc.y, { continued: true })
     .font('Helvetica')
     .text(p.tech);
  
  doc.moveDown(0.3);

  // Bullets
  p.bullets.forEach(b => {
    doc.fillColor(BLACK).fontSize(10).font('Helvetica')
       .text('•', margin + 5, doc.y, { continued: true })
       .text(`  ${b}`, margin + 15, doc.y, { width: 480, lineGap: 2 });
  });

  doc.moveDown(0.5);
});

// ── TWO COLUMNS FOR EDUCATION AND LANGUAGES ──────────────────────────
// We'll calculate current Y and put Education on left, Languages on right
doc.moveDown(0.5);
let splitY = doc.y;

// Education Header
doc.fillColor(BLACK).fontSize(11).font('Helvetica-Bold')
   .text('EDUCATION', margin, splitY);
doc.moveTo(margin, doc.y + 2).lineTo(margin + 200, doc.y + 2)
   .strokeColor(BLACK).lineWidth(0.5).stroke();
   
// Languages Header
doc.fillColor(BLACK).fontSize(11).font('Helvetica-Bold')
   .text('LANGUAGE', margin + 250, splitY);
doc.moveTo(margin + 250, doc.y + 2).lineTo(rightMargin, doc.y + 2)
   .strokeColor(BLACK).lineWidth(0.5).stroke();

doc.y += 10;
let contentY = doc.y;

// Education Content
doc.fillColor(BLACK).fontSize(10).font('Helvetica')
   .text('International Standard University', margin, contentY);
doc.moveDown(0.3);
doc.text('B.Sc. in CSE', margin, doc.y, { continued: true })
   .text('   (Ongoing)', { continued: false });

// Language Content
doc.y = contentY;
doc.fillColor(BLACK).fontSize(10).font('Helvetica')
   .text('•  Bengali (Native)', margin + 250, doc.y);
doc.moveDown(0.3);
doc.text('•  English (Proficient)', margin + 250, doc.y);


doc.end();
console.log('✅ public/resume.pdf generated successfully!');
