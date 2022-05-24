(function(){"use strict";var e={5493:function(e,t,n){var r=n(9963),o=n(6252);function a(e,t,n,r,a,i){const u=(0,o.up)("router-view"),l=(0,o.Q2)("wechat-title");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(u,null,null,512)),[[l,e.$route.meta["title"]]])}var i=n(9669),u=n.n(i),l={name:"App",methods:{BG:function(){u().get("/v1/api/set/setting?key=backgroundImage").then((e=>{""!==e.data.data["value"]&&(document.body.style='background: url("'+e.data.data["value"]+'");')}))}},mounted(){this.BG()}},c=n(3744);const s=(0,c.Z)(l,[["render",a]]);var d=s,f=n(2119);const m=[{path:"/",name:"Index",meta:{requireAuth:!1,title:"青龙Tools"},component:()=>Promise.all([n.e(493),n.e(690)]).then(n.bind(n,2690))},{path:"/login",name:"login",meta:{requireAuth:!1,title:"管理员登录"},component:()=>Promise.all([n.e(493),n.e(661)]).then(n.bind(n,661))},{path:"/register",name:"register",meta:{requireAuth:!1,title:"管理员注册"},component:()=>Promise.all([n.e(493),n.e(971)]).then(n.bind(n,3971))},{path:"/admin",name:"admin",meta:{requireAuth:!0,title:"后台管理"},component:()=>Promise.all([n.e(493),n.e(277)]).then(n.bind(n,5277))},{path:"/admin/env",name:"adminEnv",meta:{requireAuth:!0,title:"变量管理"},component:()=>Promise.all([n.e(493),n.e(93)]).then(n.bind(n,1093))},{path:"/admin/panel",name:"adminPanel",meta:{requireAuth:!0,title:"面板管理"},component:()=>Promise.all([n.e(493),n.e(145)]).then(n.bind(n,4145))},{path:"/admin/plugin",name:"adminPlugin",meta:{requireAuth:!0,title:"插件管理"},component:()=>Promise.all([n.e(493),n.e(509)]).then(n.bind(n,2509))},{path:"/admin/transfer",name:"adminTransfer",meta:{requireAuth:!0,title:"容器管理"},component:()=>Promise.all([n.e(493),n.e(86)]).then(n.bind(n,7086))},{path:"/admin/message",name:"adminMessage",meta:{requireAuth:!0,title:"推送管理"},component:()=>Promise.all([n.e(493),n.e(812)]).then(n.bind(n,9812))},{path:"/admin/settings",name:"adminSettings",meta:{requireAuth:!0,title:"网站设置"},component:()=>Promise.all([n.e(493),n.e(29)]).then(n.bind(n,2029))}],h=(0,f.p7)({history:(0,f.r5)("/static/"),routes:m});h.beforeEach(((e,t,n)=>{if(e.meta.requireAuth){let e=localStorage.getItem("Bearer");if(null===e||""===e)h.push("login");else{let e={token:localStorage.getItem("Bearer")};u().post("/v1/api/check/token",e).then((e=>{!0===e.data.data?n():(localStorage.clear(),h.push("login"))}))}}else n()}));var p=h,g=n(3907),v=(0,g.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),b=n(8838),y=n.n(b),A=(n(4457),n(1073));u().defaults.timeout=1e4,u().defaults.headers.common.Authorization="Bearer "+localStorage.getItem("Bearer"),u().defaults.baseURL="/",(0,r.ri)(d).use(v).use(p).use(y()).use(A.Z).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{29:"85d3c3e2",86:"847231c2",93:"6ebd61df",145:"f0a2d0e7",277:"281f963c",493:"fdb76b15",509:"537c5ac0",661:"1172ee2e",690:"79473812",812:"2297e44b",971:"70425d86"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{29:"c8e02aef",86:"c73669d2",93:"c73669d2",145:"c73669d2",277:"c73669d2",509:"c73669d2",661:"ca064190",690:"4587e8ad",812:"c73669d2",971:"3ecfdb96"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qltools:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/static/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={29:1,86:1,93:1,145:1,277:1,509:1,661:1,690:1,812:1,971:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkqltools"]=self["webpackChunkqltools"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5493)}));r=n.O(r)})();
//# sourceMappingURL=app.0602ade3.js.map