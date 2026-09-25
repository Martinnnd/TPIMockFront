export function youtubeIdFromUrl(input:string):string|null {
 try {const url=new URL(input.trim());if(!['https:','http:'].includes(url.protocol)||url.username||url.password)return null;
 const host=url.hostname.toLowerCase();let id:string|null=null;
 if(host==='youtu.be')id=url.pathname.slice(1);
 else if(['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(host)) {
  if(url.pathname==='/watch')id=url.searchParams.get('v');
  else {const parts=url.pathname.split('/');if(['shorts','embed','live'].includes(parts[1])&&parts.length===3)id=parts[2];}
 }
 return id&&/^[A-Za-z0-9_-]{11}$/.test(id)?id:null;
 }catch{return null;}
}
