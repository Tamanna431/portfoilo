const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, 'resume.html');
    const pdfPath = path.resolve(__dirname, '..', 'public', 'resume.pdf');
    
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      },
      printBackground: true
    });

    console.log('PDF generated successfully at:', pdfPath);
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
