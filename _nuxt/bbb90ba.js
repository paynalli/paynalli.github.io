(window.webpackJsonp=window.webpackJsonp||[]).push([[81,80],{377:function(t,n,e){"use strict";e.r(n);var o={name:"SolutionCard",props:["singleSolutions"]},r=e(9),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},t._l(t.singleSolutions,(function(n){return e("div",{key:n.id,staticClass:"col-lg-4"},[e("div",{class:"single-solutions "+n.class},[e("div",{staticClass:"solutions-content"},[e("h3",[e("NuxtLink",{attrs:{to:n.slug}},[t._v("\n                        "+t._s(n.title)+"\n                    ")])],1),t._v(" "),e("p",[t._v("\n                    "+t._s(n.shortDesc)+"\n                ")]),t._v(" "),e("NuxtLink",{staticClass:"read-more",attrs:{to:n.slug}},[t._v("\n                    "+t._s(n.btnText)+"\n                ")])],1)])])})),0)}),[],!1,null,null,null);n.default=component.exports},425:function(t,n,e){"use strict";e.r(n);var o=e(5),r=(e(29),e(377),{name:"Solutions",data:function(){return{solutions:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("http://localhost:1337/solutioncards");case 2:t.solutions=n.sent;case 3:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0}),l=e(9),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"solutions-area pb-70"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t.solutions!==[]?e("SolutionCard",{attrs:{singleSolutions:t.solutions}}):t._e()],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("h2",[t._v("High-Performance Solutions")]),t._v(" "),e("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])}],!1,null,null,null);n.default=component.exports}}]);