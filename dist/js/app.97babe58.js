(function(e){function t(t){for(var o,r,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({index:"index"}[e]||e)+"."+{index:"0c8cdfcc"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={index:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({index:"index"}[e]||e)+"."+{index:"4d5a8032"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}],attrs:{color:"#1989fa"}},[e._v("加载中...")]),n("van-overlay",{attrs:{show:e.showLoading}}),n("router-view"),n("tab-bar",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.showTab,expression:"$route.meta.showTab"}]})],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-bar"},e._l(e.itemList,(function(t,o){return n("div",{key:o,on:{click:function(n){return e.$router.replace(t.path)}}},[n("i",{class:"iconfont "+t.iconfontClass,style:t.path===e.$route.path?"color: red;":""}),n("p",{style:t.path===e.$route.path?"color: red;":""},[e._v(e._s(t.text))])])})),0)},c=[],u={data:function(){return{itemList:[{path:"/home",iconfontClass:"iconjingdong-",text:"首页"},{path:"/cate",iconfontClass:"icon2",text:"分类"},{path:"",iconfontClass:"",text:"",jingxijie:!0},{path:"/cart",iconfontClass:"icongwc",text:"购物车"},{path:"/mine",iconfontClass:"iconwode",text:"我的"}]}}},s=u,l=(n("ae1f"),n("2877")),d=Object(l["a"])(s,i,c,!1,null,null,null),f=d.exports,h={components:{TabBar:f},computed:{showLoading:function(){return this.$store.state.showLoading}},mounted:function(){var e=this;console.log(this.$store.state.showLoading),this.$store.state.showLoading&&setTimeout((function(){e.$store.dispatch("toggleLoading")}),1500)}},p=h,m=(n("5c0b"),Object(l["a"])(p,r,a,!1,null,null,null)),g=m.exports,v=n("8c4f");o["a"].use(v["a"]);var b=[{path:"/home",name:"home",meta:{showTab:!0,title:"京东"},component:function(e){return n.e("index").then(function(){return e(n("bb51"))}.bind(null,n)).catch(n.oe)}},{path:"/cate",name:"cate",meta:{showTab:!0,title:"分类"},component:function(e){return n.e("index").then(function(){return e(n("1ef0"))}.bind(null,n)).catch(n.oe)}},{path:"/cart",name:"cart",meta:{showTab:!0,title:"购物车"},component:function(e){return n.e("index").then(function(){return e(n("b789"))}.bind(null,n)).catch(n.oe)}},{path:"/mine",name:"mine",meta:{showTab:!0,title:"个人中心"},component:function(e){return n.e("index").then(function(){return e(n("0a4e"))}.bind(null,n)).catch(n.oe)}},{path:"/",redirect:"/home"}],w=new v["a"]({mode:"history",base:"/",routes:b}),y=w,x=n("2f62");o["a"].use(x["a"]);var L={showLoading:!1},T={toggleLoading:function(e){e.showLoading=!e.showLoading}},_={toggleLoading:function(e){var t=e.commit;t("toggleLoading")}},j=new x["a"].Store({state:L,mutations:T,actions:_,modules:{}}),C=(n("a342"),n("6211"),n("e88e")),O=(n("b52d"),n("bbc7")),E=(n("f042"),n("2d3f")),$=(n("a23f"),n("f89c")),k=(n("0171"),n("2b97")),P=(n("ddd7"),n("9385"));o["a"].use(k["a"]).use(P["a"]),o["a"].use($["a"]),o["a"].use(C["a"]).use(O["a"]).use(E["a"]),o["a"].config.productionTip=!1,y.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),e.meta.showTab&&(document.body.style.marginBottom="60px"),n()})),new o["a"]({router:y,store:j,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("a0de"),r=n.n(o);r.a},"98cb":function(e,t,n){},a0de:function(e,t,n){},a342:function(e,t,n){},ae1f:function(e,t,n){"use strict";var o=n("98cb"),r=n.n(o);r.a}});
//# sourceMappingURL=app.97babe58.js.map