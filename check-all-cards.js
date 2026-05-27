const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => {
    document.querySelector('#works')?.scrollIntoView({ behavior: 'auto' });
  });
  
  await page.waitForTimeout(1500);
  
  // Check all project cards
  const projects = await page.evaluate(() => {
    const cards = document.querySelectorAll('[class*="min-w-[70vw]"]');
    const results = [];
    cards.forEach((card, idx) => {
      const title = card.querySelector('h3')?.textContent;
      const hasThumbnail = card.querySelector('[class*="z-10"] svg') !== null;
      const svg = card.querySelector('[class*="z-10"] svg');
      const svgInfo = svg ? {
        viewBox: svg.getAttribute('viewBox'),
        hasGradient: svg.querySelector('linearGradient') !== null,
        rects: svg.querySelectorAll('rect').length,
      } : null;
      
      results.push({
        index: idx + 1,
        title,
        hasThumbnail,
        svgInfo
      });
    });
    return results;
  });
  
  console.log('All Project Cards:');
  console.log(JSON.stringify(projects, null, 2));
  
  // Scroll through each card and take screenshots
  for (let i = 0; i < 5; i++) {
    await page.evaluate((idx) => {
      const cards = document.querySelectorAll('[class*="min-w-[70vw]"]');
      cards[idx].scrollIntoView({ behavior: 'auto', block: 'center' });
    }, i);
    
    await page.waitForTimeout(1000);
    
    const card = await page.$(`[class*="min-w-[70vw]"]:nth-of-type(${i + 1})`);
    if (card) {
      await card.screenshot({ path: `/tmp/card-${i + 1}.png` });
      console.log(`✓ Card ${i + 1} screenshot saved`);
    }
  }
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
