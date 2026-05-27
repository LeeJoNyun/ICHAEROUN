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
  
  console.log('Testing drag interaction...');
  
  // Get initial scroll position
  const initialScroll = await page.evaluate(() => {
    const slider = document.querySelector('[class*="flex gap-8"]');
    return slider ? slider.scrollLeft : 0;
  });
  console.log(`Initial scroll position: ${initialScroll}px`);
  
  // Perform drag
  const slider = await page.$('[class*="flex gap-8"]');
  if (slider) {
    // Get slider position for drag calculation
    const sliderBox = await slider.boundingBox();
    const dragStartX = sliderBox.x + sliderBox.width / 2;
    const dragStartY = sliderBox.y + sliderBox.height / 2;
    
    // Perform mouse drag
    await page.mouse.move(dragStartX, dragStartY);
    await page.mouse.down();
    await page.mouse.move(dragStartX - 300, dragStartY, { steps: 10 });
    await page.mouse.up();
    
    console.log('✓ Drag performed');
  }
  
  await page.waitForTimeout(1000);
  
  // Get final scroll position
  const finalScroll = await page.evaluate(() => {
    const slider = document.querySelector('[class*="flex gap-8"]');
    return slider ? slider.scrollLeft : 0;
  });
  console.log(`Final scroll position: ${finalScroll}px`);
  console.log(`Scroll change: ${finalScroll - initialScroll}px`);
  
  // Take screenshot after drag
  const worksSection = await page.$('#works');
  if (worksSection) {
    await worksSection.screenshot({ path: '/tmp/works-after-drag.png' });
    console.log('✓ Screenshot after drag saved');
  }
  
  // Check if hint is hidden
  const hintVisible = await page.evaluate(() => {
    const hint = document.querySelector('[class*="drag-hint"]');
    return hint ? window.getComputedStyle(hint).display : 'not-found';
  });
  console.log(`Drag hint display: ${hintVisible}`);
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
