(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{607:function(t,n,e){var content=e(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(88).default)("8a279124",content,!0,{sourceMap:!1})},625:function(t,n,e){var r=e(87)((function(i){return i[1]}));r.push([t.i,'@keyframes vm-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes vm-fadeOut{0%{opacity:1}to{opacity:0}}.vm-backdrop,.vm-wrapper{bottom:0;left:0;position:fixed;right:0;top:0}.vm-backdrop{background-color:rgba(0,0,0,.5)}.vm-wrapper{outline:0;overflow-x:hidden;overflow-y:auto}.vm{background-color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.5);cursor:default;margin:0 auto;max-width:500px;min-width:110px;position:relative;top:30px;width:calc(100% - 20px)}.vm-titlebar{border-bottom:1px solid #e5e5e5;overflow:auto;padding:10px 15px}.vm-title{display:inline-block;font-size:18px;font-weight:400;margin-bottom:0;margin-top:2px}.vm-btn-close{background:0 0;border:0;color:#ccc;cursor:pointer;float:right;font-size:24px;line-height:1em;padding:0}.vm-btn-close:before{content:"×";font-family:Arial}.vm-btn-close:focus,.vm-btn-close:focus:hover,.vm-btn-close:hover{background-color:transparent;border-color:transparent;color:#bbb}.vm-content{padding:10px 15px 15px}.vm-content .full-hr{border:0;border-top:1px solid #e5e5e5;margin:15px -14px;width:auto}.vm-fadeIn{animation-name:vm-fadeIn}.vm-fadeOut{animation-name:vm-fadeOut}.vm-fadeIn,.vm-fadeOut{animation-duration:.25s;animation-fill-mode:both}',""]),r.locals={},t.exports=r},698:function(t,n,e){"use strict";e.r(n);e(58),e(73);var r=e(22),o=(e(57),e(607),{name:"Banner",components:{},data:function(){return{banner:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("".concat("http://192.168.0.229:1337","/software-engineering-main-banner?_locale=")+t.$i18n.locale);case 2:t.banner=n.sent;case 3:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0,methods:{redirectToPage:function(){window.location.href="paynalli.com/contact"}}}),c=e(38),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return null!==t.banner?n("div",{staticClass:"banner-area-six"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"banner-text"},[n("h1",[t._v(t._s(t.banner.title))]),t._v(" "),n("p",[t._v("\n            "+t._s(t.banner.description)+"\n          ")])]),t._v(" "),t.banner.btnOne_text?n("a",{staticClass:"default-btn six"},[t._v("\n          "+t._s(t.banner.btnOne_text)+"\n        ")]):t._e(),t._v(" "),t.banner.btnTwo_text?n("a",{staticClass:"default-btn six",attrs:{href:t.banner.btnTwo_url,target:"_blank"}},[t._v("\n          "+t._s(t.banner.btnTwo_text)+"\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"banner-img"},[n("img",{attrs:{src:t.banner.img.url,alt:"Banner Image"}})])])])]),t._v(" "),n("div",{staticClass:"banner-shape-1"},[n("img",{attrs:{src:t.banner.shape1.url,alt:"Shape 1"}})]),t._v(" "),n("div",{staticClass:"banner-shape-2"},[n("img",{attrs:{src:t.banner.shape2.url,alt:"Shape 2"}})])]):t._e()}),[],!1,null,null,null);n.default=component.exports}}]);