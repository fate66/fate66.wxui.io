!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wxui",[],e):"object"==typeof exports?exports.wxui=e():t.wxui=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=43)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,u){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var f=c.render;c.render=function(t,e){return a.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},16:function(t,e,n){var r=n(52);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},27:function(t,e,n){var r=n(72);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},3:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=navigator.userAgent.toLowerCase(),o=/(Android)\s+([\d.]+)/i,i=/\(i[^;]+;( U;)? cpu.+mac os x/i,s=/Windows Phone ([\d.]+)/i,u=/(iPhone|iPad|iPod|iOS)/i,a=/(iPad).*OS\s([\d_]+)/i,c=/(iPhone\sOS)\s([\d_]+)/i,f=/QQ/i,l=/micromessenger/i,p=/wxwork\/.* MicroMessenger/i,d=/WeiBo/i,h=Object.create(null);h.isMobile=function(){return!!r.match(/AppleWebKit.*Mobile.*/i)},h.isAndriod=function(){return!!o.test(r)},h.isIOS=function(){return!!i.test(r)},h.isWP=function(){return!!s.test(r)},h.isApple=function(){return!!u.test(r)},h.isIphone=function(){return!!c.test(r)},h.isIpad=function(){return!!a.test(r)},h.isQQ=function(){return!!f.test(r)},h.isWX=function(){return!!l.test(r)},h.isWXWork=function(){return!!p.test(r)},h.isWeiBo=function(){return!!d.test(r)},h.isIphoneX_XS=function(){return this.isIOS()&&812==screen.height&&375==screen.width},h.isIPhoneXM_XR=function(){return this.isIOS()&&414===window.screen.width&&896===window.screen.height},h.isIPhoneX_later=function(){return this.isIphoneX_XS()||this.isIPhoneXM_XR()},h.isMiniprogram=function(){return"miniprogram"===window.__wxjs_environment}},38:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return this.isIpx&&this.isIphoneX?e("section",[this._t("iphoneX",[e("div",{staticClass:"iphone_X",style:{"background-color":this.bgColor}})])],2):this._e()};r._withStripped=!0;var o=n(3),i={name:"WxIphoneX",props:{bgColor:{type:String,default:"white"},isIphoneX:{type:Boolean,default:!0}},data:function(){return{}},computed:{isIpx:function(){return o.a.isIPhoneX_later()}},created:function(){},components:{},methods:{}},s=(n(51),n(0)),u=Object(s.a)(i,r,[],!1,null,"72e412d6",null);u.options.__file="packages/WxIphoneX/src/WxIphoneX.vue";var a=u.exports;n.d(e,"default",function(){return a})},4:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},43:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fixed"},[t._t("default"),t._v(" "),t.isIpx?n("wx-iphone-x",t._b({},"wx-iphone-x",t.$attrs,!1),[t.iphoneXSlot?n("div",{attrs:{slot:"iphoneX"},slot:"iphoneX"},[t._t("iphoneX")],2):t._e()]):t._e()],2)};r._withStripped=!0;var o={name:"WxFixed",data:function(){return{iphoneXSlot:!1}},computed:{isIpx:function(){return!1}},created:function(){this.iphoneXSlot=this.checkSlot("iphoneX")},components:{WxIphoneX:n(38).default},methods:{checkSlot:function(t){return!!this.$slots[t]}}},i=(n(71),n(0)),s=Object(i.a)(o,r,[],!1,null,"5f0e3218",null);s.options.__file="packages/WxFixed/src/WxFixed.vue";var u=s.exports;n.d(e,"default",function(){return u})},5:function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,c=0,f=[],l=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],e))}else{var u=[];for(s=0;s<r.parts.length;s++)u.push(y(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:u}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function h(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=a||(a=m(e)),r=_.bind(null,n,s,!1),o=_.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(u=i[s.id]).refs--,r.push(u)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete i[u.id]}}}};var x,g=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},51:function(t,e,n){"use strict";var r=n(16);n.n(r).a},52:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".iphone_X[data-v-72e412d6] {\n  width: 10rem;\n  height: 0.90667rem;\n}\n",""])},6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},71:function(t,e,n){"use strict";var r=n(27);n.n(r).a},72:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".fixed[data-v-5f0e3218] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 10rem;\n}\n",""])}})});