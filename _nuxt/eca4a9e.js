(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{357:function(t,e,n){"use strict";n.r(e);var l,r=n(2),c=(n(22),n(70),{name:"Client",data:function(){return{clients:[]}},created:(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("clientwraps");case 2:this.clients=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})}),o=n(6),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client-area ptb-100"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"client-wrap owl-carousel owl-theme"},[t.clients!==[]?n("carousel",{attrs:{autplay:!0,loop:!0,paginationEnabled:!1,autoplaySpeed:!0,autoplayTimeout:500,perPageCustom:[[0,1],[576,1],[768,2],[992,3],[1200,3]]}},t._l(t.clients,(function(e){return n("slide",{key:e.id},[n("div",{staticClass:"single-client"},[n("i",{staticClass:"quotes bx bxs-quote-alt-left"}),t._v(" "),n("p",[t._v("\n                            "+t._s(e.shortDesc)+"\n                        ")]),t._v(" "),n("ul",[n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})])]),t._v(" "),n("div",{staticClass:"client-img"},[n("img",{attrs:{src:e.img.url,alt:"Image"}}),t._v(" "),n("h3",[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),n("span",[t._v("\n                                "+t._s(e.position)+"\n                            ")])])])])})),1):t._e()],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title white-title"},[n("h2",[t._v("What Client’s Say About Us")]),t._v(" "),n("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])}],!1,null,null,null);e.default=component.exports}}]);