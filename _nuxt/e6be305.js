(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{580:function(t,n,e){"use strict";e.r(n);e(69),e(84);var c=e(22),r=(e(57),{name:"Pricing",data:function(){return{pricings:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("".concat("http://192.168.0.100:1337","/pricing-plans?_locale=")+t.$i18n.locale);case 2:t.pricings=n.sent;case 3:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0}),l=e(38),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pricing-area pt-100"},[t.pricings?n("div",{staticClass:"container"},[n("div",{staticClass:"section-title"},[n("h2",[t._v(t._s(t.pricings.title))]),t._v(" "),n("p",[t._v("\n        "+t._s(t.pricings.description)+"\n      ")])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.pricings.pricing,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4 col-md-6 justify-content-center"},[n("div",{class:e.className},[n("div",{staticClass:"pricing-content"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h1",[t._v("\n              "+t._s(e.price)+" "),n("sub",[t._v(t._s(e.billing_period))])])]),t._v(" "),n("ul",t._l(e.features,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v("\n              "+t._s(e.text)+"\n            ")])})),0),t._v(" "),n("a",{staticClass:"default-btn",attrs:{href:"#"}},[t._v("\n            "+t._s(e.btn_text)+"\n          ")])])])})),0)]):t._e()])}),[],!1,null,null,null);n.default=component.exports}}]);