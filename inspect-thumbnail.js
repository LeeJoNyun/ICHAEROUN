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
  
  // Inspect the first thumbnail
  const thumbnailInfo = await page.evaluate(() => {
    const thumbnail = document.querySelector('[class*="opacity-40"]');
    if (thumbnail) {
      const style = window.getComputedStyle(thumbnail);
      const rect = thumbnail.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        opacity: style.opacity,
        display: style.display,
        position: style.position,
        zIndex: style.zIndex,
        backgroundColor: style.backgroundColor,
        svg_count: thumbnail.querySelectorAll('svg').length,
        rect_count: thumbnail.querySelectorAll('svg rect').length
      };
    }
    return null;
  });
  
  console.log('Thumbnail Info:');
  console.log(JSON.stringify(thumbnailInfo, null, 2));
  
  // Take a zoomed screenshot of just the first card
  const card = await page.$('[class*="min-w-[70vw]"]');
  if (card) {
    await card.screenshot({ path: '/tmp/card-detail.png' });
    console.log('\n✓ Card detail screenshot saved: /tmp/card-detail.png');
  }
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
