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
  
  // Get detailed thumbnail info
  const thumbnailInfo = await page.evaluate(() => {
    const thumbnail = document.querySelector('[class*="z-10"]');
    if (thumbnail) {
      const style = window.getComputedStyle(thumbnail);
      const rect = thumbnail.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        opacity: style.opacity,
        display: style.display,
        zIndex: style.zIndex,
      };
    }
    return null;
  });
  
  console.log('Current Thumbnail Size and Opacity:');
  console.log(`Width: ${thumbnailInfo.width}px`);
  console.log(`Height: ${thumbnailInfo.height}px`);
  console.log(`Opacity: ${thumbnailInfo.opacity} (${Math.round(thumbnailInfo.opacity * 100)}%)`);
  console.log(`Z-Index: ${thumbnailInfo.zIndex}`);
  
  // Take card detail
  const card = await page.$('[class*="min-w-[70vw]"]');
  if (card) {
    await card.screenshot({ path: '/tmp/card-detail-new.png' });
    console.log('\n✓ Detailed card screenshot saved');
  }
  
  // Test hover effect
  await page.evaluate(() => {
    const card = document.querySelector('[class*="min-w-[70vw]"] [class*="group"]');
    if (card) {
      card.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    }
  });
  
  await page.waitForTimeout(500);
  
  if (card) {
    await card.screenshot({ path: '/tmp/card-detail-hover.png' });
    console.log('✓ Card hover state screenshot saved');
  }
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
