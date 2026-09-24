import { test, expect } from '@playwright/test';
test('inicio limpio, equipos y monocromo exclusivo al entrar en 1970', async ({ page }) => {
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('/');
  await expect(page.locator('.era-fact-popup,.stories-drawer')).toHaveCount(0);
  await expect(page.locator('.music-card')).toBeVisible();
  await page.getByRole('button', {name:'Estilo del mapa',exact:true}).click();
  const color=page.locator('#mapbox-settings select').nth(1);
  await color.selectOption('faded');
  for (const era of [1970,1980,1990,2000]) {
    await page.locator('.decade-menu summary').click();
    await page.locator('.decades button').nth([1970,1980,1990,2000].indexOf(era)).click();
    await expect(color).toHaveValue(era === 1970 ? 'monochrome' : 'faded');
    await expect(page.locator('.era-fact-popup,.stories-drawer')).toHaveCount(0);
    await page.locator('.music-card').screenshot({path:`test-results/player-${era}.png`});
  }
  await page.locator('.navigation-rail button').nth(4).click();
  await expect(page.locator('.era-fact-popup')).toBeVisible();
  await page.locator('.decade-menu summary').click();
  await page.locator('.decades button').first().click();
  await expect(page.locator('.era-fact-popup')).toHaveCount(0);
  await expect(color).toHaveValue('monochrome');
  await page.setViewportSize({width:390,height:844});
  await expect(page.locator('.music-card')).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
