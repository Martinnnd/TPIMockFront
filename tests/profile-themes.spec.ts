import { test, expect } from '@playwright/test';
for(const era of [1970,1980,1990,2000]) {
 test(`perfil tematico ${era}`,async({page})=>{
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(`/?era=${era}`);
  await page.getByRole('button',{name:'Perfil',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Mi perfil',exact:true})).toBeVisible();
  await expect(page.locator('.personal-counts dd')).toHaveText(['0','0','0','0']);
  await expect(page.locator('.personal-map .leaflet-marker-icon')).toHaveCount(0);
  if(era===1980){await page.getByRole('button',{name:'Cronista',exact:true}).click();await expect(page.getByRole('button',{name:'Cronista',exact:true})).toHaveAttribute('aria-pressed','true');await expect(page.locator('.profile-portrait')).toHaveAttribute('aria-label','Personaje: Cronista');}
  await page.screenshot({path:`test-results/profile-${era}.png`});
  await page.locator('.personal-header>.primary-button').click();
  await expect(page.locator('.app')).toHaveClass(/view-map/);
  await page.getByRole('button',{name:'Cancelar',exact:true}).click();
  await expect(page.locator('.app')).toHaveClass(/view-profile/);
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(await page.locator('.personal-header').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
  await page.screenshot({path:`test-results/profile-mobile-${era}.png`});
 });
}
