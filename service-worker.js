"use strict";var precacheConfig=[["/adam-martin/index.html","b7aa38af2cfa800177661f193fea2939"],["/adam-martin/static/css/main.bdc2459a.css","51a6c81cae9f7931fa12556756505367"],["/adam-martin/static/js/main.d10d406d.js","ab9c83d76f6e474604a097c7df6b78fd"],["/adam-martin/static/media/accordion.f68f98f2.png","f68f98f264ffb72917dee7b59a9994cd"],["/adam-martin/static/media/blog-index.29cfe484.png","29cfe4849d690a4797dadd2f5683e20d"],["/adam-martin/static/media/codepen-logo.f28134af.png","f28134afd99189a722fae5eec5057da5"],["/adam-martin/static/media/hillgate.7ff046d8.png","7ff046d860fe70782dfe6690f1e2d89a"],["/adam-martin/static/media/location-pin.cfc4da78.png","cfc4da7810da241e0e6b2d8f3772ef84"],["/adam-martin/static/media/logo.231096c1.png","231096c17a54bf45d4b90b65c0d4123b"],["/adam-martin/static/media/me-bw-cropped.f2886c46.jpg","f2886c46790f00b31d476be4ffe7e92a"],["/adam-martin/static/media/react-unit-converter.a49787c4.png","a49787c43e7f352f220bfa5ded55d4ba"],["/adam-martin/static/media/to-do-list.1f279a76.png","1f279a7604f7d953cf688534d7d12a91"],["/adam-martin/static/media/unit-converter.121c2291.png","121c22914f9852c2380ea2332cc919a0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/adam-martin/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});