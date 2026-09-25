import {expect,it} from 'vitest';
import {youtubeIdFromUrl} from './youtube';
it('acepta enlaces de video, shorts y compartidos sin aceptar dominios ajenos',()=>{
 for(const url of ['https://youtu.be/5NV6Rdv1a3I?si=abc','https://www.youtube.com/watch?v=5NV6Rdv1a3I','https://m.youtube.com/shorts/5NV6Rdv1a3I','https://youtube.com/live/5NV6Rdv1a3I'])expect(youtubeIdFromUrl(url)).toBe('5NV6Rdv1a3I');
 for(const url of ['javascript:alert(1)','https://youtube.com.evil.com/watch?v=5NV6Rdv1a3I','https://example.com/watch?v=5NV6Rdv1a3I','https://youtube.com/watch?v=bad','https://youtube.com/playlist?list=abc',''])expect(youtubeIdFromUrl(url)).toBeNull();
});
