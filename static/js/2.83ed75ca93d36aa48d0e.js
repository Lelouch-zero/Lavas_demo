webpackJsonp([2],{509:function(t,e,r){function n(t){r(518)}var o=r(34)(r(520),r(521),n,"data-v-1329f17e",null);t.exports=o.exports},514:function(t,e,r){t.exports=r(515)},515:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(516),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},516:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new p(n||[]);return a._invoke=s(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=b;return function(i,a){if(o===B)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return d()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=f(c,r);if(u){if(u===O)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===b)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=B;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?k:C,s.arg===O)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=k,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,O):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function v(t){if(t){var e=t[A];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:d}}function d(){return{value:y,done:!0}}var y,m=Object.prototype,g=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},A=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",_=w.toStringTag||"@@toStringTag",L="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(L&&(t.exports=E));E=e.regeneratorRuntime=L?t.exports:{},E.wrap=r;var b="suspendedStart",C="suspendedYield",B="executing",k="completed",O={},j={};j[A]=function(){return this};var N=Object.getPrototypeOf,R=N&&N(N(v([])));R&&R!==m&&g.call(R,A)&&(j=R);var S=a.prototype=o.prototype=Object.create(j);i.prototype=S.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(S),t},E.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[x]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(S),S[_]="Generator",S[A]=function(){return this},S.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=v,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;l(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:v(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),O}}}(function(){return this}()||Function("return this")())},517:function(t,e,r){"use strict";e.__esModule=!0;var n=r(180),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var c=e[i](a),u=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},518:function(t,e,r){var n=r(519);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(508)("2cff52e6",n,!0)},519:function(t,e,r){e=t.exports=r(507)(!0),e.push([t.i,".content[data-v-1329f17e]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.content h2[data-v-1329f17e]{font-size:46px;font-weight:500}.content h2[data-v-1329f17e],.content h4[data-v-1329f17e]{color:rgba(0,0,0,.87)}","",{version:3,sources:["C:/Users/liuxu/Desktop/pwa_demo/src/pages/Home.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C,AACD,6BACE,eAAgB,AAChB,eAAiB,CAClB,AACD,0DAEE,qBAAwB,CACzB",file:"Home.vue",sourcesContent:["\n.content[data-v-1329f17e] {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.content h2[data-v-1329f17e] {\n  font-size: 46px;\n  font-weight: 500;\n}\n.content h2[data-v-1329f17e],\n.content h4[data-v-1329f17e] {\n  color: rgba(0,0,0,0.87);\n}"],sourceRoot:""}])},520:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(514),i=n(o),a=r(180),c=n(a),u=r(517),s=n(u),f=r(55),h=n(f),l=r(56);e.default={name:"home",props:{},methods:(0,h.default)({},(0,l.mapActions)("appShell/appHeader",["setAppHeader"]),(0,l.mapActions)("appShell/appBottomNavigator",["showBottomNav","activateBottomNav"])),asyncData:function(){var t=this;return(0,s.default)(i.default.mark(function e(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.default(function(t,e){setTimeout(t,500)});case 2:case"end":return t.stop()}},e,t)}))()},activated:function(){this.setAppHeader({show:!0,title:"Lavas",showMenu:!0,showBack:!1,showLogo:!0,actions:[{icon:"search",route:"/search"}]}),this.activateBottomNav("home"),this.showBottomNav()}}},521:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content"},[r("h2",[t._v("LAVAS")]),t._v(" "),r("h4",[t._v("[ˈlɑ:vəz]")])])])}]}}});
//# sourceMappingURL=2.83ed75ca93d36aa48d0e.js.map