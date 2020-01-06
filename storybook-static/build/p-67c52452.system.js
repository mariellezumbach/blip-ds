var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="blip-ds";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var c=false;var u=false;var v=typeof window!=="undefined"?window:{};var h=v.document||{head:{}};var d={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return!!h.head.attachShadow}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p=new WeakMap;var y=function(e){return p.get(e)};var b=e("r",(function(e,r){return p.set(r.$lazyInstance$=e,r)}));var w=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return p.set(e,r)};var R=function(e,r){return r in e};var S=function(e){return console.error(e)};var _=new Map;var N=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=_.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{_.set(i,e)}return e[a]}),S)};var x=new Map;var T=[];var C=[];var j=[];var E=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&d.$flags$&4){U(A)}else{d.raf(A)}}}};var k=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){S(t)}}e.length=0};var L=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){S(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var A=function(){a++;k(T);var e=(d.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;L(C,e);L(j,e);if(C.length>0){j.push.apply(j,C);C.length=0}if(i=T.length+C.length+j.length>0){d.raf(A)}else{a=0}};var U=function(e){return Promise.resolve().then(e)};var O=E(C,true);var P={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var I=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var z=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){d.$cssShim$=v.__stencil_cssshim;if(d.$cssShim$){return d.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{d.$cssShim$=v.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(h.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));q(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-7f10eb01.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var q=function(e){var r=I(n);try{v[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;v[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=h.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[r].m);s.remove()}}));t.set(a,i);h.head.appendChild(s)}return i}}};var V=function(e,r){if(e!=null&&!M(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var F="hydrated";var W=function(e,r){if(r===void 0){r=""}{return function(){return}}};var G=function(e,r){{return function(){return}}};var Q=new WeakMap;var D=function(e,r,t){var n=x.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}x.set(e,n)};var J=function(e,r,t,n){var a=X(r.$tagName$);var i=x.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=Q.get(e);var o=void 0;if(!s){Q.set(e,s=new Set)}if(!s.has(a)){{if(d.$cssShim$){o=d.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var K=function(e,r,t){var n=W("attachStyles",r.$tagName$);var a=J(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var X=function(e,r){return"sc-"+e};var Y=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!M(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?Z(null,a):a)}o=s}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(r,l,te)}var c=Z(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$name$=i}return c}));var Z=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var ee=e("H",{});var re=function(e){return e&&e.$tag$===ee};var te={forEach:function(e,r){return e.map(ne).forEach(r)},map:function(e,r){return e.map(ne).map(r).map(ae)}};var ne=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ae=function(e){var r=Z(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var ie=function(e,r,t,n,a,i){if(t===n){return}var s=R(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=oe(t);var $=oe(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(R(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){d.rel(e,r,t,false)}if(n){d.ael(e,r,n,false)}}else{var c=M(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var u=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=u){e[r]=u}}else{e[r]=n}}catch(h){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}};var se=/\s/;var oe=function(e){return!e?[]:e.split(se)};var le=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(n in i){if(!(n in s)){ie(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){ie(a,n,i[n],s[n],t,r.$flags$)}};var fe=function(e,r,t,n){var a=r.$children$[t];var i=0;var $;var v;var d;if(!f){c=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=h.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=h.createTextNode("")}else{$=a.$elm$=h.createElement(a.$flags$&2?"slot-fb":a.$tag$);{le(null,a,u)}if(B(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=fe(e,a,i,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===a.$tag$&&e.$elm$){$e(e.$elm$,false)}}}return $};var $e=function(e,r){d.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){me(a).insertBefore(a,de(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(r){$e(a,r)}}d.$flags$&=~1};var ce=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=fe(null,t,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,de(r))}}}};var ue=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{$e(a,true)}}a.remove()}}};var ve=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var $=n[0];var c=n[f];var u;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if($==null){$=n[++i]}else if(c==null){c=n[--f]}else if(he(o,$)){ge(o,$);o=r[++a];$=n[++i]}else if(he(l,c)){ge(l,c);l=r[--s];c=n[--f]}else if(he(o,c)){if(o.$tag$==="slot"||c.$tag$==="slot"){$e(o.$elm$.parentNode,false)}ge(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=n[--f]}else if(he(l,$)){if(o.$tag$==="slot"||c.$tag$==="slot"){$e(l.$elm$.parentNode,false)}ge(l,$);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];$=n[++i]}else{{u=fe(r&&r[i],t,i,e);$=n[++i]}if(u){{me(o.$elm$).insertBefore(u,de(o.$elm$))}}}}if(a>s){ce(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){ue(r,a,s)}};var he=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var de=function(e){return e&&e["s-ol"]||e};var me=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ge=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i;if(r.$text$===null){{if(r.$tag$==="slot");else{le(e,r,u)}}if(n!==null&&a!==null){ve(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ce(t,null,r,a,0,a.length-1)}else if(n!==null){ue(n,0,n.length-1)}}else if(i=t["s-cr"]){i.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var pe=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}pe(t)}}};var ye=[];var be=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!ye.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;ye.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){be(s)}}};var we=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||Z(null,null);var i=re(n)?n:Y(null,null,n);if(t.$attrsToReflect$){i.$attrs$=i.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return i.$attrs$[n]=e[t]}))}i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=m&&(t.$flags$&1)!==0;$=false}ge(a,i);{if(c){be(i.$elm$);for(var u=0;u<ye.length;u++){var v=ye[u];if(!v.$nodeToRelocate$["s-ol"]){var g=h.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}d.$flags$|=1;for(var u=0;u<ye.length;u++){var v=ye[u];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}d.$flags$&=~1}if($){pe(i.$elm$)}ye.length=0}};var Re=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Se=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=W("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return _e(e,r,t,s,n)};Re(r,i);var l;a();return Ee(l,(function(){return O(o)}))};var _e=function(e,r,t,n,a){var i=W("update",t.$tagName$);var s=e["s-rc"];if(a){K(e,t,r.$modeName$)}var o=W("render",t.$tagName$);{{we(e,r,t,Ne(n))}}if(d.$cssShim$){d.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return xe(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var Ne=function(e,r){try{e=e.render()}catch(t){S(t)}return e};var xe=function(e,r,t){var n=W("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(F)}n();{r.$onReadyResolve$(e);if(!a){Ce()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){U((function(){return Se(e,r,t,false)}))}r.$flags$&=~(4|512)}};var Te=function(e,r){{var t=y(e);var n=t.$hostElement$.isConnected;if(n&&(t.$flags$&(2|16))===2){Se(e,t,r,false)}return n}};var Ce=function(e){{h.documentElement.classList.add(F)}{d.$flags$|=2}};var je=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){S(n)}}return undefined};var Ee=function(e,r){return e&&e.then?e.then(r):r()};var ke=function(e,r){return y(e).$instanceValues$.get(r)};var Le=function(e,r,t,n){var a=y(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;t=V(t,n.$members$[r][0]);if(t!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&o&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{l[e](t,s,r)}catch(n){S(n)}}))}}if((o&(2|16))===2){Se(i,a,n,false)}}}};var Ae=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ke(this,n)},set:function(e){Le(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;d.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Ue=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,l,f,$,c;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=N(a);if(!s.then)return[3,2];t=G();return[4,s];case 1:s=u.sent();t();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ae(s,a,2);s.isProxied=true}i=W("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){S(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Oe(n.$lazyInstance$);o=X(a.$tagName$);if(!(!x.has(o)&&s.style))return[3,5];l=W("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=u.sent();u.label=4;case 4:D(o,f,!!(a.$flags$&1));l();u.label=5;case 5:$=n.$ancestorComponent$;c=function(){return Se(e,n,a,true)};if($&&$["s-rc"]){$["s-rc"].push(c)}else{c()}return[2]}}))}))};var Oe=function(e){{je(e,"connectedCallback")}};var Pe=function(e,r){if((d.$flags$&1)===0){var t=W("connectedCallback",r.$tagName$);var n=y(e);if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(r.$flags$&4||r.$flags$&8){Be(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){Re(n,n.$ancestorComponent$=i);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{U((function(){return Ue(e,n,r)}))}}Oe(n.$lazyInstance$);t()}};var Be=function(e){var r="";var t=e["s-cr"]=h.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Me=function(e){if((d.$flags$&1)===0){var r=y(e);if(d.$cssShim$){d.$cssShim$.removeHost(e)}}};var Ie=e("b",(function(e,r){if(r===void 0){r={}}var t=W();var n=[];var a=r.exclude||[];var i=h.head;var s=v.customElements;var o=i.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var c=true;Object.assign(d,r);d.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;if(r.syncQueue){d.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;w(r);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(c){f.push(this)}else{d.jmp((function(){return Pe(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return Me(e)}))};r.prototype.forceUpdate=function(){Te(this,t)};r.prototype.componentOnReady=function(){return y(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,Ae(o,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);c=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{d.jmp((function(){return $=setTimeout(Ce,30,"timeout")}))}t()}));var ze=e("g",(function(e){var r=new URL(e,d.$resourcesUrl$);return r.origin!==v.location.origin?r.href:r.pathname}))}}}));