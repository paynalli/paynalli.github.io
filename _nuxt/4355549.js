(window.webpackJsonp=window.webpackJsonp||[]).push([[172,22,101,131,132],{582:function(t,e,n){"use strict";n.r(e);var r={name:"PageTitle",props:["pageTitle"]},l=n(38),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title-area bg-1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"page-title-content"},[e("h2",[t._v(t._s(t.pageTitle))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n                        "+t._s("en"===t.$i18n.locale?"Home":"Inicio")+"\n                    ")])],1),t._v(" "),e("li",{staticClass:"activ"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var r={name:"SolutionCard",props:["singleSolutions"]},l=n(38),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},t._l(t.singleSolutions,(function(n){return e("div",{key:n.id,staticClass:"col-lg-4"},[e("div",{class:"single-solutions ".concat(n.class)},[e("div",{staticClass:"solutions-content"},[e("h3",[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("p",[t._v("\n          "+t._s(n.shortDesc)+"\n        ")]),t._v(" "),n.url?t._e():e("NuxtLink",{staticClass:"read-more",attrs:{to:n.slug}},[t._v("\n          "+t._s(n.btnText)+"\n        ")]),t._v(" "),n.url?e("a",{staticClass:"read-more",attrs:{href:n.url,target:"_blank"}},[t._v("\n          "+t._s(n.btnText)+"\n        ")]):t._e()],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports},768:function(t,e,n){"use strict";n.r(e);var r,l=n(22),o=(n(57),n(181),n(44),{name:"Security",data:function(){return{completed:[]}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("completecards");case 2:this.completed=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),c=o,v=n(38),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"security-area pt-100 pb-70"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t.completed!==[]?e("div",{staticClass:"row"},t._l(t.completed,(function(n){return e("div",{key:n.id,staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"single-security"},[e("i",{class:n.icon}),t._v(" "),e("h3",[t._v("\n                        "+t._s(n.title)+"\n                    ")]),t._v(" "),e("p",[t._v("\n                        "+t._s(n.shortDesc)+"\n                    ")])])])})),0):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title"},[e("h2",[t._v("Complete Website Security")]),t._v(" "),e("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.")])])}],!1,null,null,null);e.default=component.exports},769:function(t,e,n){"use strict";n.r(e);var r,l=n(22),o=(n(57),n(181),n(44),{name:"Solutions",components:{SolutionCard:n(583).default},data:function(){return{solutions:[]}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("solutioncards");case 2:this.solutions=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),c=o,v=n(38),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"solutions-area section-width pb-100"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t.solutions!==[]?e("SolutionCard",{attrs:{singleSolutions:t.solutions}}):t._e(),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title"},[e("h2",[t._v("High-Performance Solutions")]),t._v(" "),e("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-navigation-area"},[e("nav",{attrs:{"aria-label":"Page navigation example text-center"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link page-links",attrs:{href:"#"}},[e("i",{staticClass:"bx bx-chevrons-left"})])]),t._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[e("i",{staticClass:"bx bx-chevrons-right"})])])])])])}],!1,null,null,null);e.default=component.exports},800:function(t,e,n){"use strict";n.r(e);var r=n(257),l=n(582),o=n(768),c=n(769),v=n(256),_={components:{Navbar:r.a,PageTitle:l.default,Security:o.default,Solutions:c.default,Footer:v.a}},d=n(38),component=Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("PageTitle",{attrs:{pageTitle:"Services Style One"}}),t._v(" "),e("Security"),t._v(" "),e("Solutions"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);