(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{452:function(t,e,r){"use strict";r.r(e);var n=r(5),c=(r(30),{name:"Security",data:function(){return{securitys:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("http://192.168.0.211:1337/securitycards");case 2:t.securitys=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0}),o=r(13),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"security-area pb-70"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),t.securitys!==[]?r("div",{staticClass:"row"},t._l(t.securitys,(function(e){return r("div",{key:e.id,staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"single-security"},[r("i",{class:e.icon}),t._v(" "),r("h3",[t._v("\n                        "+t._s(e.title)+"\n                    ")]),t._v(" "),r("p",[t._v("\n                        "+t._s(e.shortDesc)+"\n                    ")])])])})),0):t._e()])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-title"},[r("h2",[t._v("Complete Website Security")]),t._v(" "),r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.")])])}],!1,null,null,null);e.default=component.exports}}]);