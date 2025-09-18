const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //  portfolio URL
  const url = 'https://my-portfolio-gamma-sepia-38.vercel.app/';

  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: 'portfolio.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
