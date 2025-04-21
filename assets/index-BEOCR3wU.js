(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();let p,j=null;function qe(){return(j===null||j.byteLength===0)&&(j=new Uint8Array(p.memory.buffer)),j}let N=0;function L(e,t){const n=t(e.length*1,1)>>>0;return qe().set(e,n/1),N=e.length,n}function P(e,t){return e=e>>>0,qe().subarray(e/1,e/1+t)}function Lt(e,t,n){const r=L(e,p.__wbindgen_malloc),i=N,o=p.resize(r,i,t,n);var a=P(o[0],o[1]).slice();return p.__wbindgen_free(o[0],o[1]*1,1),a}function Pt(e){const t=L(e,p.__wbindgen_malloc),n=N,r=p.grayscale(t,n);var i=P(r[0],r[1]).slice();return p.__wbindgen_free(r[0],r[1]*1,1),i}function $t(e,t){const n=L(e,p.__wbindgen_malloc),r=N,i=p.blur(n,r,t);var o=P(i[0],i[1]).slice();return p.__wbindgen_free(i[0],i[1]*1,1),o}function Ft(e){const t=L(e,p.__wbindgen_malloc),n=N,r=p.flip_horizontal(t,n);var i=P(r[0],r[1]).slice();return p.__wbindgen_free(r[0],r[1]*1,1),i}function xt(e,t){const n=L(e,p.__wbindgen_malloc),r=N,i=p.pixelate(n,r,t);var o=P(i[0],i[1]).slice();return p.__wbindgen_free(i[0],i[1]*1,1),o}function jt(e){const t=L(e,p.__wbindgen_malloc),n=N,r=p.invert(t,n);var i=P(r[0],r[1]).slice();return p.__wbindgen_free(r[0],r[1]*1,1),i}async function Ht(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Ut(){const e={};return e.wbg={},e.wbg.__wbindgen_init_externref_table=function(){const t=p.__wbindgen_export_0,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)},e}function Vt(e,t){return p=e.exports,Ge.__wbindgen_wasm_module=t,j=null,p.__wbindgen_start(),p}async function Ge(e){if(p!==void 0)return p;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/2025-1-s1-g9-t2/assets/img_bg-CKvO2WPr.wasm",import.meta.url));const t=Ut();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await Ht(await e,t);return Vt(n,r)}const Wt=()=>{};var Ce={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Kt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=o>>2,T=(o&3)<<4|s>>4;let b=(s&15)<<2|l>>6,R=l&63;c||(R=64,a||(b=64)),r.push(n[u],n[T],n[b],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Je(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const T=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||l==null||T==null)throw new zt;const b=o<<2|s>>4;if(r.push(b),l!==64){const R=s<<4&240|l>>2;if(r.push(R),T!==64){const F=l<<6&192|T;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qt=function(e){const t=Je(e);return Ye.encodeByteArray(t,!0)},Xe=function(e){return qt(e).replace(/\./g,"")},Gt=function(e){try{return Ye.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=()=>Jt().__FIREBASE_DEFAULTS__,Xt=()=>{if(typeof process>"u"||typeof Ce>"u")return;const e=Ce.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gt(e[1]);return t&&JSON.parse(t)},Qt=()=>{try{return Wt()||Yt()||Xt()||Zt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ze=()=>{var e;return(e=Qt())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Qe(){try{return typeof indexedDB=="object"}catch{return!1}}function et(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function tn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirebaseError";class $ extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nn,Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?rn(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new $(i,s,r)}}function rn(e,t){return e.replace(on,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const on=/\{\$([^}]+)}/g;function le(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(De(o)&&De(a)){if(!le(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function De(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new en;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cn(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sn(e){return e===C?void 0:e}function cn(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new an(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));const dn={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},un=f.INFO,fn={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},pn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=fn[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hn{constructor(t){this.name=t,this._logLevel=un,this._logHandler=pn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}}const gn=(e,t)=>t.some(n=>e instanceof n);let ke,Oe;function mn(){return ke||(ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bn(){return Oe||(Oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tt=new WeakMap,de=new WeakMap,nt=new WeakMap,Q=new WeakMap,be=new WeakMap;function wn(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(I(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&tt.set(n,e)}).catch(()=>{}),be.set(t,e),t}function yn(e){if(de.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});de.set(e,t)}let ue={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return de.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function In(e){ue=e(ue)}function vn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ee(this),t,...n);return nt.set(r,t.sort?t.sort():[t]),I(r)}:bn().includes(e)?function(...t){return e.apply(ee(this),t),I(tt.get(this))}:function(...t){return I(e.apply(ee(this),t))}}function En(e){return typeof e=="function"?vn(e):(e instanceof IDBTransaction&&yn(e),gn(e,mn())?new Proxy(e,ue):e)}function I(e){if(e instanceof IDBRequest)return wn(e);if(Q.has(e))return Q.get(e);const t=En(e);return t!==e&&(Q.set(e,t),be.set(t,e)),t}const ee=e=>be.get(e);function W(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=I(a);return r&&a.addEventListener("upgradeneeded",c=>{r(I(a.result),c.oldVersion,c.newVersion,I(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}function te(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),I(n).then(()=>{})}const _n=["get","getKey","getAll","getAllKeys","count"],Sn=["put","add","delete","clear"],ne=new Map;function Be(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ne.get(t))return ne.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Sn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_n.includes(n)))return;const o=async function(a,...s){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(s.shift())),(await Promise.all([l[n](...s),i&&c.done]))[0]};return ne.set(t,o),o}In(e=>({...e,get:(t,n,r)=>Be(t,n)||e.get(t,n,r),has:(t,n)=>!!Be(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fe="@firebase/app",Ne="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new hn("@firebase/app"),Cn="@firebase/app-compat",Dn="@firebase/analytics-compat",kn="@firebase/analytics",On="@firebase/app-check-compat",Bn="@firebase/app-check",Nn="@firebase/auth",Mn="@firebase/auth-compat",Rn="@firebase/database",Ln="@firebase/data-connect",Pn="@firebase/database-compat",$n="@firebase/functions",Fn="@firebase/functions-compat",xn="@firebase/installations",jn="@firebase/installations-compat",Hn="@firebase/messaging",Un="@firebase/messaging-compat",Vn="@firebase/performance",Wn="@firebase/performance-compat",Kn="@firebase/remote-config",zn="@firebase/remote-config-compat",qn="@firebase/storage",Gn="@firebase/storage-compat",Jn="@firebase/firestore",Yn="@firebase/vertexai",Xn="@firebase/firestore-compat",Zn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]",Qn={[fe]:"fire-core",[Cn]:"fire-core-compat",[kn]:"fire-analytics",[Dn]:"fire-analytics-compat",[Bn]:"fire-app-check",[On]:"fire-app-check-compat",[Nn]:"fire-auth",[Mn]:"fire-auth-compat",[Rn]:"fire-rtdb",[Ln]:"fire-data-connect",[Pn]:"fire-rtdb-compat",[$n]:"fire-fn",[Fn]:"fire-fn-compat",[xn]:"fire-iid",[jn]:"fire-iid-compat",[Hn]:"fire-fcm",[Un]:"fire-fcm-compat",[Vn]:"fire-perf",[Wn]:"fire-perf-compat",[Kn]:"fire-rc",[zn]:"fire-rc-compat",[qn]:"fire-gcs",[Gn]:"fire-gcs-compat",[Jn]:"fire-fst",[Xn]:"fire-fst-compat",[Yn]:"fire-vertex","fire-js":"fire-js",[Zn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map,er=new Map,he=new Map;function Me(e,t){try{e.container.addComponent(t)}catch(n){v.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function k(e){const t=e.name;if(he.has(t))return v.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of G.values())Me(n,e);for(const n of er.values())Me(n,e);return!0}function we(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_=new Y("app","Firebase",tr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new A("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}function rt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:pe,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw _.create("bad-app-name",{appName:String(i)});if(n||(n=Ze()),!n)throw _.create("no-options");const o=G.get(i);if(o){if(le(n,o.options)&&le(r,o.config))return o;throw _.create("duplicate-app",{appName:i})}const a=new ln(i);for(const c of he.values())a.addComponent(c);const s=new nr(n,r,a);return G.set(i,s),s}function rr(e=pe){const t=G.get(e);if(!t&&e===pe&&Ze())return rt();if(!t)throw _.create("no-app",{appName:e});return t}function S(e,t,n){var r;let i=(r=Qn[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),v.warn(s.join(" "));return}k(new A(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="firebase-heartbeat-database",or=1,H="firebase-heartbeat-store";let re=null;function it(){return re||(re=W(ir,or,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),re}async function ar(e){try{const n=(await it()).transaction(H),r=await n.objectStore(H).get(ot(e));return await n.done,r}catch(t){if(t instanceof $)v.warn(t.message);else{const n=_.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});v.warn(n.message)}}}async function Re(e,t){try{const r=(await it()).transaction(H,"readwrite");await r.objectStore(H).put(t,ot(e)),await r.done}catch(n){if(n instanceof $)v.warn(n.message);else{const r=_.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});v.warn(r.message)}}}function ot(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1024,cr=30;class lr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ur(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Le();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>cr){const a=fr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){v.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Le(),{heartbeatsToSend:r,unsentEntries:i}=dr(this._heartbeatsCache.heartbeats),o=Xe(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return v.warn(n),""}}}function Le(){return new Date().toISOString().substring(0,10)}function dr(e,t=sr){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Pe(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ur{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qe()?et().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ar(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pe(e){return Xe(JSON.stringify({version:2,heartbeats:e})).length}function fr(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){k(new A("platform-logger",t=>new An(t),"PRIVATE")),k(new A("heartbeat",t=>new lr(t),"PRIVATE")),S(fe,Ne,e),S(fe,Ne,"esm2017"),S("fire-js","")}pr("");var hr="firebase",gr="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */S(hr,gr,"app");const at="@firebase/installations",ye="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=1e4,ct=`w:${ye}`,lt="FIS_v2",mr="https://firebaseinstallations.googleapis.com/v1",br=60*60*1e3,wr="installations",yr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},O=new Y(wr,yr,Ir);function dt(e){return e instanceof $&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut({projectId:e}){return`${mr}/projects/${e}/installations`}function ft(e){return{token:e.token,requestStatus:2,expiresIn:Er(e.expiresIn),creationTime:Date.now()}}async function pt(e,t){const r=(await t.json()).error;return O.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ht({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vr(e,{refreshToken:t}){const n=ht(e);return n.append("Authorization",_r(t)),n}async function gt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Er(e){return Number(e.replace("s","000"))}function _r(e){return`${lt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ut(e),i=ht(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:lt,appId:e.appId,sdkVersion:ct},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await gt(()=>fetch(r,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ft(l.authToken)}}else throw await pt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=/^[cdef][\w-]{21}$/,ge="";function Cr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Dr(e);return Tr.test(n)?n:ge}catch{return ge}}function Dr(e){return Ar(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Map;function wt(e,t){const n=X(e);yt(n,t),kr(n,t)}function yt(e,t){const n=bt.get(e);if(n)for(const r of n)r(t)}function kr(e,t){const n=Or();n&&n.postMessage({key:e,fid:t}),Br()}let D=null;function Or(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=e=>{yt(e.data.key,e.data.fid)}),D}function Br(){bt.size===0&&D&&(D.close(),D=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="firebase-installations-database",Mr=1,B="firebase-installations-store";let ie=null;function Ie(){return ie||(ie=W(Nr,Mr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),ie}async function J(e,t){const n=X(e),i=(await Ie()).transaction(B,"readwrite"),o=i.objectStore(B),a=await o.get(n);return await o.put(t,n),await i.done,(!a||a.fid!==t.fid)&&wt(e,t.fid),t}async function It(e){const t=X(e),r=(await Ie()).transaction(B,"readwrite");await r.objectStore(B).delete(t),await r.done}async function Z(e,t){const n=X(e),i=(await Ie()).transaction(B,"readwrite"),o=i.objectStore(B),a=await o.get(n),s=t(a);return s===void 0?await o.delete(n):await o.put(s,n),await i.done,s&&(!a||a.fid!==s.fid)&&wt(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e){let t;const n=await Z(e.appConfig,r=>{const i=Rr(r),o=Lr(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===ge?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Rr(e){const t=e||{fid:Cr(),registrationStatus:0};return vt(t)}function Lr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(O.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Pr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$r(e)}:{installationEntry:t}}async function Pr(e,t){try{const n=await Sr(e,t);return J(e.appConfig,n)}catch(n){throw dt(n)&&n.customData.serverCode===409?await It(e.appConfig):await J(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function $r(e){let t=await $e(e.appConfig);for(;t.registrationStatus===1;)await mt(100),t=await $e(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ve(e);return r||n}return t}function $e(e){return Z(e,t=>{if(!t)throw O.create("installation-not-found");return vt(t)})}function vt(e){return Fr(e)?{fid:e.fid,registrationStatus:0}:e}function Fr(e){return e.registrationStatus===1&&e.registrationTime+st<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr({appConfig:e,heartbeatServiceProvider:t},n){const r=jr(e,n),i=vr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:ct,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await gt(()=>fetch(r,s));if(c.ok){const l=await c.json();return ft(l)}else throw await pt("Generate Auth Token",c)}function jr(e,{fid:t}){return`${ut(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t=!1){let n;const r=await Z(e.appConfig,o=>{if(!Et(o))throw O.create("not-registered");const a=o.authToken;if(!t&&Vr(a))return o;if(a.requestStatus===1)return n=Hr(e,t),o;{if(!navigator.onLine)throw O.create("app-offline");const s=Kr(o);return n=Ur(e,s),s}});return n?await n:r.authToken}async function Hr(e,t){let n=await Fe(e.appConfig);for(;n.authToken.requestStatus===1;)await mt(100),n=await Fe(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ee(e,t):r}function Fe(e){return Z(e,t=>{if(!Et(t))throw O.create("not-registered");const n=t.authToken;return zr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ur(e,t){try{const n=await xr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await J(e.appConfig,r),n}catch(n){if(dt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await It(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await J(e.appConfig,r)}throw n}}function Et(e){return e!==void 0&&e.registrationStatus===2}function Vr(e){return e.requestStatus===2&&!Wr(e)}function Wr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+br}function Kr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function zr(e){return e.requestStatus===1&&e.requestTime+st<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e){const t=e,{installationEntry:n,registrationPromise:r}=await ve(t);return r?r.catch(console.error):Ee(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(e,t=!1){const n=e;return await Jr(n),(await Ee(n,t)).token}async function Jr(e){const{registrationPromise:t}=await ve(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){if(!e||!e.options)throw oe("App Configuration");if(!e.name)throw oe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw oe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function oe(e){return O.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="installations",Xr="installations-internal",Zr=e=>{const t=e.getProvider("app").getImmediate(),n=Yr(t),r=we(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Qr=e=>{const t=e.getProvider("app").getImmediate(),n=we(t,_t).getImmediate();return{getId:()=>qr(n),getToken:i=>Gr(n,i)}};function ei(){k(new A(_t,Zr,"PUBLIC")),k(new A(Xr,Qr,"PRIVATE"))}ei();S(at,ye);S(at,ye,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="/firebase-messaging-sw.js",ni="/firebase-cloud-messaging-push-scope",St="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ri="https://fcmregistrations.googleapis.com/v1",At="google.c.a.c_id",ii="google.c.a.c_l",oi="google.c.a.ts",ai="google.c.a.e",xe=1e4;var je;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(je||(je={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var U;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(U||(U={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function si(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="fcm_token_details_db",ci=5,He="fcm_token_object_Store";async function li(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ae))return null;let t=null;return(await W(ae,ci,{upgrade:async(r,i,o,a)=>{var s;if(i<2||!r.objectStoreNames.contains(He))return;const c=a.objectStore(He),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(i===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(s=u.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:y(u.vapidKey)}}}else if(i===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:y(u.auth),p256dh:y(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:y(u.vapidKey)}}}else if(i===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:y(u.auth),p256dh:y(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:y(u.vapidKey)}}}}}})).close(),await te(ae),await te("fcm_vapid_details_db"),await te("undefined"),di(t)?t:null}function di(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="firebase-messaging-database",fi=1,V="firebase-messaging-store";let se=null;function Tt(){return se||(se=W(ui,fi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}})),se}async function pi(e){const t=Ct(e),r=await(await Tt()).transaction(V).objectStore(V).get(t);if(r)return r;{const i=await li(e.appConfig.senderId);if(i)return await _e(e,i),i}}async function _e(e,t){const n=Ct(e),i=(await Tt()).transaction(V,"readwrite");return await i.objectStore(V).put(t,n),await i.done,t}function Ct({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},m=new Y("messaging","Messaging",hi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e,t){const n=await Ae(e),r=Dt(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Se(e.appConfig),i)).json()}catch(a){throw m.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw m.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw m.create("token-subscribe-no-token");return o.token}async function mi(e,t){const n=await Ae(e),r=Dt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Se(e.appConfig)}/${t.token}`,i)).json()}catch(a){throw m.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw m.create("token-update-failed",{errorInfo:a})}if(!o.token)throw m.create("token-update-no-token");return o.token}async function bi(e,t){const r={method:"DELETE",headers:await Ae(e)};try{const o=await(await fetch(`${Se(e.appConfig)}/${t}`,r)).json();if(o.error){const a=o.error.message;throw m.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw m.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Se({projectId:e}){return`${ri}/projects/${e}/registrations`}async function Ae({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Dt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==St&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=7*24*60*60*1e3;async function yi(e){const t=await vi(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},r=await pi(e.firebaseDependencies);if(r){if(Ei(r.subscriptionOptions,n))return Date.now()>=r.createTime+wi?Ii(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await bi(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Ue(e.firebaseDependencies,n)}else return Ue(e.firebaseDependencies,n)}async function Ii(e,t){try{const n=await mi(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await _e(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ue(e,t){const r={token:await gi(e,t),createTime:Date.now(),subscriptionOptions:t};return await _e(e,r),r.token}async function vi(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:si(t)})}function Ei(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return _i(t,e),Si(t,e),Ai(t,e),t}function _i(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const o=t.notification.icon;o&&(e.notification.icon=o)}function Si(e,t){t.data&&(e.data=t.data)}function Ai(e,t){var n,r,i,o,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){return typeof e=="object"&&!!e&&At in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){if(!e||!e.options)throw ce("App Configuration Object");if(!e.name)throw ce("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ce(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ce(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Ci(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(e){try{e.swRegistration=await navigator.serviceWorker.register(ti,{scope:ni}),e.swRegistration.update().catch(()=>{}),await Oi(e.swRegistration)}catch(t){throw m.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Oi(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${xe} ms`)),xe),i=e.installing||e.waiting;e.active?(clearTimeout(r),t()):i?i.onstatechange=o=>{var a;((a=o.target)===null||a===void 0?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t){if(!t&&!e.swRegistration&&await ki(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw m.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=St)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t){if(!navigator)throw m.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw m.create("permission-blocked");return await Ni(e,t==null?void 0:t.vapidKey),await Bi(e,t==null?void 0:t.serviceWorkerRegistration),yi(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e,t,n){const r=Ri(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[At],message_name:n[ii],message_time:n[oi],message_device_time:Math.floor(Date.now()/1e3)})}function Ri(e){switch(e){case U.NOTIFICATION_CLICKED:return"notification_open";case U.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===U.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ve(n)):e.onMessageHandler.next(Ve(n)));const r=n.data;Ti(r)&&r[ai]==="1"&&await Mi(e,n.messageType,r)}const We="@firebase/messaging",Ke="0.12.17";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=e=>{const t=new Di(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Li(t,n)),t},$i=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>kt(t,r)}};function Fi(){k(new A("messaging",Pi,"PUBLIC")),k(new A("messaging-internal",$i,"PRIVATE")),S(We,Ke),S(We,Ke,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(){try{await et()}catch{return!1}return typeof window<"u"&&Qe()&&tn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t){if(!navigator)throw m.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e=rr()){return xi().then(t=>{if(!t)throw m.create("unsupported-browser")},t=>{throw m.create("indexed-db-unsupported")}),we(me(e),"messaging").getImmediate()}async function Ui(e,t){return e=me(e),kt(e,t)}function Vi(e,t){return e=me(e),ji(e,t)}Fi();const Wi={apiKey:"AIzaSyAGHLS1hwXIu7v8EYGHqc320wdwmfZpkj0",authDomain:"pwa-g9-2025.firebaseapp.com",projectId:"pwa-g9-2025",storageBucket:"pwa-g9-2025.firebasestorage.app",messagingSenderId:"619074453275",appId:"1:619074453275:web:853ca8640be57379015dbe",measurementId:"G-ED9XNMQSBZ"},Ki=rt(Wi),Ot=Hi(Ki);async function zi(){try{const e=await navigator.serviceWorker.register("/2025-1-s1-g9-t2/firebase-messaging-sw.js"),t=await Ui(Ot,{vapidKey:"BK5dG7X9LrsGL2toqXYmZ2gaGc_V78EnHog8ZiggCB3gzL2iIguzVouD1coi_24mJQT1HHfIcXCWsZ3iEqIf6JY",serviceWorkerRegistration:e});console.log("Token de cliente:",t)}catch(e){console.error("No se pudo obtener token:",e)}}function qi(){Vi(Ot,e=>{console.log("Notificación en primer plano:",e),Notification.permission==="granted"&&new Notification(e.notification.title,{body:e.notification.body,icon:"./iconLogo.png"})})}const M=W("image-editor-db",1,{upgrade(e){if(e.objectStoreNames.contains("originalImages")||e.createObjectStore("originalImages",{keyPath:"id",autoIncrement:!0}).createIndex("timestamp","timestamp"),!e.objectStoreNames.contains("imageFilters")){const t=e.createObjectStore("imageFilters",{keyPath:"id",autoIncrement:!0});t.createIndex("imageId","imageId"),t.createIndex("timestamp","timestamp")}}});async function Gi(e){try{const t=await M;if(!t)throw new Error("Failed to open IndexedDB.");const n=await t.add("originalImages",{image:e,timestamp:Date.now()});return console.log("Image saved with ID:",n),n}catch(t){throw console.error("Error in saveOriginalImage:",t),t}}async function Ji(e,t=[]){return await(await M).add("imageFilters",{imageId:e,filters:t,timestamp:Date.now()})}async function Yi(){const e=await M;let t=await e.getAll("originalImages");return t.sort((r,i)=>i.timestamp-r.timestamp),await Promise.all(t.map(async r=>{const i=await e.getAllFromIndex("imageFilters","imageId",r.id);return{image:r,filters:i.length>0?i[0].filters:[]}}))}async function ze(e,t){try{const i=(await M).transaction(["imageFilters"],"readwrite").objectStore("imageFilters"),a=(await i.getAll()).find(s=>s.imageId===e);a?(a.filters=t,await i.put(a),console.log(`Filters updated successfully for image ID ${e}`),console.log(t)):(await i.add({imageId:e,filters:t}),console.log(`Created new filter entry for image ID ${e}`))}catch(n){throw console.error("Error in updateImageFilters:",n),n}}async function Xi(e){const n=(await M).transaction("originalImages","readwrite");await n.objectStore("originalImages").delete(e),await n.done}async function Zi(){const t=(await M).transaction("originalImages","readwrite");await t.objectStore("originalImages").clear(),await t.done}async function Qi(){return await(await M).count("originalImages")===0}async function eo(){await Ge();const e=document.getElementById("imageInput"),t={resize:document.getElementById("resizeButton"),grayscale:document.getElementById("grayscaleButton"),blur:document.getElementById("blurButton"),flip:document.getElementById("flipButton"),pixelate:document.getElementById("pixelateButton"),invert:document.getElementById("invertButton"),download:document.getElementById("downloadButton"),reset:document.getElementById("resetButton")};let n=null,r=null,i=null,o=[];e.addEventListener("change",async()=>{const d=e.files[0];if(d){const g=await d.arrayBuffer();r=new Uint8Array(g),n=new Uint8Array(g),o=[];const h=await Gi(new Blob([r],{type:d.type}));i=h,Ji(h,o),l(n),s("reset")}});const a=async(d=null)=>{if(d){let{image:g,filters:h}=d;const E=await g.image.arrayBuffer();d=new Uint8Array(E);for(const w of h)d=c(d,w);return d}else{if(!r)return;console.log(r),n=new Uint8Array(r),console.log(n),console.log(o);for(const g of o)n=await c(n,g),console.log(g,n);return l(n),n}},s=d=>{if(n){if(d=="reset"){o=[],ze(i,[]),n=new Uint8Array(r),l(n);return}o.includes(d)?o.splice(o.indexOf(d),1):o.push(d),ze(i,o),a()}},c=(d,g)=>{switch(g){case"resize":return Lt(d,200,200);case"grayscale":return Pt(d);case"blur":return $t(d,5);case"flip":return Ft(d);case"pixelate":return xt(d,8);case"invert":return jt(d);default:return console.error(`Unknown filter: ${g}`),d}};t.resize.addEventListener("click",()=>s("resize")),t.grayscale.addEventListener("click",()=>s("grayscale")),t.blur.addEventListener("click",()=>s("blur")),t.flip.addEventListener("click",()=>s("flip")),t.pixelate.addEventListener("click",()=>s("pixelate")),t.invert.addEventListener("click",()=>s("invert")),t.reset.addEventListener("click",()=>s("reset")),t.download.addEventListener("click",()=>{n&&(u(n,"processed_image.png"),Notification.permission==="granted"?new Notification("Descarga iniciada!! ;) ",{body:"La imagen procesada se está descargando.",icon:"/camIcon192.png"}):console.log("Permiso de notificación no otorgado :("))});function l(d,g="image/png"){const h=document.getElementById("outputImage");if(!d||d.length===0){h.style.display="none",h.src="";return}const E=new Blob([d],{type:g}),w=URL.createObjectURL(E);h.src=w,h.style.display="block"}function u(d,g){console.log("Downloading image. Bytes:",d.length);const h=new Blob([d],{type:"image/png"}),E=URL.createObjectURL(h),w=document.createElement("a");w.href=E,w.download=g,w.click(),URL.revokeObjectURL(E)}window.addEventListener("load",()=>{setTimeout(()=>{document.getElementById("splash-screen").style.display="none"},1e3)}),"serviceWorker"in navigator?(console.log("Service Worker is supported in this browser"),navigator.serviceWorker.register("/2025-1-s1-g9-t2/sw.js").then(d=>console.log("Service Worker Registered",d)).catch(d=>console.error("Error in SW register",d))):console.log("Service Worker not supported in this browser");const T=document.getElementById("viewUploadsButton"),b=document.getElementById("uploadsModal"),R=document.getElementById("closeUploadsModal");T.addEventListener("click",()=>{b.classList.remove("hidden"),F()}),R.addEventListener("click",()=>{b.classList.add("hidden")}),window.addEventListener("click",d=>{d.target===b&&b.classList.add("hidden")});async function F(){const d=document.getElementById("uploadsGallery");d.innerHTML="";const g=await Yi();for(const h of g){let{filters:E}=h,{id:w}=h.image,Te=await a(h);const Nt=new Blob([Te],{type:"image/png"}),Mt=URL.createObjectURL(Nt),x=document.createElement("div");x.className="thumbnail flex flex-col items-center";const K=document.createElement("img");K.src=Mt,K.alt="Uploaded image",K.className="w-full rounded";const z=document.createElement("button");z.textContent="Load",z.className="mt-2 bg-blue-500 text-white px-3 py-1 rounded",z.onclick=async()=>{i=w,console.log("OG",h.image.image.arrayBuffer()),r=new Uint8Array(await h.image.image.arrayBuffer()),n=new Uint8Array(Te),console.log(n),o=E,l(n),setTimeout(()=>{b.classList.add("hidden")},50)};const q=document.createElement("button");q.innerHTML="🗑️",q.className="absolute top-1 right-1 text-red-500 hover:scale-110 transition",q.onclick=async()=>{await Xi(w),i===w&&(e.value="",n=null,r=null,i=null,o=[]),Qi().then(Rt=>{Rt&&b.classList.add("hidden")}),await F(),l(n)},x.appendChild(q),x.appendChild(K),x.appendChild(z),d.appendChild(x)}}const Bt=document.getElementById("clearImages");Bt.onclick=async()=>{Zi(),e.value="",n=null,r=null,i=null,o=[],setTimeout(()=>{b.classList.add("hidden")},50),l(n)},await F()}zi();qi();eo();
