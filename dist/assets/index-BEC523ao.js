(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();let f,O=null;function Me(){return(O===null||O.byteLength===0)&&(O=new Uint8Array(f.memory.buffer)),O}let A=0;function T(e,t){const n=t(e.length*1,1)>>>0;return Me().set(e,n/1),A=e.length,n}function D(e,t){return e=e>>>0,Me().subarray(e/1,e/1+t)}function yt(e,t,n){const r=T(e,f.__wbindgen_malloc),i=A,o=f.resize(r,i,t,n);var a=D(o[0],o[1]).slice();return f.__wbindgen_free(o[0],o[1]*1,1),a}function _t(e){const t=T(e,f.__wbindgen_malloc),n=A,r=f.grayscale(t,n);var i=D(r[0],r[1]).slice();return f.__wbindgen_free(r[0],r[1]*1,1),i}function It(e,t){const n=T(e,f.__wbindgen_malloc),r=A,i=f.blur(n,r,t);var o=D(i[0],i[1]).slice();return f.__wbindgen_free(i[0],i[1]*1,1),o}function vt(e){const t=T(e,f.__wbindgen_malloc),n=A,r=f.flip_horizontal(t,n);var i=D(r[0],r[1]).slice();return f.__wbindgen_free(r[0],r[1]*1,1),i}function Et(e,t){const n=T(e,f.__wbindgen_malloc),r=A,i=f.pixelate(n,r,t);var o=D(i[0],i[1]).slice();return f.__wbindgen_free(i[0],i[1]*1,1),o}function St(e){const t=T(e,f.__wbindgen_malloc),n=A,r=f.invert(t,n);var i=D(r[0],r[1]).slice();return f.__wbindgen_free(r[0],r[1]*1,1),i}async function At(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Tt(){const e={};return e.wbg={},e.wbg.__wbindgen_init_externref_table=function(){const t=f.__wbindgen_export_0,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)},e}function Dt(e,t){return f=e.exports,Pe.__wbindgen_wasm_module=t,O=null,f.__wbindgen_start(),f}async function Pe(e){if(f!==void 0)return f;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/assets/img_bg-JqkpOZBO.wasm",import.meta.url));const t=Tt();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await At(await e,t);return Dt(n,r)}const Ct=()=>{};var ge={};/**
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
 */const Le=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},kt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},$e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,d=c?e[i+2]:0,l=o>>2,k=(o&3)<<4|s>>4;let M=(s&15)<<2|d>>6,P=d&63;c||(P=64,a||(M=64)),r.push(n[l],n[k],n[M],n[P])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Le(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const k=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||d==null||k==null)throw new Ot;const M=o<<2|s>>4;if(r.push(M),d!==64){const P=s<<4&240|d>>2;if(r.push(P),k!==64){const wt=d<<6&192|k;r.push(wt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ot extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bt=function(e){const t=Le(e);return $e.encodeByteArray(t,!0)},Fe=function(e){return Bt(e).replace(/\./g,"")},Nt=function(e){try{return $e.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mt=()=>Rt().__FIREBASE_DEFAULTS__,Pt=()=>{if(typeof process>"u"||typeof ge>"u")return;const e=ge.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Lt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nt(e[1]);return t&&JSON.parse(t)},$t=()=>{try{return Ct()||Mt()||Pt()||Lt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},He=()=>{var e;return(e=$t())===null||e===void 0?void 0:e.config};/**
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
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function je(){try{return typeof indexedDB=="object"}catch{return!1}}function xe(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ht(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const jt="FirebaseError";class C extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=jt,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?xt(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new C(i,s,r)}}function xt(e,t){return e.replace(Vt,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Vt=/\{\$([^}]+)}/g;function Z(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(me(o)&&me(a)){if(!Z(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function me(e){return e!==null&&typeof e=="object"}/**
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
 */function oe(e){return e&&e._delegate?e._delegate:e}class y{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const _="[DEFAULT]";/**
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
 */class Ut{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ft;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kt(t))try{this.getOrInitializeService({instanceIdentifier:_})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=_){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_){return this.instances.has(t)}getOptions(t=_){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=_){return this.component?this.component.multipleInstances?t:_:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wt(e){return e===_?void 0:e}function Kt(e){return e.instantiationMode==="EAGER"}/**
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
 */class zt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ut(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const qt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Gt=u.INFO,Jt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Yt=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Jt[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xt{constructor(t){this.name=t,this._logLevel=Gt,this._logHandler=Yt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const Zt=(e,t)=>t.some(n=>e instanceof n);let be,we;function Qt(){return be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function en(){return we||(we=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ve=new WeakMap,Q=new WeakMap,Ue=new WeakMap,V=new WeakMap,ae=new WeakMap;function tn(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(g(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ve.set(n,e)}).catch(()=>{}),ae.set(t,e),t}function nn(e){if(Q.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Q.set(e,t)}let ee={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Q.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ue.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rn(e){ee=e(ee)}function on(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(U(this),t,...n);return Ue.set(r,t.sort?t.sort():[t]),g(r)}:en().includes(e)?function(...t){return e.apply(U(this),t),g(Ve.get(this))}:function(...t){return g(e.apply(U(this),t))}}function an(e){return typeof e=="function"?on(e):(e instanceof IDBTransaction&&nn(e),Zt(e,Qt())?new Proxy(e,ee):e)}function g(e){if(e instanceof IDBRequest)return tn(e);if(V.has(e))return V.get(e);const t=an(e);return t!==e&&(V.set(e,t),ae.set(t,e)),t}const U=e=>ae.get(e);function H(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=g(a);return r&&a.addEventListener("upgradeneeded",c=>{r(g(a.result),c.oldVersion,c.newVersion,g(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),s}function W(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),g(n).then(()=>{})}const sn=["get","getKey","getAll","getAllKeys","count"],cn=["put","add","delete","clear"],K=new Map;function ye(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(K.get(t))return K.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sn.includes(n)))return;const o=async function(a,...s){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(s.shift())),(await Promise.all([d[n](...s),i&&c.done]))[0]};return K.set(t,o),o}rn(e=>({...e,get:(t,n,r)=>ye(t,n)||e.get(t,n,r),has:(t,n)=>!!ye(t,n)||e.has(t,n)}));/**
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
 */class ln{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const te="@firebase/app",_e="0.11.4";/**
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
 */const m=new Xt("@firebase/app"),un="@firebase/app-compat",fn="@firebase/analytics-compat",hn="@firebase/analytics",pn="@firebase/app-check-compat",gn="@firebase/app-check",mn="@firebase/auth",bn="@firebase/auth-compat",wn="@firebase/database",yn="@firebase/data-connect",_n="@firebase/database-compat",In="@firebase/functions",vn="@firebase/functions-compat",En="@firebase/installations",Sn="@firebase/installations-compat",An="@firebase/messaging",Tn="@firebase/messaging-compat",Dn="@firebase/performance",Cn="@firebase/performance-compat",kn="@firebase/remote-config",On="@firebase/remote-config-compat",Bn="@firebase/storage",Nn="@firebase/storage-compat",Rn="@firebase/firestore",Mn="@firebase/vertexai",Pn="@firebase/firestore-compat",Ln="firebase";/**
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
 */const ne="[DEFAULT]",$n={[te]:"fire-core",[un]:"fire-core-compat",[hn]:"fire-analytics",[fn]:"fire-analytics-compat",[gn]:"fire-app-check",[pn]:"fire-app-check-compat",[mn]:"fire-auth",[bn]:"fire-auth-compat",[wn]:"fire-rtdb",[yn]:"fire-data-connect",[_n]:"fire-rtdb-compat",[In]:"fire-fn",[vn]:"fire-fn-compat",[En]:"fire-iid",[Sn]:"fire-iid-compat",[An]:"fire-fcm",[Tn]:"fire-fcm-compat",[Dn]:"fire-perf",[Cn]:"fire-perf-compat",[kn]:"fire-rc",[On]:"fire-rc-compat",[Bn]:"fire-gcs",[Nn]:"fire-gcs-compat",[Rn]:"fire-fst",[Pn]:"fire-fst-compat",[Mn]:"fire-vertex","fire-js":"fire-js",[Ln]:"fire-js-all"};/**
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
 */const L=new Map,Fn=new Map,re=new Map;function Ie(e,t){try{e.container.addComponent(t)}catch(n){m.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(re.has(t))return m.debug(`There were multiple attempts to register component ${t}.`),!1;re.set(t,e);for(const n of L.values())Ie(n,e);for(const n of Fn.values())Ie(n,e);return!0}function se(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Hn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},b=new F("app","Firebase",Hn);/**
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
 */class jn{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}function We(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ne,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw b.create("bad-app-name",{appName:String(i)});if(n||(n=He()),!n)throw b.create("no-options");const o=L.get(i);if(o){if(Z(n,o.options)&&Z(r,o.config))return o;throw b.create("duplicate-app",{appName:i})}const a=new zt(i);for(const c of re.values())a.addComponent(c);const s=new jn(n,r,a);return L.set(i,s),s}function xn(e=ne){const t=L.get(e);if(!t&&e===ne&&He())return We();if(!t)throw b.create("no-app",{appName:e});return t}function w(e,t,n){var r;let i=(r=$n[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),m.warn(s.join(" "));return}v(new y(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Vn="firebase-heartbeat-database",Un=1,B="firebase-heartbeat-store";let z=null;function Ke(){return z||(z=H(Vn,Un,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(B)}catch(n){console.warn(n)}}}}).catch(e=>{throw b.create("idb-open",{originalErrorMessage:e.message})})),z}async function Wn(e){try{const n=(await Ke()).transaction(B),r=await n.objectStore(B).get(ze(e));return await n.done,r}catch(t){if(t instanceof C)m.warn(t.message);else{const n=b.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});m.warn(n.message)}}}async function ve(e,t){try{const r=(await Ke()).transaction(B,"readwrite");await r.objectStore(B).put(t,ze(e)),await r.done}catch(n){if(n instanceof C)m.warn(n.message);else{const r=b.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});m.warn(r.message)}}}function ze(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Kn=1024,zn=30;class qn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ee();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>zn){const a=Yn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){m.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ee(),{heartbeatsToSend:r,unsentEntries:i}=Gn(this._heartbeatsCache.heartbeats),o=Fe(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return m.warn(n),""}}}function Ee(){return new Date().toISOString().substring(0,10)}function Gn(e,t=Kn){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Se(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Se(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return je()?xe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Se(e){return Fe(JSON.stringify({version:2,heartbeats:e})).length}function Yn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Xn(e){v(new y("platform-logger",t=>new ln(t),"PRIVATE")),v(new y("heartbeat",t=>new qn(t),"PRIVATE")),w(te,_e,e),w(te,_e,"esm2017"),w("fire-js","")}Xn("");var Zn="firebase",Qn="11.6.0";/**
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
 */w(Zn,Qn,"app");const qe="@firebase/installations",ce="0.6.13";/**
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
 */const Ge=1e4,Je=`w:${ce}`,Ye="FIS_v2",er="https://firebaseinstallations.googleapis.com/v1",tr=60*60*1e3,nr="installations",rr="Installations";/**
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
 */const ir={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},E=new F(nr,rr,ir);function Xe(e){return e instanceof C&&e.code.includes("request-failed")}/**
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
 */function Ze({projectId:e}){return`${er}/projects/${e}/installations`}function Qe(e){return{token:e.token,requestStatus:2,expiresIn:ar(e.expiresIn),creationTime:Date.now()}}async function et(e,t){const r=(await t.json()).error;return E.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function or(e,{refreshToken:t}){const n=tt(e);return n.append("Authorization",sr(t)),n}async function nt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ar(e){return Number(e.replace("s","000"))}function sr(e){return`${Ye} ${e}`}/**
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
 */async function cr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ze(e),i=tt(e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:Ye,appId:e.appId,sdkVersion:Je},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await nt(()=>fetch(r,s));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Qe(d.authToken)}}else throw await et("Create Installation",c)}/**
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
 */function rt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function lr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dr=/^[cdef][\w-]{21}$/,ie="";function ur(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fr(e);return dr.test(n)?n:ie}catch{return ie}}function fr(e){return lr(e).substr(0,22)}/**
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
 */function j(e){return`${e.appName}!${e.appId}`}/**
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
 */const it=new Map;function ot(e,t){const n=j(e);at(n,t),hr(n,t)}function at(e,t){const n=it.get(e);if(n)for(const r of n)r(t)}function hr(e,t){const n=pr();n&&n.postMessage({key:e,fid:t}),gr()}let I=null;function pr(){return!I&&"BroadcastChannel"in self&&(I=new BroadcastChannel("[Firebase] FID Change"),I.onmessage=e=>{at(e.data.key,e.data.fid)}),I}function gr(){it.size===0&&I&&(I.close(),I=null)}/**
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
 */const mr="firebase-installations-database",br=1,S="firebase-installations-store";let q=null;function le(){return q||(q=H(mr,br,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(S)}}})),q}async function $(e,t){const n=j(e),i=(await le()).transaction(S,"readwrite"),o=i.objectStore(S),a=await o.get(n);return await o.put(t,n),await i.done,(!a||a.fid!==t.fid)&&ot(e,t.fid),t}async function st(e){const t=j(e),r=(await le()).transaction(S,"readwrite");await r.objectStore(S).delete(t),await r.done}async function x(e,t){const n=j(e),i=(await le()).transaction(S,"readwrite"),o=i.objectStore(S),a=await o.get(n),s=t(a);return s===void 0?await o.delete(n):await o.put(s,n),await i.done,s&&(!a||a.fid!==s.fid)&&ot(e,s.fid),s}/**
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
 */async function de(e){let t;const n=await x(e.appConfig,r=>{const i=wr(r),o=yr(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===ie?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function wr(e){const t=e||{fid:ur(),registrationStatus:0};return ct(t)}function yr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(E.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_r(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ir(e)}:{installationEntry:t}}async function _r(e,t){try{const n=await cr(e,t);return $(e.appConfig,n)}catch(n){throw Xe(n)&&n.customData.serverCode===409?await st(e.appConfig):await $(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ir(e){let t=await Ae(e.appConfig);for(;t.registrationStatus===1;)await rt(100),t=await Ae(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await de(e);return r||n}return t}function Ae(e){return x(e,t=>{if(!t)throw E.create("installation-not-found");return ct(t)})}function ct(e){return vr(e)?{fid:e.fid,registrationStatus:0}:e}function vr(e){return e.registrationStatus===1&&e.registrationTime+Ge<Date.now()}/**
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
 */async function Er({appConfig:e,heartbeatServiceProvider:t},n){const r=Sr(e,n),i=or(e,n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Je,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await nt(()=>fetch(r,s));if(c.ok){const d=await c.json();return Qe(d)}else throw await et("Generate Auth Token",c)}function Sr(e,{fid:t}){return`${Ze(e)}/${t}/authTokens:generate`}/**
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
 */async function ue(e,t=!1){let n;const r=await x(e.appConfig,o=>{if(!lt(o))throw E.create("not-registered");const a=o.authToken;if(!t&&Dr(a))return o;if(a.requestStatus===1)return n=Ar(e,t),o;{if(!navigator.onLine)throw E.create("app-offline");const s=kr(o);return n=Tr(e,s),s}});return n?await n:r.authToken}async function Ar(e,t){let n=await Te(e.appConfig);for(;n.authToken.requestStatus===1;)await rt(100),n=await Te(e.appConfig);const r=n.authToken;return r.requestStatus===0?ue(e,t):r}function Te(e){return x(e,t=>{if(!lt(t))throw E.create("not-registered");const n=t.authToken;return Or(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tr(e,t){try{const n=await Er(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await $(e.appConfig,r),n}catch(n){if(Xe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await st(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await $(e.appConfig,r)}throw n}}function lt(e){return e!==void 0&&e.registrationStatus===2}function Dr(e){return e.requestStatus===2&&!Cr(e)}function Cr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tr}function kr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Or(e){return e.requestStatus===1&&e.requestTime+Ge<Date.now()}/**
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
 */async function Br(e){const t=e,{installationEntry:n,registrationPromise:r}=await de(t);return r?r.catch(console.error):ue(t).catch(console.error),n.fid}/**
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
 */async function Nr(e,t=!1){const n=e;return await Rr(n),(await ue(n,t)).token}async function Rr(e){const{registrationPromise:t}=await de(e);t&&await t}/**
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
 */function Mr(e){if(!e||!e.options)throw G("App Configuration");if(!e.name)throw G("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw G(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function G(e){return E.create("missing-app-config-values",{valueName:e})}/**
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
 */const dt="installations",Pr="installations-internal",Lr=e=>{const t=e.getProvider("app").getImmediate(),n=Mr(t),r=se(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$r=e=>{const t=e.getProvider("app").getImmediate(),n=se(t,dt).getImmediate();return{getId:()=>Br(n),getToken:i=>Nr(n,i)}};function Fr(){v(new y(dt,Lr,"PUBLIC")),v(new y(Pr,$r,"PRIVATE"))}Fr();w(qe,ce);w(qe,ce,"esm2017");/**
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
 */const Hr="/firebase-messaging-sw.js",jr="/firebase-cloud-messaging-push-scope",ut="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xr="https://fcmregistrations.googleapis.com/v1",ft="google.c.a.c_id",Vr="google.c.a.c_l",Ur="google.c.a.ts",Wr="google.c.a.e",De=1e4;var Ce;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ce||(Ce={}));/**
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
 */var N;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(N||(N={}));/**
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
 */function p(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Kr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
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
 */const J="fcm_token_details_db",zr=5,ke="fcm_token_object_Store";async function qr(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(J))return null;let t=null;return(await H(J,zr,{upgrade:async(r,i,o,a)=>{var s;if(i<2||!r.objectStoreNames.contains(ke))return;const c=a.objectStore(ke),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(i===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(s=l.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:p(l.vapidKey)}}}else if(i===3){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:p(l.auth),p256dh:p(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:p(l.vapidKey)}}}else if(i===4){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:p(l.auth),p256dh:p(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:p(l.vapidKey)}}}}}})).close(),await W(J),await W("fcm_vapid_details_db"),await W("undefined"),Gr(t)?t:null}function Gr(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Jr="firebase-messaging-database",Yr=1,R="firebase-messaging-store";let Y=null;function ht(){return Y||(Y=H(Jr,Yr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(R)}}})),Y}async function Xr(e){const t=pt(e),r=await(await ht()).transaction(R).objectStore(R).get(t);if(r)return r;{const i=await qr(e.appConfig.senderId);if(i)return await fe(e,i),i}}async function fe(e,t){const n=pt(e),i=(await ht()).transaction(R,"readwrite");return await i.objectStore(R).put(t,n),await i.done,t}function pt({appConfig:e}){return e.appId}/**
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
 */const Zr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},h=new F("messaging","Messaging",Zr);/**
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
 */async function Qr(e,t){const n=await pe(e),r=gt(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(he(e.appConfig),i)).json()}catch(a){throw h.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw h.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw h.create("token-subscribe-no-token");return o.token}async function ei(e,t){const n=await pe(e),r=gt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${he(e.appConfig)}/${t.token}`,i)).json()}catch(a){throw h.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw h.create("token-update-failed",{errorInfo:a})}if(!o.token)throw h.create("token-update-no-token");return o.token}async function ti(e,t){const r={method:"DELETE",headers:await pe(e)};try{const o=await(await fetch(`${he(e.appConfig)}/${t}`,r)).json();if(o.error){const a=o.error.message;throw h.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw h.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function he({projectId:e}){return`${xr}/projects/${e}/registrations`}async function pe({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==ut&&(i.web.applicationPubKey=r),i}/**
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
 */const ni=7*24*60*60*1e3;async function ri(e){const t=await oi(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:p(t.getKey("auth")),p256dh:p(t.getKey("p256dh"))},r=await Xr(e.firebaseDependencies);if(r){if(ai(r.subscriptionOptions,n))return Date.now()>=r.createTime+ni?ii(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ti(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Oe(e.firebaseDependencies,n)}else return Oe(e.firebaseDependencies,n)}async function ii(e,t){try{const n=await ei(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await fe(e.firebaseDependencies,r),n}catch(n){throw n}}async function Oe(e,t){const r={token:await Qr(e,t),createTime:Date.now(),subscriptionOptions:t};return await fe(e,r),r.token}async function oi(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Kr(t)})}function ai(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}/**
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
 */function Be(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return si(t,e),ci(t,e),li(t,e),t}function si(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const o=t.notification.icon;o&&(e.notification.icon=o)}function ci(e,t){t.data&&(e.data=t.data)}function li(e,t){var n,r,i,o,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function di(e){return typeof e=="object"&&!!e&&ft in e}/**
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
 */function ui(e){if(!e||!e.options)throw X("App Configuration Object");if(!e.name)throw X("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw X(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function X(e){return h.create("missing-app-config-values",{valueName:e})}/**
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
 */class fi{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=ui(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function hi(e){try{e.swRegistration=await navigator.serviceWorker.register(Hr,{scope:jr}),e.swRegistration.update().catch(()=>{}),await pi(e.swRegistration)}catch(t){throw h.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function pi(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${De} ms`)),De),i=e.installing||e.waiting;e.active?(clearTimeout(r),t()):i?i.onstatechange=o=>{var a;((a=o.target)===null||a===void 0?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function gi(e,t){if(!t&&!e.swRegistration&&await hi(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw h.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function mi(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ut)}/**
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
 */async function mt(e,t){if(!navigator)throw h.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw h.create("permission-blocked");return await mi(e,t==null?void 0:t.vapidKey),await gi(e,t==null?void 0:t.serviceWorkerRegistration),ri(e)}/**
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
 */async function bi(e,t,n){const r=wi(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ft],message_name:n[Vr],message_time:n[Ur],message_device_time:Math.floor(Date.now()/1e3)})}function wi(e){switch(e){case N.NOTIFICATION_CLICKED:return"notification_open";case N.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function yi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===N.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Be(n)):e.onMessageHandler.next(Be(n)));const r=n.data;di(r)&&r[Wr]==="1"&&await bi(e,n.messageType,r)}const Ne="@firebase/messaging",Re="0.12.17";/**
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
 */const _i=e=>{const t=new fi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yi(t,n)),t},Ii=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>mt(t,r)}};function vi(){v(new y("messaging",_i,"PUBLIC")),v(new y("messaging-internal",Ii,"PRIVATE")),w(Ne,Re),w(Ne,Re,"esm2017")}/**
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
 */async function Ei(){try{await xe()}catch{return!1}return typeof window<"u"&&je()&&Ht()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Si(e,t){if(!navigator)throw h.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function Ai(e=xn()){return Ei().then(t=>{if(!t)throw h.create("unsupported-browser")},t=>{throw h.create("indexed-db-unsupported")}),se(oe(e),"messaging").getImmediate()}async function Ti(e,t){return e=oe(e),mt(e,t)}function Di(e,t){return e=oe(e),Si(e,t)}vi();const Ci={apiKey:"AIzaSyAGHLS1hwXIu7v8EYGHqc320wdwmfZpkj0",authDomain:"pwa-g9-2025.firebaseapp.com",projectId:"pwa-g9-2025",storageBucket:"pwa-g9-2025.firebasestorage.app",messagingSenderId:"619074453275",appId:"1:619074453275:web:853ca8640be57379015dbe",measurementId:"G-ED9XNMQSBZ"},ki=We(Ci),bt=Ai(ki);async function Oi(){try{const e=await Ti(bt,{vapidKey:"BK5dG7X9LrsGL2toqXYmZ2gaGc_V78EnHog8ZiggCB3gzL2iIguzVouD1coi_24mJQT1HHfIcXCWsZ3iEqIf6JY"});console.log("Token de cliente:",e)}catch(e){console.error("No se pudo obtener token:",e)}}function Bi(){Di(bt,e=>{console.log("Notificación en primer plano:",e),Notification.permission==="granted"&&new Notification(e.notification.title,{body:e.notification.body,icon:"/iconLogo.png"})})}async function Ni(){await Pe();const e=document.getElementById("imageInput"),t={resize:document.getElementById("resizeButton"),grayscale:document.getElementById("grayscaleButton"),blur:document.getElementById("blurButton"),flip:document.getElementById("flipButton"),pixelate:document.getElementById("pixelateButton"),invert:document.getElementById("invertButton"),download:document.getElementById("downloadButton"),reset:document.getElementById("resetButton")};let n=null,r=null;e.addEventListener("change",async()=>{const a=e.files[0];if(!a)return;const s=new Image;s.onload=()=>{const c=document.createElement("canvas");c.width=s.width,c.height=s.height;const d=c.getContext("2d");d.drawImage(s,0,0);const l=d.getImageData(0,0,c.width,c.height);r=l,n=new ImageData(new Uint8ClampedArray(l.data),l.width,l.height),i(n)},s.src=URL.createObjectURL(a)}),t.resize.addEventListener("click",()=>applyFilter(a=>yt(a,200,200))),t.grayscale.addEventListener("click",()=>applyFilter(_t)),t.blur.addEventListener("click",()=>applyFilter(a=>It(a,5))),t.flip.addEventListener("click",()=>applyFilter(vt)),t.pixelate.addEventListener("click",()=>applyFilter(a=>Et(a,8))),t.invert.addEventListener("click",()=>applyFilter(St)),t.reset.addEventListener("click",()=>{r&&(n=new Uint8Array(r),i(n))}),t.download.addEventListener("click",()=>{n&&(o(n,"processed_image.png"),Notification.permission==="granted"?new Notification("Descarga iniciada!! ;) ",{body:"La imagen procesada se está descargando.",icon:"/camIcon192.png"}):console.log("Permiso de notificación no otorgado :("))});function i(a,s="image/png"){const c=new Blob([a],{type:s}),d=URL.createObjectURL(c),l=document.getElementById("outputImage");l.src=d,l.style.display="block"}function o(a,s){console.log("Downloading image. Bytes:",a.length);const c=new Blob([a],{type:"image/png"}),d=URL.createObjectURL(c),l=document.createElement("a");l.href=d,l.download=s,l.click(),URL.revokeObjectURL(d)}window.addEventListener("load",()=>{setTimeout(()=>{document.getElementById("splash-screen").style.display="none"},1e3)}),"serviceWorker"in navigator?(console.log("Service Worker is supported in this browser"),navigator.serviceWorker.register("/sw.js").then(a=>console.log("Service Worker Registered",a)).catch(a=>console.error("Error in SW register",a))):console.log("Service Worker not supported in this browser")}Oi();Bi();Ni();
