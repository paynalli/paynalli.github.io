(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{638:function(t,r,e){"use strict";e.r(r);var n=e(22),c=(e(57),{name:"Partner",data:function(){return{partners:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.$get("".concat("http://192.168.0.229:1337","/sse-parners"));case 2:t.partners=r.sent;case 3:case"end":return r.stop()}}),r)})))()},fetchOnServer:!0}),o=e(38),component=Object(o.a)(c,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"partner-area bg-color-f9f9f9 ptb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"partner-slider-six owl-carousel owl-theme"},[r("carousel",{attrs:{autoplay:!0,loop:!0,paginationEnabled:!1,perPageCustom:[[0,1],[576,2],[768,2],[992,3],[1200,4]]}},t._l(t.partners,(function(t){return r("slide",{key:t.id},[r("div",{staticClass:"partner-item"},[r("a",{attrs:{href:t.url}},[r("img",{attrs:{src:t.img.url,alt:"Paynalli Partner"}})])])])})),1)],1)])])}),[],!1,null,null,null);r.default=component.exports}}]);