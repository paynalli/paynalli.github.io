(window.webpackJsonp=window.webpackJsonp||[]).push([[136,6,11,15],{353:function(t,e,l){"use strict";l.r(e);var n={name:"PageTitle",props:["pageTitle"]},r=l(6),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-title-area bg-1"},[l("div",{staticClass:"container"},[l("div",{staticClass:"page-title-content"},[l("h2",[t._v(t._s(t.pageTitle))]),t._v(" "),l("ul",[l("li",[l("NuxtLink",{attrs:{to:"/"}},[t._v("\n                        Home \n                    ")])],1),t._v(" "),l("li",{staticClass:"activ"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,l){"use strict";l.r(e);var n={name:"BlogCard",props:["singleBlog"]},r=l(6),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},t._l(t.singleBlog,(function(e){return l("div",{key:e.id,staticClass:"col-lg-4 col-sm-6 justify-content-center"},[l("div",{staticClass:"single-blog"},[l("img",{attrs:{src:e.img.url,alt:"Image"}}),t._v(" "),l("div",{staticClass:"blog-content"},[l("h3",[l("NuxtLink",{attrs:{to:"/blog/"+e.slug}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1),t._v(" "),l("p",[t._v("\n                    "+t._s(e.shortDesc)+"\n                ")]),t._v(" "),l("NuxtLink",{staticClass:"read-more",attrs:{to:"/blog/"+e.slug}},[t._v("\n                    "+t._s(e.btnText)+"\n                ")])],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,l){"use strict";l.r(e);var n,r=l(2),c=(l(23),l(73),{name:"BlogArea",components:{BlogCard:l(364).default},data:function(){return{posts:[]}},created:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("blogcards");case 2:this.posts=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}),o=l(6),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-area ptb-100"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[t.posts!==[]?l("BlogCard",{attrs:{singleBlog:t.posts}}):t._e(),t._v(" "),t._m(1)],1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"section-title"},[l("h2",[t._v("Latest News From Blog")]),t._v(" "),l("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"page-navigation-area"},[l("nav",{attrs:{"aria-label":"Page navigation example text-center"}},[l("ul",{staticClass:"pagination"},[l("li",{staticClass:"page-item"},[l("a",{staticClass:"page-link page-links",attrs:{href:"#"}},[l("i",{staticClass:"bx bx-chevrons-left"})])]),t._v(" "),l("li",{staticClass:"page-item active"},[l("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),l("li",{staticClass:"page-item"},[l("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),l("li",{staticClass:"page-item"},[l("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),l("li",{staticClass:"page-item"},[l("a",{staticClass:"page-link",attrs:{href:"#"}},[l("i",{staticClass:"bx bx-chevrons-right"})])])])])])])}],!1,null,null,null);e.default=component.exports},502:function(t,e,l){"use strict";l.r(e);var n=l(149),r=l(353),c=l(455),o=l(148),v={components:{Navbar:n.a,PageTitle:r.default,BlogArea:c.default,Footer:o.a}},_=l(6),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Navbar"),t._v(" "),l("PageTitle",{attrs:{pageTitle:"Blog Grid"}}),t._v(" "),l("BlogArea"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArea:l(455).default})}}]);