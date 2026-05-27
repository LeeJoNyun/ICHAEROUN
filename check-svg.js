const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  await page.evaluate(() => {
    document.querySelector('#works')?.scrollIntoView({ behavior: 'auto' });
  });
  
  await page.waitForTimeout(1000);
  
  // Get SVG HTML content
  const svgContent = await page.evaluate(() => {
    const thumbnail = document.querySelector('[class*="opacity-40"] svg');
    if (thumbnail) {
      // Count elements
      return {
        outerHTML_preview: thumbnail.outerHTML.substring(0, 500),
        hasGradient: thumbnail.querySelector('linearGradient') ? true : false,
        rectCount: thumbnail.querySelectorAll('rect').length,
        lineCount: thumbnail.querySelectorAll('line').length,
        fillColors: Array.from(thumbnail.querySelectorAll('[fill]')).map(el => 
          el.getAttribute('fill')
        ).slice(0, 5)
      };
    }
    return null;
  });
  
  console.log('SVG Content Check:');
  console.log(JSON.stringify(svgContent, null, 2));
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
