(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{460:function(t,e,n){"use strict";n.r(e);var r,c=n(2),o=(n(23),n(73),{name:"PricingTwo",data:function(){return{pricings:[]}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("pricingstwos");case 2:this.pricings=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pricing-area-page pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t.pricings!==[]?n("div",{staticClass:"row"},t._l(t.pricings,(function(e){return n("div",{key:e.id,staticClass:"col-lg-4 col-md-6 justify-content-center"},[n("div",{staticClass:"single-pricing"},[n("div",{staticClass:"pricing-content"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h1",[t._v(t._s(e.price)+" "),n("sub",[t._v("/ per month")])])]),t._v(" "),n("ul",t._l(e.features,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v("\n                            "+t._s(e.text)+"\n                        ")])})),0),t._v(" "),n("a",{staticClass:"default-btn",attrs:{href:"#"}},[t._v("\n                        "+t._s(e.btnText)+"\n                    ")])])])})),0):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("h2",[t._v("Buy Our Plans & Packages Monthly")]),t._v(" "),n("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])}],!1,null,null,null);e.default=component.exports}}]);