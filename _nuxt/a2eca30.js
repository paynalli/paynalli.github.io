(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{640:function(t,e,n){"use strict";n.r(e);n(52);var l=n(22),o=(n(57),{name:"Testimonials",data:function(){return{testimonials:null}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("".concat("http://192.168.0.229:1337","/client-testimonials?_locale=")+t.$i18n.locale);case 2:t.testimonials=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0}),r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return null!==t.testimonials?e("section",{staticClass:"testimonials-area bg-color-f9f9f9 pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title-six"},[e("span",[t._v(t._s(t.testimonials.upper_title))]),t._v(" "),e("h2",[t._v(t._s(t.testimonials.title))])]),t._v(" "),e("div",{staticClass:"testimonials"},[e("div",{staticClass:"testimonials-slider owl-carousel owl-theme"},[e("carousel",{attrs:{autoplay:!0,loop:!0,paginationEnabled:!1,navigationEnabled:!0,navigationNextLabel:"<i class='bx bx-right-arrow-alt'></i>",navigationPrevLabel:"<i class='bx bx-left-arrow-alt'></i>",perPageCustom:[[0,1]]}},t._l(t.testimonials.testimonials,(function(n){return e("slide",{key:n.id},[e("div",{staticClass:"testimonials-item"},[e("p",[t._v("“"+t._s(n.text)+"”")]),t._v(" "),e("div",{staticClass:"testimonials-view"},[e("img",{attrs:{src:n.img.url,alt:"Our client picture"}}),t._v(" "),e("h3",[t._v(t._s(n.name))]),t._v(" "),e("span",[t._v(t._s(n.job))])])])])})),1)],1),t._v(" "),e("i",{staticClass:"quote bx bxs-quote-alt-right"})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);