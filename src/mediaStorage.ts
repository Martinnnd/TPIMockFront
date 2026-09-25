// Binary files live in IndexedDB; localStorage keeps only the reference.
function database(): Promise<IDBDatabase> {
 return new Promise((resolve,reject)=>{const request=indexedDB.open('nostalgia-media',1);request.onupgradeneeded=()=>request.result.createObjectStore('files');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});
}
export async function saveMedia(id:string,file:Blob){const db=await database();try {await new Promise<void>((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').put(file,id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});} finally {db.close();}}
export async function readMedia(id:string):Promise<Blob|undefined>{const db=await database();try{return await new Promise((resolve,reject)=>{const r=db.transaction('files').objectStore('files').get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}finally{db.close();}}
export async function removeMedia(id:string){const db=await database();try{await new Promise<void>((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);});}finally{db.close();}}
