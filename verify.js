const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  
  console.log('Loading page...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  console.log('Scrolling to Works section...');
  await page.evaluate(() => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'auto' });
    }
  });
  
  await page.waitForTimeout(1500);
  
  console.log('Taking screenshot...');
  const worksElement = await page.$('#works');
  if (worksElement) {
    await worksElement.screenshot({ path: '/tmp/works-section.png' });
    console.log('✓ Screenshot saved: /tmp/works-section.png');
  }
  
  // Count SVG elements
  const svgCount = await page.evaluate(() => {
    return document.querySelectorAll('#works svg').length;
  });
  console.log(`✓ SVG elements in Works: ${svgCount}`);
  
  // Check z-10
  const z10Count = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[class*="z-10"]')).length;
  });
  console.log(`✓ Elements with z-10: ${z10Count}`);
  
  // Check project titles
  const projects = await page.evaluate(() => {
    const titles = [];
    document.querySelectorAll('h3').forEach(h => {
      if (h.textContent.match(/포유브로우|MODO|CoreAdmin|Bloom|NovaTech/)) {
        titles.push(h.textContent);
      }
    });
    return titles;
  });
  console.log(`✓ Projects found: ${projects.join(', ')}`);
  
  await browser.close();
  console.log('\n✓ Verification complete!');
})().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
