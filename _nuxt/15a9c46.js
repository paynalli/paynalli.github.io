(window.webpackJsonp=window.webpackJsonp||[]).push([[176,22,145],{582:function(t,e,l){"use strict";l.r(e);var n={name:"PageTitle",props:["pageTitle"]},c=l(38),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title-area bg-1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"page-title-content"},[e("h2",[t._v(t._s(t.pageTitle))]),t._v(" "),e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n                        "+t._s("en"===t.$i18n.locale?"Home":"Inicio")+"\n                    ")])],1),t._v(" "),e("li",{staticClass:"activ"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},590:function(t,e,l){"use strict";l.r(e);l(52);var n={name:"Team",props:["team"]},c=l(38),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team-area ptb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[e("h2",[t._v(t._s(t.team.meetTheTeamTitle))]),t._v(" "),e("p",[t._v("\n                "+t._s(t.team.meetTheTeamSubtitle)+"\n            ")])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.team.meetTheTeam,(function(l){return e("div",{key:l.id,staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"single-team"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:l.img.url,alt:"image"}}),t._v(" "),t._l(l.socials,(function(t){return e("ul",{key:t.id,staticClass:"social"},[e("li",[e("a",{attrs:{href:t.url,target:"_blank"}},[e("i",{class:t.icon})])])])}))],2),t._v(" "),e("div",{staticClass:"content"},[e("h3",[t._v(t._s(l.name))]),t._v(" "),e("span",[t._v(t._s(l.position))])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e,l){"use strict";l.r(e);var n=l(257),c=l(582),r=l(590),o=l(256),v={components:{Navbar:n.a,PageTitle:c.default,Team:r.default,Footer:o.a}},_=l(38),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("PageTitle",{attrs:{pageTitle:"Team"}}),t._v(" "),e("Team"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Team:l(590).default})}}]);