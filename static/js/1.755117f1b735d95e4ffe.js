webpackJsonp([1],{513:function(t,e,r){function n(t){r(534)}var o=r(34)(r(536),r(537),n,"data-v-60c4dff2",null);t.exports=o.exports},514:function(t,e,r){t.exports=r(515)},515:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(516),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},516:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(n||[]);return a._invoke=l(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&g.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},a)}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function l(t,e,r){var o=_;return function(i,a){if(o===E)throw new Error("Generator is already running");if(o===L){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=u(c,r);if(s){if(s===O)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===_)throw o=L,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=E;var l=n(t,e,r);if("normal"===l.type){if(o=r.done?L:k,l.arg===O)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=L,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,u(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,O):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,A=Object.prototype,g=A.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},x=m.iterator||"@@iterator",b=m.asyncIterator||"@@asyncIterator",w=m.toStringTag||"@@toStringTag",C="object"==typeof t,B=e.regeneratorRuntime;if(B)return void(C&&(t.exports=B));B=e.regeneratorRuntime=C?t.exports:{},B.wrap=r;var _="suspendedStart",k="suspendedYield",E="executing",L="completed",O={},j={};j[x]=function(){return this};var S=Object.getPrototypeOf,q=S&&S(S(p([])));q&&q!==A&&g.call(q,x)&&(j=q);var N=a.prototype=o.prototype=Object.create(j);i.prototype=N.constructor=a,a.constructor=i,a[w]=i.displayName="GeneratorFunction",B.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},B.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(N),t},B.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[b]=function(){return this},B.AsyncIterator=s,B.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return B.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(N),N[w]="Generator",N[x]=function(){return this},N.toString=function(){return"[object Generator]"},B.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},B.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),O}}}(function(){return this}()||Function("return this")())},517:function(t,e,r){"use strict";e.__esModule=!0;var n=r(180),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var c=e[i](a),s=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}},534:function(t,e,r){var n=r(535);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(508)("6c02894d",n,!0)},535:function(t,e,r){e=t.exports=r(507)(!0),e.push([t.i,"header[data-v-60c4dff2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:52px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}form[data-v-60c4dff2]{-webkit-box-flex:1;-ms-flex:1;flex:1}.search-input[data-v-60c4dff2]{width:100%;outline:none;font-size:16px;height:50px}.search-btn[data-v-60c4dff2]{color:#959595}.search-loading[data-v-60c4dff2]{margin-top:30%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.search-content[data-v-60c4dff2]{margin-top:20px}li[data-v-60c4dff2]{list-style-type:none}","",{version:3,sources:["C:/Users/liuxu/Desktop/pwa_demo/src/pages/Search.vue"],names:[],mappings:"AACA,wBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,6FAAoG,CACrG,AACD,sBACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,+BACE,WAAY,AACZ,aAAc,AACd,eAAgB,AAChB,WAAa,CACd,AACD,6BACE,aAAe,CAChB,AACD,iCACE,eAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,iCACE,eAAiB,CAClB,AACD,oBACE,oBAAsB,CACvB",file:"Search.vue",sourcesContent:["\nheader[data-v-60c4dff2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 52px;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\nform[data-v-60c4dff2] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search-input[data-v-60c4dff2] {\n  width: 100%;\n  outline: none;\n  font-size: 16px;\n  height: 50px;\n}\n.search-btn[data-v-60c4dff2] {\n  color: #959595;\n}\n.search-loading[data-v-60c4dff2] {\n  margin-top: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.search-content[data-v-60c4dff2] {\n  margin-top: 20px;\n}\nli[data-v-60c4dff2] {\n  list-style-type: none;\n}"],sourceRoot:""}])},536:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(514),i=n(o),a=r(180),c=n(a),s=r(517),l=n(s),u=r(55),f=n(u),h=r(56);e.default={name:"search",data:function(){return{query:"",loading:!1,data:[]}},methods:(0,f.default)({},(0,h.mapActions)("appShell/appHeader",["setAppHeader"]),(0,h.mapActions)("appShell/appBottomNavigator",["hideBottomNav"]),{search:function(){var t=this;return(0,l.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=[],t.loading=!0,t.$el.querySelector(".search-input").blur(),e.next=5,new c.default(function(t){setTimeout(t,1e3)});case 5:t.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()}}),activated:function(){this.setAppHeader({show:!1}),this.hideBottomNav()}}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-search-page"},[r("header",[r("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.$router.go(-1)}}},[r("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.search(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),r("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[r("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?r("div",{staticClass:"search-loading"},[r("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?r("div",{staticClass:"search-content"},[r("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,n){return[r("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),r("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),r("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),r("v-list-tile-action",[r("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),r("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),n+1<t.data.length?r("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=1.755117f1b735d95e4ffe.js.map