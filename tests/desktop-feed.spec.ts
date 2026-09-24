import { test, expect } from '@playwright/test';
for (const era of [1980, 1990, 2000]) {
 test(`escritorio y feed de ${era}`, async ({page}) => {
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(`/?era=${era}`);
  await page.getByRole('button',{name:'Feed',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Feed',exact:true})).toBeVisible();
  await expect(page.locator('.feed-post')).toHaveCount(7);
  await page.screenshot({path:`test-results/desktop-feed-${era}.png`});
  if(era!==1980) {
   await page.getByRole('button',{name:'Maximizar feed',exact:true}).click();
   await expect(page.locator('.social-layout')).toHaveClass(/feed-maximized/);
   await page.getByRole('button',{name:'Restaurar ventana del feed'}).click();
   await expect(page.locator('.social-layout')).not.toHaveClass(/feed-maximized/);
   await page.locator('.feed-post .post-content').first().click();
   await expect(page.locator('.feed-post')).toHaveCount(1);
   await page.getByRole('button',{name:'Atrás',exact:true}).click();
   await expect(page.locator('.feed-post')).toHaveCount(7);
   await page.getByRole('button',{name:'Cerrar feed y volver al mapa'}).click();
   await expect(page.locator('.app')).toHaveClass(/view-map/);
   await page.getByRole('button',{name:'Feed',exact:true}).click();
  }
  await page.locator('.feed-post .follow-button').first().click();
  await page.getByRole('button',{name:'Seguidos',exact:true}).click();
  await expect(page.locator('.feed-post')).toHaveCount(1);
  await page.setViewportSize({width:390,height:844});
  await expect(page.getByRole('heading',{name:'Feed',exact:true})).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:`test-results/mobile-feed-${era}.png`});
 });
}
