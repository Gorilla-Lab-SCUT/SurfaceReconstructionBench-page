(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);_&&_(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"815352d3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"dd01860a"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=t,_.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],_.parentNode.removeChild(_),n(c)},_.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(_)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(_);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var _=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var _=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.show_bar?n("v-app-bar",{attrs:{app:"",color:"#3b3b3b",short:""}},[n("div",{staticClass:"bar_LOGO unSelect",on:{click:function(t){return e.bar_logo_clicked()}}},[e._v(" SCUTSurface ")]),n("v-spacer"),e._l(e.bar_btns,(function(t,r){return n("div",{key:r,staticClass:"bar_btn unSelect",on:{click:function(e){return t()}}},[e._v(" "+e._s(r)+" ")])})),e._l(e.bar_menus,(function(t,r){return n("v-menu",{key:r,attrs:{"offset-y":"","open-on-hover":!0},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("div",e._g({staticClass:"bar_btn"},o),[e._v(" "+e._s(r)+" ")])]}}],null,!0)},[n("v-list",{staticStyle:{"padding-bottom":"20px"}},e._l(e.bar_menus[r],(function(t,r){return n("div",{key:r},[n("div",{staticClass:"bar_second_btn unSelect",on:{click:function(e){return t()}}},[e._v(e._s(r))])])})),0)],1)})),e.show_right_space?n("div",{staticStyle:{width:"100px"}}):e._e()],2):n("v-navigation-drawer",{attrs:{app:"",color:"#3b3b3b","expand-on-hover":e.is_pc},model:{value:e.open_drawer,callback:function(t){e.open_drawer=t},expression:"open_drawer"}},[n("div",{staticClass:"drawer_logo"},[e._v("SCUTSurface")]),n("v-divider"),n("v-list",[e._l(e.bar_btns,(function(t,r){return n("div",{key:r,staticClass:"drawer_btn",on:{click:function(e){return t()}}},[e._v(" "+e._s(r)+" ")])})),e._l(e.bar_menus,(function(t,r){return n("v-list-group",{key:r,staticStyle:{"border-bottom":"1px solid gray"},attrs:{value:!1,eager:"","no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("div",{staticClass:"drawer_btn",staticStyle:{padding:"0",border:"0"}},[e._v(e._s(r))])]},proxy:!0}],null,!0)},e._l(e.bar_menus[r],(function(t,r){return n("v-list-item",{key:r,staticStyle:{"padding-left":"60px"},attrs:{link:""}},[n("div",{staticStyle:{color:"white"},on:{click:function(e){return t()}}},[e._v(" "+e._s(r)+" ")])])})),1)}))],2)],1),n("v-main",[n("div",{staticClass:"v-app-body",style:{height:e.show_bar?"calc(100vh - 56px)":"100vh","padding-bottom":e.show_bar?"0":"50px"}},[e.open_drawer?e._e():n("div",{staticClass:"open_drawer_btn",on:{click:e.open_drawer_event}}),n("router-view")],1)])],1)},a=[],c={data:function(){return{show_bar:!0,show_right_space:!0,is_pc:!1,open_drawer:!0,bar_btns:{Home:this.home_clicked,Submit:this.submit_clicked},bar_menus:{Resources:{Code:this.resources_code_clicked,Dataset:this.resources_dataset_clicked,Paper:this.resources_paper_clicked},Leaderboard:{"Synthetic object-level":this.benchmark_synthetic_object,"Synthetic scene-level":this.benchmark_synthetic_scene,"Real-scanned data":this.benchmark_real_object}}}},methods:{home_clicked:function(){this.$router.push("/")},submit_clicked:function(){this.$router.push("/submit")},resources_code_clicked:function(){window.open("https://github.com/Gorilla-Lab-SCUT/SCUTSurface-code")},resources_dataset_clicked:function(){this.$router.push("/resource/dataset")},resources_paper_clicked:function(){this.$router.push("/resource/paper")},benchmark_synthetic_object:function(){this.$router.push("/submit")},benchmark_synthetic_scene:function(){this.$router.push("/submit")},benchmark_real_object:function(){this.$router.push("/submit")}}},i=c,s=(n("034f"),n("2877")),u=Object(s["a"])(i,o,a,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"80vw",margin:"auto"}},[n("div",{staticClass:"introduction_page main-content"},[n("section",{staticClass:"title section mt-0 jumbotron"},[e._m(0),n("hr"),e._m(1),n("br"),n("div",{staticClass:"btns"},[n("v-btn",{staticClass:"each_btn",attrs:{color:"secondary",elevation:"2"},on:{click:e.paper_click}},[e._v("Paper")]),n("v-btn",{staticClass:"each_btn",attrs:{color:"secondary",elevation:"2"},on:{click:e.dataset_click}},[e._v("Datasets")]),n("v-btn",{staticClass:"each_btn",attrs:{color:"secondary",elevation:"2"},on:{click:e.code_click}},[e._v("Code")])],1)])])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticStyle:{"text-align":"center","margin-bottom":"1rem","font-weight":"normal",color:"black"},attrs:{id:"Surface_Reconstruction_from_Point_Clouds_A_Survey_and_a_Benchmark_66"}},[e._v(" Surface Reconstruction from Point Clouds: "),n("br"),e._v(" A Survey and a Benchmark ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center"}},[e._v("ZhangJin Huang"),n("sup",[e._v("*,1")]),e._v(", YuXin Wen"),n("sup",[e._v("*,1")]),e._v(", ZiHao Wang"),n("sup",[e._v("1")]),e._v(", Kui Jia"),n("sup",[e._v("1")]),n("br"),n("sup",[e._v("1")]),e._v("South China University of Technology"),n("br"),n("sup",[e._v("*")]),e._v(" denotes equal contribution"),n("br")])}],h={name:"Home",mounted:function(){window.document.body.clientWidth<1e3&&(this.slider_height=window.document.body.clientWidth/2+24)},methods:{paper_click:function(){this.$router.push("/resource/paper")},dataset_click:function(){this.$router.push("/resource/dataset")},code_click:function(){window.open("https://github.com/Gorilla-Lab-SCUT/SCUTSurface-code")}}},f=h,b=(n("cccb"),Object(s["a"])(f,_,p,!1,null,null,null)),v=b.exports;r["default"].use(d["a"]);var m=[{path:"/",name:"Home",component:v},{path:"*",name:"Error",component:function(){return n.e("about").then(n.bind(null,"5d94"))}}],y=new d["a"]({routes:m}),g=y,k=n("ce5b"),w=n.n(k);n("bf40");r["default"].use(w.a);var S=new w.a({});r["default"].config.productionTip=!1,new r["default"]({router:g,vuetify:S,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});