(window.webpackJsonp=window.webpackJsonp||[]).push([[158,15,80,120,121],{353:function(t,e,n){"use strict";n.r(e);var r={name:"PageTitle",props:["pageTitle"]},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-area bg-1"},[n("div",{staticClass:"container"},[n("div",{staticClass:"page-title-content"},[n("h2",[t._v(t._s(t.pageTitle))]),t._v(" "),n("ul",[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                        Home \n                    ")])],1),t._v(" "),n("li",{staticClass:"activ"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var r={name:"SolutionCard",props:["singleSolutions"]},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.singleSolutions,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4"},[n("div",{class:"single-solutions "+e.class},[n("div",{staticClass:"solutions-content"},[n("h3",[n("NuxtLink",{attrs:{to:e.slug}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1),t._v(" "),n("p",[t._v("\n                    "+t._s(e.shortDesc)+"\n                ")]),t._v(" "),n("NuxtLink",{staticClass:"read-more",attrs:{to:e.slug}},[t._v("\n                    "+t._s(e.btnText)+"\n                ")])],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";n.r(e);var r,l=n(2),c=(n(23),n(73),{name:"Security",data:function(){return{completed:[]}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("completecards");case 2:this.completed=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"security-area pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t.completed!==[]?n("div",{staticClass:"row"},t._l(t.completed,(function(e){return n("div",{key:e.id,staticClass:"col-lg-3 col-sm-6"},[n("div",{staticClass:"single-security"},[n("i",{class:e.icon}),t._v(" "),n("h3",[t._v("\n                        "+t._s(e.title)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                        "+t._s(e.shortDesc)+"\n                    ")])])])})),0):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h2",[t._v("Complete Website Security")]),t._v(" "),n("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.")])])}],!1,null,null,null);e.default=component.exports},492:function(t,e,n){"use strict";n.r(e);var r,l=n(2),c=(n(23),n(73),{name:"Solutions",components:{SolutionCard:n(365).default},data:function(){return{solutions:[]}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("solutioncards");case 2:this.solutions=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solutions-area section-width pb-100"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t.solutions!==[]?n("SolutionCard",{attrs:{singleSolutions:t.solutions}}):t._e(),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h2",[t._v("High-Performance Solutions")]),t._v(" "),n("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-navigation-area"},[n("nav",{attrs:{"aria-label":"Page navigation example text-center"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link page-links",attrs:{href:"#"}},[n("i",{staticClass:"bx bx-chevrons-left"})])]),t._v(" "),n("li",{staticClass:"page-item active"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[n("i",{staticClass:"bx bx-chevrons-right"})])])])])])}],!1,null,null,null);e.default=component.exports},522:function(t,e,n){"use strict";n.r(e);var r=n(149),l=n(353),c=n(491),o=n(492),v=n(148),_={components:{Navbar:r.a,PageTitle:l.default,Security:c.default,Solutions:o.default,Footer:v.a}},d=n(6),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("PageTitle",{attrs:{pageTitle:"Services Style One"}}),t._v(" "),n("Security"),t._v(" "),n("Solutions"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);