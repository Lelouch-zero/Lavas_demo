"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e&&e.length>0&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Lavas_demo/favicon.ico","7264d2ec7553bb96307af4acbe697faf"],["/Lavas_demo/index.html","f64cd2ce69e83365b3ce0e55cdbaa884"],["/Lavas_demo/static/css/app.4f79e6c879ce2950dadc6ce2c6680579.css","4d1271d75128825903522e011f90f8fe"],["/Lavas_demo/static/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/Lavas_demo/static/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/Lavas_demo/static/fonts/MaterialIcons-Regular.woff2","9d66ce374c90fd261bd978cd20565583"],["/Lavas_demo/static/img/icons/android-chrome-192x192.png","b8a42c4a3b00c4f75bc636f2923eaeca"],["/Lavas_demo/static/img/icons/android-chrome-512x512.png","efbe0aa485b3aeaceb8ead9191f0c4c0"],["/Lavas_demo/static/img/icons/apple-touch-icon-120x120.png","b451e38c6ee4b03781b1019c518e7894"],["/Lavas_demo/static/img/icons/apple-touch-icon-152x152.png","83409fb3fe88cb94d7d3df5fe97569c9"],["/Lavas_demo/static/img/icons/apple-touch-icon-180x180.png","0ff69c8fca81469c28f589d5fad0616e"],["/Lavas_demo/static/img/icons/apple-touch-icon-60x60.png","4dc6fdc67611efce36a3c500cbe1c0ec"],["/Lavas_demo/static/img/icons/apple-touch-icon-76x76.png","588079df8f1b8fde3b3cd691ee65bf06"],["/Lavas_demo/static/img/icons/favicon-16x16.png","3742528143340e36915adf388d64060f"],["/Lavas_demo/static/img/icons/favicon-32x32.png","047f3021e153c19951f86dd209904243"],["/Lavas_demo/static/img/icons/favicon.ico","7264d2ec7553bb96307af4acbe697faf"],["/Lavas_demo/static/js/0.20be1693318b28f2964b.js","06d72f808afd85cbef9adb0e899d1a55"],["/Lavas_demo/static/js/1.755117f1b735d95e4ffe.js","0d1e45eaed95e2ae8862b2cd5a7c1f8f"],["/Lavas_demo/static/js/2.83ed75ca93d36aa48d0e.js","16d0b3449ca6f7bb37ce16009ff21279"],["/Lavas_demo/static/js/3.502f2951e2351ba9c6e6.js","4424c155b4ef77d9341e17208ba45754"],["/Lavas_demo/static/js/4.2840439baf830140a61d.js","178ad664c85c730af0629f892eb1553b"],["/Lavas_demo/static/js/app.f4a8d06db7fd9acb74a8.js","1f48491d5ff4f8bb2c9b45a7c20c60f5"],["/Lavas_demo/static/js/manifest.58ea8c45547b8ca4f1f2.js","e92904155c426918d01be3b6c1253dd1"],["/Lavas_demo/static/js/vendor.6df56e3c1ee8afeaf8fe.js","52f7b2263200547b95004339601d866c"],["/Lavas_demo/static/manifest.json","2125e0e6c6f1bd194582ff47c724b213"],["/Lavas_demo/sw-register.js","76573c1395bd5a4e72c3708f2a3a3318"]],cacheName="sw-precache-v3-sw-cache-pwa_demo-"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e.forEach(function(e){e.postMessage("sw.update")})})}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var o="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"],e.request.url)&&(n=new URL(o,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,s=e("./options"),i=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&n.test(a.status)&&o(t).then(function(n){n.put(e,a).then(function(){var o=t.cache||s.cache;(o.maxEntries||o.maxAgeSeconds)&&o.name&&function(t,a,s){var u=function(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,s=n.name,u=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),i.getDb(s).then(function(e){return i.setTimestampForUrl(e,o,u)}).then(function(e){return i.expireEntries(e,c,a,u)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}.bind(null,e,n,o);c=c?c.then(u):u()}()})}),a.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",c="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,o);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:c}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var c=e.transaction(a,"readwrite");c.objectStore(a).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[c];o.push(a),u.delete(a),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,a){a=a||{};var c;t instanceof RegExp?c=RegExp:(c=a.origin||self.location.origin,c=c instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c)),e=e.toLowerCase();var s=new r(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var s=a(c,n);if(s.length>0)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(a){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;o.isResponseFresh(e,s,c)&&a(e)})},1e3*c)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),s=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,s="",i=t&&t.delimiter||"/";null!=(n=l.exec(e));){var u=n[0],f=n[1],h=n.index;if(s+=e.slice(a,h),a=h+u.length,f)s+=f[1];else{var p=e[a],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],x=n[7];s&&(r.push(s),s="");var b=null!=d&&null!=p&&p!==d,y="+"===w||"*"===w,R="?"===w||"*"===w,E=n[2]||i,L=g||v;r.push({name:m||o++,prefix:d||"",delimiter:E,optional:R,repeat:y,partial:b,asterisk:!!x,pattern:L?function(e){return e.replace(/([=!:$\/()])/g,"\\$1")}(L):x?".*":"[^"+c(E)+"]+?"})}}return a<e.length&&(s+=e.substr(a)),s&&r.push(s),r}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",c=n||{},s=(r||{}).pretty?function(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}:encodeURIComponent,i=0;i<e.length;i++){var u=e[i];if("string"!=typeof u){var f,l=c[u.name];if(null==l){if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(h(l)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!t[i].test(f))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===p?u.prefix:u.delimiter)+f}}else{if(f=u.asterisk?o(l):s(l),!t[i].test(f))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+f+'"');a+=u.prefix+f}}else a+=u}return a}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e,t){return e.keys=t,e}function i(e){return e.sensitive?"":"i"}function u(e,t,n){h(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)a+=c(f);else{var l=c(f.prefix),p="(?:"+f.pattern+")";t.push(f),f.repeat&&(p+="(?:"+l+p+")*"),a+=p=f.optional?f.partial?l+"("+p+")?":"(?:"+l+"("+p+"))?":l+"("+p+")"}}var d=c(n.delimiter||"/"),m=a.slice(-d.length)===d;return r||(a=(m?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=o?"$":r&&m?"":"(?="+d+"|$)",s(new RegExp("^"+a,i(n)),t)}function f(e,t,n){return h(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(e,t)}(e,t):h(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(f(e[o],t,n).source);return s(new RegExp("(?:"+r.join("|")+")",i(n)),t)}(e,t,n):function(e,t,n){return u(r(e,n),t,n)}(e,t,n)}var h=e("isarray");t.exports=f,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=u;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});