import { readFileSync } from 'node:fs';
﻿import {test,expect} from '@playwright/test';
for(const era of [1970,1980,1990,2000,2010]) test(`adjuntos y musica en ${era}`,async({page})=>{
 await page.route('https://open.spotify.com/embed/**',route=>route.fulfill({contentType:'text/html',body:'<p>Spotify de prueba</p>'}));
 await page.goto(`/?era=${era}`);
 await page.getByRole('button',{name:'Perfil',exact:true}).click();
 await page.locator('.personal-header>.primary-button').click();
 await page.locator('.memory-map').click({position:{x:600,y:420}});
 await expect(page.getByRole('dialog')).toBeVisible();
 await page.locator('input[name=title]').fill(`Recuerdo con adjunto ${era}`);
 await page.locator('input[name=place]').fill('Universidad Nacional de La Matanza, San Justo');
 await page.locator('textarea[name=description]').fill('Una tarde de encuentros en la universidad que guardamos para volver a recordar.');
 let mime='image/png';let name='recuerdo.png';let buffer=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jG3sAAAAASUVORK5CYII=','base64');
 if(era===2010){buffer=readFileSync('tests/fixtures/flower.mp4');mime='video/mp4';name='flower.mp4';}

 await page.locator('input[type=file]').setInputFiles({name,mimeType:mime,buffer});
 await page.getByLabel('Canción del recuerdo').selectOption('2lAOYHa5kr9G9eYCNebqWR');
 await page.getByRole('button',{name:'Guardar recuerdo',exact:true}).click();
 await expect(page.locator('.app')).toHaveClass(/view-profile/);
 await expect(page.locator('.personal-detail .post-music')).toContainText('Get Lucky');
 await expect(page.locator('.personal-detail .post-media '+(era===2010?'video':'img'))).toBeVisible();
 await page.reload();await page.getByRole('button',{name:'Perfil',exact:true}).click();
 await page.locator('.personal-memory').first().click();
 await expect(page.locator('.personal-detail .post-media '+(era===2010?'video':'img'))).toHaveAttribute('src',/^blob:/);
 await page.getByRole('button',{name:'Feed',exact:true}).click();
 const post=page.locator('.feed-post').filter({hasText:`Recuerdo con adjunto ${era}`});
 await post.scrollIntoViewIfNeeded();
 await expect(post.locator('.post-media')).toBeVisible();
 if(era===2010)await expect.poll(()=>post.locator('video').evaluate(v=>(v as HTMLVideoElement).readyState)).toBeGreaterThan(0);
 await page.screenshot({path:`test-results/attachment-${era}.png`});
 await expect(post.locator('iframe')).toHaveCount(0);
 await post.locator('.post-music-label').click();
 await expect(post.locator('iframe')).toHaveAttribute('src',/2lAOYHa5kr9G9eYCNebqWR/);
 await page.getByRole('button',{name:'Perfil',exact:true}).click();
 await expect(post.locator('iframe')).toHaveCount(0);
});
