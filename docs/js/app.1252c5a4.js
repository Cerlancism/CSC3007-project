(function(){"use strict";var e={7637:function(e,t,o){var n=o(144),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-card",{class:e.radius},[o("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[o("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("v-tabs-slider",{attrs:{color:"white"}}),o("v-tab",{attrs:{to:"/"}},[e._v("Milestone 1")]),o("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1)]},proxy:!0}])},[o("v-toolbar-title",[e._v("CSC3007 Project")]),o("v-spacer")],1)],1),o("router-view")],1)},a=[],i={data(){return{tab:null,items:["Home","About"],radius:"rounded-0"}}},s=i,c=o(1001),l=o(3453),u=o.n(l),h=o(7524),f=o(26),d=o(9762),p=o(4227),v=o(4499),m=o(1208),g=o(6656),b=o(7921),w=(0,c.Z)(s,r,a,!1,null,null,null),y=w.exports;u()(w,{VApp:h.Z,VCard:f.Z,VSpacer:d.Z,VTab:p.Z,VTabs:v.Z,VTabsSlider:m.Z,VToolbar:g.Z,VToolbarTitle:b.qW});var _=o(5205);(0,_.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var k=o(8345),T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("div",{staticClass:"text-justify"},[o("v-row",[o("v-col",{staticClass:"sm-12"},[o("h1",[e._v("Visualisation Approach 1")]),o("p",[o("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/caffeine-and-calories/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/caffeine-and-calories/")])]),o("a",{attrs:{href:"img/2552_Buzz-vs-Bulge-4.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/2552_Buzz-vs-Bulge-4.png",alt:"caffeine-and-calories"}})],1),o("p",[o("b",[e._v("Domain:")]),e._v(" There is a difference in understanding the visualisation between the artist and the user. At a glance, we can observe that the artist assumes that the user is trying to determine which beverages they should consume based on their calories or caffeine level. However, calorie tracking is not just for losing weight. Some users are interested in this dataset to track calories for gaining and maintaining weight as well. Take note that the visualisation is targeted more at users with the intention of tracking calories or caffeine levels to determine the beverage. ")]),o("p",[e._v(" However, apart from the targeted audience, there are another group of users who are trying to determine the calories or caffeine based on their favourite beverage (which is the inverse of what the artist assumed). Note that the data representation is not catered for users with this approach as a filter to the beverage was not provided. With the types of exercise dataset given, there may also be a group of users that would like to determine the equivalent exercise to burn off the calories from the beverages consumed. ")]),o("p",[o("b",[e._v("Data/Task:")]),e._v(" Data is mostly presented by scattering single servings of food or beverage on a plot consisting of the X and Y axis, caffeine vs calories. ")]),o("p",[o("u",[e._v("Inconsistency:")]),e._v(" Some items presented are not consistent with the one serving approach; for example, there is one can of coke and also 1 litre of coke found in the chart, along with an additional gauge to the calorie burn of executing certain forms of exercises. Additionally, there is also the existence of non-beverage items such as the chocolate bar and painkiller pills. ")]),o("p",{staticStyle:{display:"none"}},[o("u",[e._v("Data Representation:")]),e._v(" This infographic is generally designed to query the suitable food or beverage "),o("b",[e._v("(output)")]),e._v(" to consume to be in range with the calories vs caffeine intake "),o("b",[e._v("(input)")]),e._v(" the user is looking for. This allows users to be more aware and track their caffeine vs calorie consumption, as well as to explore more variety of food and beverage options "),o("b",[e._v("(why)")]),e._v(". ")]),o("p",[o("b",[e._v("Idiom:")]),e._v(" The infographic is presented in a way where it would be easier for the user to locate the caffeinated beverages they can consume based on the exercise they could do to burn off the calories. However, there are also users that would want to find out the caffeine/calories intake based on their favourite beverage or explore the trends in the caffeinated beverages they could hit their calories target. The point origin of the axis makes it hard to fulfil the needs mentioned as they do not start from 0. Anything that is below the horizontal axis seems to be perceived as a “healthier” option. Very poor justifications for why the axis is started off at such random positions. ")]),o("p",[o("b",[e._v("Prototype:")]),e._v(" With the above issue, our team has come out with the following prototype to represent the data better. One of the main concerns stated was the lack of user interaction to cater for the different groups of users. Therefore, we have come out with a chart diagram with filtering functionality to assist users better in tracking the beverage based on their specific needs. ")]),o("a",{attrs:{href:"img/v1_prototype1.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/v1_prototype1.png",alt:"v1_prototype1.png"}})],1),o("a",{attrs:{href:"img/v1_prototype2.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/v1_prototype2.png",alt:"v1_prototype2.png"}})],1),o("a",{attrs:{href:"img/v1_prototype3.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/v1_prototype3.png",alt:"v1_prototype3.png"}})],1)])],1),o("v-row",[o("v-divider")],1),o("v-row",[o("v-col",{staticClass:"sm-12"},[o("h1",[e._v("Visualisation Approach 2")]),o("p",[o("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/")])]),o("a",{attrs:{href:"img/2552_UK-Government-Spending.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/2552_UK-Government-Spending.png",alt:"2552_UK-Government-Spending.png"}})],1),o("p",[o("b",[e._v("Domain:")]),e._v(" The domain situation was interpreted correctly by the artist by showing the distribution between the income and expenditures of the UK government. ")]),o("p",[o("b",[e._v("Data/Task:")]),e._v(" The artists are showing components of a category and also the summation of the monies in categorisation. For example, in the “Wealth & Income Tax” leaf, we will assume that the 221 billion is the summation of all the other smaller leaf nodes with the same shade of brown. However, it is not the case, and the calculation seems to be the summation of an unknown amount of income tax and the corporation tax. Therefore, the data do not add up and do not make sense. ")]),o("p",[o("b",[e._v("Idiom:")]),e._v(" This is a tree dataset in the hierarchy of budget breakdowns. The data is presented in the format where each branch represents one sector of the breakdown. With that said, it is difficult to visualise the content of directories when there are too many child nodes. It would not be an effective method for visualisation if the information were to scale as it may cause an overloading of information and confuse the reader. ")]),o("p",[e._v(" Not only that, the culmination of values in different branches is not consistent. The representation of values may be difficult for readers to comprehend while dealing with big numbers. It is also difficult for users to understand which values are the summation of the final node. ")]),o("p",[o("b",[e._v("Prototype:")]),e._v(" With the above issue, our team has come out with the following prototype to better represent the data. To better represent the data as a whole, we have decided to utilise the old school method of the pie chart to better help readers understand the information better. Especially when it comes to the comparison of monies, a pie chart could prove to provide better visualisation. Since there is so much more information to visualise, our team has decided to make an explosive pie chart with user interactive ability to filter with the different sectors they are interested in and their data representation. The general overview alone could help provide a comparison of incomes and expenditures as a whole and could easily determine any deficits if any. ")]),o("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/v2_prototype2.png",alt:"v2_prototype1.png"}})],1),o("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[o("v-img",{attrs:{src:"img/v2_prototype2.png",alt:"v2_prototype2.png"}})],1)])],1)],1)])},x=[],Z=o(1929);async function j(e){return new Promise((t=>{setTimeout((()=>t()),e)}))}var O=function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i};let S=class extends Z.w3{async mounted(){console.log(`mounted ${this.constructor.name}`),await j(1e3),console.log(`async slept in ${this.constructor.name}`)}unmounted(){console.log(`unmounted ${this.constructor.name}`)}};S=O([(0,Z.wA)({components:{}})],S);var A=S,V=A,C=o(2102),P=o(9846),z=o(1418),E=o(7047),D=o(2877),N=(0,c.Z)(V,T,x,!1,null,null,null),I=N.exports;u()(N,{VCol:C.Z,VContainer:P.Z,VDivider:z.Z,VImg:E.Z,VRow:D.Z}),n.Z.use(k.Z);const B=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9700))}],W=new k.Z({routes:B});var $=W,q=o(1910);n.Z.use(q.Z);var F=new q.Z({});n.Z.config.productionTip=!1,new n.Z({router:$,vuetify:F,render:e=>e(y)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.95812549.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="csc3007-assignment2:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+a){s=h;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var f=function(t,o){s.onerror=s.onload=null,clearTimeout(d);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkcsc3007_assignment2"]=self["webpackChunkcsc3007_assignment2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7637)}));n=o.O(n)})();
//# sourceMappingURL=app.1252c5a4.js.map