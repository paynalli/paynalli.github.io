(window.webpackJsonp=window.webpackJsonp||[]).push([[111,101],{583:function(t,n,e){"use strict";e.r(n);var o={name:"SolutionCard",props:["singleSolutions"]},r=e(38),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"row"},t._l(t.singleSolutions,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4"},[n("div",{class:"single-solutions ".concat(e.class)},[n("div",{staticClass:"solutions-content"},[n("h3",[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(e.shortDesc)+"\n        ")]),t._v(" "),e.url?t._e():n("NuxtLink",{staticClass:"read-more",attrs:{to:e.slug}},[t._v("\n          "+t._s(e.btnText)+"\n        ")]),t._v(" "),e.url?n("a",{staticClass:"read-more",attrs:{href:e.url,target:"_blank"}},[t._v("\n          "+t._s(e.btnText)+"\n        ")]):t._e()],1)])])})),0)}),[],!1,null,null,null);n.default=component.exports},747:function(t,n,e){"use strict";e.r(n);e(58),e(73);var o=e(22),r=(e(57),{name:"Solutions",components:{SolutionCard:e(583).default},data:function(){return{solutions:[],header:null}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("".concat("http://192.168.0.229:1337","/solutioncards?_locale=")+t.$i18n.locale);case 2:return t.solutions=n.sent,n.next=5,t.$http.$get("".concat("http://192.168.0.229:1337","/solutions-header?_locale=")+t.$i18n.locale);case 5:t.header=n.sent;case 6:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0}),l=e(38),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"solutions-area pt-100 pb-70"},[n("div",{staticClass:"container"},[t.header?n("div",{staticClass:"section-title"},[n("h2",[t._v(t._s(t.header.title))]),t._v(" "),n("p",[t._v("\n        "+t._s(t.header.description)+"\n      ")])]):t._e(),t._v(" "),t.solutions?n("SolutionCard",{attrs:{singleSolutions:t.solutions}}):t._e()],1)])}),[],!1,null,null,null);n.default=component.exports}}]);