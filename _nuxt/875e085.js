(window.webpackJsonp=window.webpackJsonp||[]).push([[134,2,3,4,5,14,15,16],{347:function(t,e,n){"use strict";n.r(e);var r={name:"PageTitle",props:["pageTitle"]},c=n(6),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-area bg-1"},[n("div",{staticClass:"container"},[n("div",{staticClass:"page-title-content"},[n("h2",[t._v(t._s(t.pageTitle))]),t._v(" "),n("ul",[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                        Home \n                    ")])],1),t._v(" "),n("li",{staticClass:"activ"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){t.exports=n.p+"img/complete-shape.1f65170.png"},354:function(t,e,n){"use strict";n.r(e);var r,c=n(2),l=(n(22),n(70),{name:"Partner",data:function(){return{partners:[]}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("partners");case 2:this.partners=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partner-area ptb-100"},[n("div",{staticClass:"container"},[n("div",{staticClass:"partner-wrap owl-carousel owl-theme"},[t.partners!==[]?n("carousel",{attrs:{autplay:!0,loop:!0,paginationEnabled:!1,autoplaySpeed:!0,autoplayTimeout:500,perPageCustom:[[0,2],[576,3],[768,4],[1024,4],[1200,5]]}},t._l(t.partners,(function(e){return n("slide",{key:e.id},[n("div",{staticClass:"partner-item"},[n("img",{attrs:{src:e.img.url,alt:"Image"}}),t._v(" "),n("a",{staticClass:"partner-overly",attrs:{href:"#",target:"_blank"}},[n("img",{attrs:{src:e.imgTwo.url,alt:"Image"}})])])])})),1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,n){"use strict";n.r(e);var r,c=n(2),l=(n(22),n(70),{name:"Client",data:function(){return{clients:[]}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("clientwraps");case 2:this.clients=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client-area ptb-100"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"client-wrap owl-carousel owl-theme"},[t.clients!==[]?n("carousel",{attrs:{autplay:!0,loop:!0,paginationEnabled:!1,autoplaySpeed:!0,autoplayTimeout:500,perPageCustom:[[0,1],[576,1],[768,2],[992,3],[1200,3]]}},t._l(t.clients,(function(e){return n("slide",{key:e.id},[n("div",{staticClass:"single-client"},[n("i",{staticClass:"quotes bx bxs-quote-alt-left"}),t._v(" "),n("p",[t._v("\n                            "+t._s(e.shortDesc)+"\n                        ")]),t._v(" "),n("ul",[n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})]),t._v(" "),n("li",[n("i",{staticClass:"bx bxs-star"})])]),t._v(" "),n("div",{staticClass:"client-img"},[n("img",{attrs:{src:e.img.url,alt:"Image"}}),t._v(" "),n("h3",[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),n("span",[t._v("\n                                "+t._s(e.position)+"\n                            ")])])])])})),1):t._e()],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title white-title"},[n("h2",[t._v("What Client’s Say About Us")]),t._v(" "),n("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.")])])}],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var r,c=n(2),l=(n(22),n(70),{name:"Cybersecurity",data:function(){return{cybersecurity:null}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("cybersecurity");case 2:this.cybersecurity=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cybersecurity-area ptb-100"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[null!==t.cybersecurity?n("div",{staticClass:"cybersecurity-content"},[n("h2",[t._v("\n                        "+t._s(t.cybersecurity.heading)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                        "+t._s(t.cybersecurity.shortDesc)+"\n                    ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 col-sm-6"},[n("ul",{staticClass:"cybersecurity-item"},t._l(t.cybersecurity.items,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v("\n                                    "+t._s(e.text)+"\n                                ")])})),0)]),t._v(" "),n("div",{staticClass:"col-lg-6 col-sm-6"},[n("ul",t._l(t.cybersecurity.itemsTwo,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v("\n                                    "+t._s(e.text)+"\n                                ")])})),0)])])]):t._e()]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 pr-0"},[e("div",{staticClass:"cybersecurity-img"})])}],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n.r(e);var r,c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 pl-0"},[e("div",{staticClass:"complete-img"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"complete-shape"},[e("img",{attrs:{src:n(348),alt:"Image"}})])}],l=n(2),o=(n(22),n(70),{name:"Complete",data:function(){return{completed:[]}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("completecards");case 2:this.completed=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),v=n(6),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"complete-area pb-100"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"complete-content"},[n("h2",[t._v("The most Complete and Effective Protection for Your Home and Office")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit incididunt ut labore et dolore magna aliqua.")]),t._v(" "),t.completed!==[]?n("div",{staticClass:"row"},t._l(t.completed,(function(e){return n("div",{key:e.id,staticClass:"col-lg-6 col-sm-6"},[n("div",{staticClass:"single-security"},[n("i",{class:e.icon}),t._v(" "),n("h3",[t._v("\n                                    "+t._s(e.title)+"\n                                ")]),t._v(" "),n("p",[t._v("\n                                    "+t._s(e.shortDesc)+"\n                                ")])])])})),0):t._e()])])])]),t._v(" "),t._m(1)])}),c,!1,null,null,null);e.default=component.exports},461:function(t,e,n){"use strict";n.r(e);var r,c=n(2),l=(n(22),n(70),{name:"Electronic",data:function(){return{electronic:null}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("electronic");case 2:this.electronic=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"electronic-area bg-color ptb-100"},[n("div",{staticClass:"container"},[null!==t.electronic?n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"electronic-content"},[n("h2",[t._v("\n                        "+t._s(t.electronic.heading)+"\n                    ")]),t._v(" "),n("div",{staticClass:"electronic-tab-wrap"},[n("div",{staticClass:"electronic-tab"},[n("b-card",{attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:""}},t._l(t.electronic.tabs,(function(e){return n("b-tab",{key:e.id,attrs:{title:e.title}},[n("b-card-text",[n("span",{domProps:{innerHTML:t._s(e.longDesc)}})]),t._v(" "),n("NuxtLink",{staticClass:"default-btn",attrs:{to:"/about-us"}},[t._v("\n                                            "+t._s(e.btnDesc)+"\n                                        ")])],1)})),1)],1)],1)])])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"electronic-img"},[n("img",{attrs:{src:t.electronic.img.url,alt:"Image"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);var r,c=n(2),l=(n(22),n(70),{name:"Approach",data:function(){return{content:null}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.find("approach");case 2:this.content=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"approach-area ptb-100"},[n("div",{staticClass:"container"},[null!==t.content?n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"approach-img"},[n("img",{attrs:{src:t.content.img.url,alt:"Image"}})])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"approach-content"},[n("h2",[t._v("\n                        "+t._s(t.content.heading)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                        "+t._s(t.content.shortDesc)+"\n                    ")]),t._v(" "),n("ul",t._l(t.content.lists,(function(e){return n("li",{key:e.id},[n("i",{class:e.icon}),t._v(" "),n("h3",[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v(" "),n("p",[t._v("\n                                "+t._s(e.shortDesc)+"\n                            ")])])})),0)])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},494:function(t,e,n){"use strict";n.r(e);var r=n(145),c=n(347),l=n(459),o=n(460),v=n(461),d=n(462),_=n(357),m=n(354),f=n(144),h={components:{Navbar:r.a,PageTitle:c.default,Cybersecurity:l.default,Complete:o.default,Electronic:v.default,Approach:d.default,Client:_.default,Partner:m.default,Footer:f.a}},C=n(6),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("PageTitle",{attrs:{pageTitle:"About"}}),t._v(" "),n("Cybersecurity"),t._v(" "),n("Complete"),t._v(" "),n("Electronic"),t._v(" "),n("Approach"),t._v(" "),n("Client"),t._v(" "),n("Partner"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);