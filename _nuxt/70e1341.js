(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{607:function(t,e,c){"use strict";c.r(e);var r=c(22),n=(c(57),{name:"Cybersecurity",data:function(){return{cybersecurity:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("".concat("http://192.168.0.100:1337","/cybersecurity?_locale=")+t.$i18n.locale);case 2:t.cybersecurity=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0}),l=c(38),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cybersecurity-area pt-100"},[e("div",{staticClass:"container-fluid"},[null!==t.cybersecurity?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"cybersecurity-content"},[e("h2",[t._v("\n            "+t._s(t.cybersecurity.heading)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.cybersecurity.shortDesc)+"\n          ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-sm-6"},[e("ul",{staticClass:"cybersecurity-item"},t._l(t.cybersecurity.items,(function(c){return e("li",{key:c.id},[e("i",{class:c.icon}),t._v("\n                  "+t._s(c.text)+"\n                ")])})),0)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-sm-6"},[e("ul",t._l(t.cybersecurity.itemsTwo,(function(c){return e("li",{key:c.id},[e("i",{class:c.icon}),t._v("\n                  "+t._s(c.text)+"\n                ")])})),0)])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 pr-0"},[e("div",{staticClass:"cybersecurity-img",style:"background-image: url("+t.cybersecurity.bg.url+") !important"})])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);