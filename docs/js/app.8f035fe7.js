(function(){"use strict";var e={8876:function(e,t,r){var n=r(144),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-card",{class:e.radius},[r("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[r("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tabs-slider",{attrs:{color:"white"}}),r("v-tab",{attrs:{to:"/"}},[e._v("Home")]),r("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1)]},proxy:!0}])},[r("v-toolbar-title",[e._v("Singapore Crime Rate")]),r("v-spacer")],1)],1),r("router-view")],1)},o=[],s={data(){return{tab:null,items:["Home","About"],radius:"rounded-0"}}},i=s,l=r(1001),c=r(3453),u=r.n(c),d=r(7524),f=r(3237),p=r(9762),h=r(4227),v=r(8917),m=r(1208),b=r(5218),g=r(7921),y=(0,l.Z)(i,a,o,!1,null,null,null),w=y.exports;u()(y,{VApp:d.Z,VCard:f.Z,VSpacer:p.Z,VTab:h.Z,VTabs:v.Z,VTabsSlider:m.Z,VToolbar:b.Z,VToolbarTitle:g.qW});var Z=r(5205);(0,Z.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var x=r(8345),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("CrimeChart",{attrs:{responseData:e.apiResponse}}),r("p",[r("b",[e._v("Response time: ")]),e.loaded?r("span",[e._v(" API "+e._s(e.benchmark.api.toFixed(3))+" ms ")]):r("span",[e._v(" Loading... ")])])],1)},C=[],_=r(3796),O=r(140),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("MainBody",{attrs:{msg:"Crime Rate in Singapore for Year: "+(e.years.length>0?e.years[e.selectedYearIndex]:"Loading...")}}),e.loaded?r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"10"}},[r("div",{attrs:{id:"my_dataviz"}})]),r("v-col",{attrs:{cols:"12",sm:"12",md:"2"}},[r("p",[e._v("Catergories")]),e._l(e.types,(function(t){return r("v-checkbox",{key:t,attrs:{label:t,color:"red darken-4",value:t,"hide-details":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})})),r("br"),r("v-btn",{attrs:{elevation:"2",color:"primary"},on:{click:function(t){return e.selectAll()}}},[e._v(" Select All ")]),r("br"),r("br")],2)],1),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-slider",{attrs:{"tick-labels":e.years,max:e.years.length-1,step:"1",ticks:"always","tick-size":"4"},model:{value:e.selectedYearIndex,callback:function(t){e.selectedYearIndex=t},expression:"selectedYearIndex"}})],1)],1)],1):e._e()],1)},j=[],A=(r(6699),r(45)),Y=r(3700),R=function(e,t,r,n){var a,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};function S(e,t,r){return r.indexOf(e)===t}let T=class extends O.w3{constructor(...e){super(...e),(0,_.Z)(this,"responseData",void 0),(0,_.Z)(this,"selectedYearIndex",0),(0,_.Z)(this,"loaded",!1),(0,_.Z)(this,"tranformedData",void 0),(0,_.Z)(this,"earliestYear",void 0),(0,_.Z)(this,"latestYear",void 0),(0,_.Z)(this,"types",[]),(0,_.Z)(this,"selected",[]),(0,_.Z)(this,"years",[]),(0,_.Z)(this,"updateChart",(()=>{}))}get yearData(){return this.tranformedData?this.tranformedData.filter((e=>e.year===this.years[this.selectedYearIndex])).sort(((e,t)=>e.type.localeCompare(t.type))):[]}onDataChanged(){this.loaded=!1;const e=this.responseData?.result?.records;e?(this.tranformedData=e.map((e=>({type:e.level_2,value:Number(e.value),year:Number(e.year)}))),this.loaded=!0,this.earliestYear=Math.min(...this.tranformedData.map((e=>e.year))),this.latestYear=Math.max(...this.tranformedData.map((e=>e.year))),this.types=this.tranformedData.map((e=>e.type)).filter(S).sort(((e,t)=>e.localeCompare(t))),this.years=this.tranformedData.map((e=>e.year)).filter(S),console.log("min",this.earliestYear,"max",this.latestYear,"types",this.types),this.selectedYearIndex=this.years.length-1,this.selected=this.types.slice(),O.w3.nextTick((()=>this.loadChart()))):alert("Bad response")}selectAll(){this.selected=this.types}mounted(){this.responseData?.result?.records&&this.onDataChanged()}onYearChanged(){this.updateChart()}onSelectedChange(){this.updateChart()}loadChart(){console.log("Loading chart",this.yearData);var e={top:30,right:120,bottom:100,left:120},t=1600-e.left-e.right,r=640-e.top-e.bottom,n=A.Ys("#my_dataviz").append("svg").attr("viewBox",[0,0,t+e.left+e.right,r+e.top+e.bottom]).attr("style","max-width: 100%; height: auto; ").append("g").attr("transform","translate("+e.left+","+e.top+")"),a=A.tiA().range([0,t]).padding(.2),o=n.append("g").attr("transform","translate(0,"+r+")"),s=A.BYU(),i=n.append("g").attr("class","myYaxis");function l(e,t){e=e.filter((e=>t.includes(e.type))),a.domain(e.map((e=>e.type))),o.call(A.LLu(a)).selectAll("text").attr("transform","translate(-10,0)rotate(-20)").style("font-size","14px").style("text-anchor","end"),s.domain([1,A.Fp7(e,(e=>e.value))??5e3]).range([r,0]),i.transition().duration(333).call(A.y4O(s));var l=n.selectAll("rect").data(e);l.enter().append("rect").merge(l).transition().duration(333).attr("x",(e=>a(e.type))).attr("y",(e=>s(e.value))).attr("width",a.bandwidth()).attr("height",(e=>r-s(e.value))).attr("fill","#b71c1c"),l.exit().remove()}this.updateChart=()=>l(this.yearData,this.selected),this.updateChart()}};R([(0,O.fI)()],T.prototype,"responseData",void 0),R([(0,O.RL)("responseData")],T.prototype,"onDataChanged",null),R([(0,O.RL)("selectedYearIndex")],T.prototype,"onYearChanged",null),R([(0,O.RL)("selected")],T.prototype,"onSelectedChange",null),T=R([(0,O.wA)({components:{MainBody:Y.Z}})],T);var V=T,P=V,E=r(557),I=r(9362),L=r(2102),N=r(9846),B=r(2877),M=r(7544),F=(0,l.Z)(P,D,j,!1,null,null,null),z=F.exports;u()(F,{VBtn:E.Z,VCheckbox:I.Z,VCol:L.Z,VContainer:N.Z,VRow:B.Z,VSlider:M.Z});var $=function(e,t,r,n){var a,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let q=class extends O.w3{constructor(...e){super(...e),(0,_.Z)(this,"apiResponse",{}),(0,_.Z)(this,"loaded",!1),(0,_.Z)(this,"benchmark",{api:0})}async mounted(){const e=performance.now();try{const t=await fetch("https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf");if(!t.ok)throw"Not ok response";this.apiResponse=JSON.parse(await t.text()),this.benchmark.api=performance.now()-e,this.loaded=!0}catch(t){const e=t;console.error(e),alert("API Error: "+e.message)}}unmounted(){console.log("unmounted")}};q=$([(0,O.wA)({components:{CrimeChart:z}})],q);var H=q,J=H,U=(0,l.Z)(J,k,C,!1,null,null,null),W=U.exports;n.Z.use(x.Z);const G=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,4033))}],K=new x.Z({routes:G});var Q=K,X=r(1910);n.Z.use(X.Z);var ee=new X.Z({});n.Z.config.productionTip=!1,new n.Z({router:Q,vuetify:ee,render:e=>e(w)}).$mount("#app")},3700:function(e,t,r){r.d(t,{Z:function(){return m}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("h1",[e._v(e._s(e.msg))])])},a=[],o=r(3796),s=r(140),i=function(e,t,r,n){var a,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let l=class extends s.w3{constructor(...e){super(...e),(0,o.Z)(this,"msg",void 0)}};i([(0,s.fI)()],l.prototype,"msg",void 0),l=i([s.wA],l);var c=l,u=c,d=r(1001),f=r(3453),p=r.n(f),h=r(9846),v=(0,d.Z)(u,n,a,!1,null,null,null),m=v.exports;p()(v,{VContainer:h.Z})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.3fb2ce4b.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="csc3007-assignment2:";r.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,l=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var u=l(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunkcsc3007_assignment2"]=self["webpackChunkcsc3007_assignment2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8876)}));n=r.O(n)})();
//# sourceMappingURL=app.8f035fe7.js.map