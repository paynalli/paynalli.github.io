(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{660:function(t,n,e){"use strict";e.r(n);var c=e(22),r=(e(57),{name:"ContactInfo",data:function(){return{contacts:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("".concat("http://192.168.0.100:1337","/locations"));case 2:t.contacts=n.sent;case 3:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0}),o=e(38),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"contact-info-area d-flex"},t._l(t.contacts,(function(e){return n("div",{key:e.id,staticClass:"container-fluid row"},[n("div",{staticClass:"col-lg-6 p-0"},[n("div",{staticClass:"single-contact-info"},[n("i",{class:e.icon}),t._v(" "),n("h3",[t._v(t._s(e.city)+", "+t._s(e.country))]),t._v(" "),n("p",[t._v(t._s(e.address))]),t._v(" "),n("a",{attrs:{href:"mailto:"+e.email}},[t._v("Email: "+t._s(e.email))]),t._v(" "),n("a",{attrs:{href:"tel:"+e.phone}},[t._v(t._s(e.phone))])])]),t._v(" "),n("div",{staticClass:"col-lg-6 p-0"},[n("div",{staticClass:"single-contact-map"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:e.map_url}})])])])})),0)}),[],!1,null,null,null);n.default=component.exports}}]);