"use strict";(self.webpackChunkmeal_planner=self.webpackChunkmeal_planner||[]).push([[487],{424:function(e,t,n){n.d(t,{X3:function(){return m}});const r=(e,t)=>t.some((t=>e instanceof t));let o,s;const a=new WeakMap,i=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return i.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),D(a.get(this))}:function(...t){return D(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return c.set(r,t.sort?t.sort():[t]),D(r)}}function f(e){return"function"===typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(i.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));i.set(e,t)}(e),r(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,l):e)}function D(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(D(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&a.set(t,e)})).catch((()=>{})),d.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=f(e);return t!==e&&(u.set(e,t),d.set(t,e)),t}const v=e=>d.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=D(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(D(a.result),e.oldVersion,e.newVersion,D(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),i.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),i}const I=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],g=new Map;function h(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(g.get(t))return g.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&s.done]))[0]};return g.set(t,s),s}l=(e=>({...e,get:(t,n,r)=>h(t,n)||e.get(t,n,r),has:(t,n)=>!!h(t,n)||e.has(t,n)}))(l)}}]);