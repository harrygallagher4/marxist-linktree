const f={context:void 0,registry:void 0};function U(e){f.context=e}function K(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const Q=(e,n)=>e===n,A={equals:Q};let X=Y;const w=1,v=2,L={owned:null,cleanups:null,context:null,owner:null};var p=null;let H=null,u=null,d=null,y=null,m=0;function J(e,n){const t=u,s=p,i=e.length===0,o=i?L:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=i?e:()=>e(()=>x(()=>N(o)));p=o,u=null;try{return S(r,!0)}finally{u=t,p=s}}function oe(e,n){n=n?Object.assign({},A,n):A;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),j(t,i));return[P.bind(t),s]}function q(e,n,t){const s=k(e,n,!1,w);T(s)}function re(e,n,t){t=t?Object.assign({},A,t):A;const s=k(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,T(s),P.bind(s)}function x(e){if(u===null)return e();const n=u;u=null;try{return e()}finally{u=n}}function P(){if(this.sources&&this.state)if(this.state===w)T(this);else{const e=d;d=null,S(()=>E(this),!1),d=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function j(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=H&&H.running;r&&H.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?d.push(o):y.push(o),o.observers&&F(o)),r||(o.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),n}function T(e){if(!e.fn)return;N(e);const n=p,t=u,s=m;u=p=e,Z(e,e.value,s),u=t,p=n}function Z(e,n,t){let s;try{s=e.fn(n)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(N),e.owned=null),e.updatedAt=t+1,R(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?j(e,s):e.value=s,e.updatedAt=t)}function k(e,n,t,s=w,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==L&&(p.owned?p.owned.push(o):p.owned=[o]),o}function I(e){if(e.state===0)return;if(e.state===v)return E(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<m);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===w)T(e);else if(e.state===v){const s=d;d=null,S(()=>E(e,n[0]),!1),d=s}}function S(e,n){if(d)return e();let t=!1;n||(d=[]),y?t=!0:y=[],m++;try{const s=e();return z(t),s}catch(s){t||(y=null),d=null,R(s)}}function z(e){if(d&&(Y(d),d=null),e)return;const n=y;y=null,n.length&&S(()=>X(n),!1)}function Y(e){for(let n=0;n<e.length;n++)I(e[n])}function E(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===w?s!==n&&(!s.updatedAt||s.updatedAt<m)&&I(s):i===v&&E(s,n)}}}function F(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=v,t.pure?d.push(t):y.push(t),t.observers&&F(t))}}function N(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),r=t.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)N(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function R(e){throw e}let V=!1;function ee(){V=!0}function fe(e,n){if(V&&f.context){const t=f.context;U(K());const s=x(()=>e(n||{}));return U(t),s}return x(()=>e(n||{}))}function te(e,n,t){let s=t.length,i=n.length,o=s,r=0,l=0,c=n[i-1].nextSibling,a=null;for(;r<i||l<o;){if(n[r]===t[l]){r++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===r){const h=o<s?l?t[l-1].nextSibling:t[o-l]:c;for(;l<o;)e.insertBefore(t[l++],h)}else if(o===l)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[o-1]&&t[l]===n[i-1]){const h=n[--i].nextSibling;e.insertBefore(t[l++],n[r++].nextSibling),e.insertBefore(t[--o],h),n[i]=t[o]}else{if(!a){a=new Map;let g=l;for(;g<o;)a.set(t[g],g++)}const h=a.get(n[r]);if(h!=null)if(l<h&&h<o){let g=r,$=1,M;for(;++g<i&&g<o&&!((M=a.get(n[g]))==null||M!==h+$);)$++;if($>h-l){const W=n[r];for(;l<h;)e.insertBefore(t[l++],W)}else e.replaceChild(t[l++],n[r++])}else r++;else n[r++].remove()}}}const D="_$DX_DELEGATE";function ne(e,n,t,s={}){let i;return J(o=>{i=o,n===document?e():se(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function ue(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},o=n?()=>x(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function ce(e,n=window.document){const t=n[D]||(n[D]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,G))}}function se(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return C(e,n,s,t);q(i=>C(e,n(),i,t),s)}function ie(e,n,t={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>_(n,i),f.registry=new Map,f.context={id:t.renderId||"",count:0},_(n,t.renderId);const s=ne(e,n,[...n.childNodes],t);return f.context=null,s}function ae(e){let n,t;if(!f.context||!(n=f.registry.get(t=le()))){if(f.context&&console.warn("Unable to find DOM nodes for hydration key:",t),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+t);return e()}return f.completed&&f.completed.add(n),f.registry.delete(t),n}function de(e){let n=e,t=0,s=[];if(f.context)for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="#")t++;else if(i==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function he(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=f;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;G(s),n.shift()}}),f.events.queued=!0)}function G(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function C(e,n,t,s,i){if(f.context){!t&&(t=[...e.childNodes]);let l=[];for(let c=0;c<t.length;c++){const a=t[c];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}t=l}for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(f.context)return t;if(o==="number"&&(n=n.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=b(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(f.context)return t;t=b(e,t,s)}else{if(o==="function")return q(()=>{let l=n();for(;typeof l=="function";)l=l();t=C(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],c=t&&Array.isArray(t);if(B(l,n,t,i))return q(()=>t=C(e,l,t,s,!0)),()=>t;if(f.context){if(!l.length)return t;for(let a=0;a<l.length;a++)if(l[a].parentNode)return t=l}if(l.length===0){if(t=b(e,t,s),r)return t}else c?t.length===0?O(e,l,s):te(e,t,l):(t&&b(e),O(e,l));t=l}else if(n.nodeType){if(f.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=b(e,t,s,n);b(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function B(e,n,t,s){let i=!1;for(let o=0,r=n.length;o<r;o++){let l=n[o],c=t&&t[o],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=B(e,l,c)||i;else if(a==="function")if(s){for(;typeof l=="function";)l=l();i=B(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const h=String(l);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return i}function O(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function b(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let r=n.length-1;r>=0;r--){const l=n[r];if(i!==l){const c=l.parentNode===e;!o&&!r?c?e.replaceChild(i,l):e.insertBefore(i,t):c&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function _(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!f.registry.has(o)&&f.registry.set(o,i)}}function le(){const e=f.context;return`${e.id}${e.count++}`}const pe=(...e)=>(ee(),ie(...e));export{de as a,re as b,oe as c,ce as d,ne as e,fe as f,ae as g,pe as h,se as i,he as r,ue as t};
