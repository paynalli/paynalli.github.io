(window.webpackJsonp=window.webpackJsonp||[]).push([[119,21,117],{581:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{sitekey:"6Les4UsfAAAAAFhn-Zyx0Rt1m989pA7mDFwYqm-e",vueWidgtId:0}},methods:{reset:function(){window.grecaptcha.reset(this.vueWidgtId)},render:function(){var e=this;window.grecaptcha&&(this.vueWidgtId=window.grecaptcha.render("g-recaptcha",{sitekey:this.sitekey,size:"normal",callback:function(t){e.$emit("verify",t)},"expired-callback":function(t){e.$emit("expired",t)}}))}},mounted:function(){this.render()}},r=n(38),component=Object(r.a)(o,(function(){return(0,this._self._c)("div",{staticClass:"g-recaptcha",attrs:{id:"g-recaptcha","data-sitekey":this.sitekey}})}),[],!1,null,null,null);t.default=component.exports},604:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));for(var o=n(18),r="-_",i=36;i--;)r+=i.toString(36);for(i=36;i---10;)r+=i.toString(36).toUpperCase();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c={selector:"vue-portal-target-".concat(function(e){var t="";for(i=e||21;i--;)t+=r[64*Math.random()|0];return t}())},d=function(e){return c.selector=e},f="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":l(document)),m=o.default.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var t=this.updatedNodes&&this.updatedNodes();return t?t.length<2&&!t[0].text?t:e(this.tag||"DIV",t):e()},destroyed:function(){var e=this.$el;e.parentNode.removeChild(e)}}),v=o.default.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(c.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var t=this.$scopedSlots&&this.$scopedSlots.default();return t?t.length<2&&!t[0].text?t:e(this.tag,t):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick((function(){e.disabled||e.slotFn===e.$scopedSlots.default||(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(f)return document.querySelector(this.selector)},insertTargetEl:function(){if(f){var e=document.querySelector("body"),t=document.createElement(this.tag);t.id=this.selector.substring(1),e.appendChild(t)}},mount:function(){var e=this.getTargetEl(),t=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),this.container=new m({el:t,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});"undefined"!=typeof window&&window.Vue&&window.Vue===o.default&&o.default.use((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.name||"portal",v),t.defaultSelector&&d(t.defaultSelector)}));var h={type:[String,Object,Array],default:""},C='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',y=0,script={name:"VueModal",components:{Portal:v},model:{prop:"basedOn",event:"close"},props:{title:{type:String,default:""},baseZindex:{type:Number,default:1051},bgClass:h,wrapperClass:h,modalClass:h,modalStyle:h,inClass:Object.assign({},h,{default:"vm-fadeIn"}),outClass:Object.assign({},h,{default:"vm-fadeOut"}),bgInClass:Object.assign({},h,{default:"vm-fadeIn"}),bgOutClass:Object.assign({},h,{default:"vm-fadeOut"}),appendTo:{type:String,default:"body"},live:{type:Boolean,default:!1},enableClose:{type:Boolean,default:!0},basedOn:{type:Boolean,default:!1},closeLabel:{type:String,default:"Close"}},data:function(){return{zIndex:0,id:null,show:!1,mount:!1,elToFocus:null}},created:function(){this.live&&(this.mount=!0)},mounted:function(){this.id="vm-"+this._uid,this.$watch("basedOn",(function(e){var t=this;e?(this.mount=!0,this.$nextTick((function(){t.show=!0}))):this.show=!1}),{immediate:!0})},beforeDestroy:function(){this.elToFocus=null},methods:{close:function(){!0===this.enableClose&&this.$emit("close",!1)},clickOutside:function(e){e.target===this.$refs["vm-wrapper"]&&this.close()},keydown:function(e){if(27!==e.which&&27!==e.keyCode||this.close(),9===e.which||9===e.keyCode){var t=[].slice.call(this.$refs["vm-wrapper"].querySelectorAll(C)).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}));e.shiftKey?e.target!==t[0]&&e.target!==this.$refs["vm-wrapper"]||(e.preventDefault(),t[t.length-1].focus()):e.target===t[t.length-1]&&(e.preventDefault(),t[0].focus())}},getAllVisibleWrappers:function(){return[].slice.call(document.querySelectorAll("[data-vm-wrapper-id]")).filter((function(e){return"none"!==e.display}))},getTopZindex:function(){return this.getAllVisibleWrappers().reduce((function(e,t){return parseInt(t.style.zIndex)>e?parseInt(t.style.zIndex):e}),0)},handleFocus:function(e){var t=e.querySelector("[autofocus]");if(t)t.focus();else{var n=e.querySelectorAll(C);n.length?n[0].focus():e.focus()}},beforeOpen:function(){this.elToFocus=document.activeElement;var e=this.getTopZindex();this.zIndex=y?y+2:0===e?this.baseZindex:e+2,y=this.zIndex,this.$emit("before-open")},opening:function(){this.$emit("opening")},afterOpen:function(){this.handleFocus(this.$refs["vm-wrapper"]),this.$emit("after-open")},beforeClose:function(){this.$emit("before-close")},closing:function(){this.$emit("closing")},afterClose:function(){var e=this;this.zIndex=0,this.live||(this.mount=!1),this.$nextTick((function(){window.requestAnimationFrame((function(){var t=e.getTopZindex();if(t>0)for(var n=e.getAllVisibleWrappers(),i=0;i<n.length;i++){var o=n[i];if(parseInt(o.style.zIndex)===t){o.contains(e.elToFocus)?e.elToFocus.focus():e.handleFocus(o);break}}else document.body.contains(e.elToFocus)&&e.elToFocus.focus();y=0,e.$emit("after-close")}))}))}}};function w(template,style,script,e,t,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);var d,f="function"==typeof script?script.options:script;if(template&&template.render&&(f.render=template.render,f.staticRenderFns=template.staticRenderFns,f._compiled=!0,t&&(f.functional=!0)),e&&(f._scopeId=e),n?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},f._ssrRegister=d):style&&(d=o?function(e){style.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){style.call(this,r(e))}),d)if(f.functional){var m=f.render;f.render=function(e,t){return d.call(t),m(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,d):[d]}return script}var x=script,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mount?n("portal",{attrs:{selector:e.appendTo}},[n("transition",{attrs:{name:"vm-backdrop-transition","enter-active-class":e.bgInClass,"leave-active-class":e.bgOutClass}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"vm-backdrop",class:e.bgClass,style:{"z-index":e.zIndex-1},attrs:{"data-vm-backdrop-id":e.id}})]),e._v(" "),n("transition",{attrs:{name:"vm-transition","enter-active-class":e.inClass,"leave-active-class":e.outClass},on:{"before-enter":e.beforeOpen,enter:e.opening,"after-enter":e.afterOpen,"before-leave":e.beforeClose,leave:e.closing,"after-leave":e.afterClose}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"vm-wrapper",staticClass:"vm-wrapper",class:e.wrapperClass,style:{"z-index":e.zIndex,cursor:e.enableClose?"pointer":"default"},attrs:{"data-vm-wrapper-id":e.id,tabindex:"-1",role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.id+"-content","aria-labelledby":e.id+"-title"},on:{click:function(t){return e.clickOutside(t)},keydown:function(t){return e.keydown(t)}}},[n("div",{ref:"vm",staticClass:"vm",class:e.modalClass,style:e.modalStyle,attrs:{"data-vm-id":e.id}},[e._t("titlebar",(function(){return[n("div",{staticClass:"vm-titlebar"},[n("h3",{staticClass:"vm-title",attrs:{id:e.id+"-title"}},[e._v("\n              "+e._s(e.title)+"\n            ")]),e._v(" "),e.enableClose?n("button",{staticClass:"vm-btn-close",attrs:{type:"button","aria-label":e.closeLabel},on:{click:function(t){return t.preventDefault(),e.close.apply(null,arguments)}}}):e._e()])]})),e._v(" "),e._t("content",(function(){return[n("div",{staticClass:"vm-content",attrs:{id:e.id+"-content"}},[e._t("default")],2)]}))],2)])])],1):e._e()};_._withStripped=!0;var S=w({render:_,staticRenderFns:[]},undefined,x,undefined,false,undefined,!1,void 0,void 0,void 0)},606:function(e,t,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(86).default)("3fe580e4",content,!0,{sourceMap:!1})},612:function(e,t,n){var o=n(85)(!1);o.push([e.i,'@keyframes vm-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes vm-fadeOut{0%{opacity:1}to{opacity:0}}.vm-backdrop,.vm-wrapper{position:fixed;top:0;right:0;bottom:0;left:0}.vm-backdrop{background-color:rgba(0,0,0,.5)}.vm-wrapper{overflow-x:hidden;overflow-y:auto;outline:0}.vm{position:relative;margin:0 auto;width:calc(100% - 20px);min-width:110px;max-width:500px;background-color:#fff;top:30px;cursor:default;box-shadow:0 5px 15px rgba(0,0,0,.5)}.vm-titlebar{padding:10px 15px;overflow:auto;border-bottom:1px solid #e5e5e5}.vm-title{margin-top:2px;margin-bottom:0;display:inline-block;font-size:18px;font-weight:400}.vm-btn-close{color:#ccc;padding:0;cursor:pointer;background:0 0;border:0;float:right;font-size:24px;line-height:1em}.vm-btn-close:before{content:"×";font-family:Arial}.vm-btn-close:focus,.vm-btn-close:focus:hover,.vm-btn-close:hover{color:#bbb;border-color:transparent;background-color:transparent}.vm-content{padding:10px 15px 15px}.vm-content .full-hr{width:auto;border:0;border-top:1px solid #e5e5e5;margin:15px -14px}.vm-fadeIn{animation-name:vm-fadeIn}.vm-fadeOut{animation-name:vm-fadeOut}.vm-fadeIn,.vm-fadeOut{animation-duration:.25s;animation-fill-mode:both}',""]),e.exports=o},626:function(e,t,n){"use strict";n.r(t);var o=n(22),r=(n(54),n(57),n(581)),l=n(340),c=n.n(l),d=n(615),f=(n(627),{name:"DevelopWithUsForm",components:{ReCAPTCHA:r.default},data:function(){return{areaValue:null,projectDetails:null,sendNDA:!1,isCAPTCHAVerified:!1,isCAPTCHAError:!1,isDocUploaded:!1,isDocError:!1,textarea:{resize:"none"},fileUrl:null}},methods:{handleSubmit:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isCAPTCHAVerified&&e.isDocUploaded?(null,null,r=null,l=d.a.storage().ref(),c.a.post("http://localhost:8080/v1/create-develop-with-us-form",data).then(n=JSON.stringify(data),o=new Blob([n],{type:"application/json"}),r=l.child("/dev-with-us/response-"+data.company+".json"),r.put(o).then(e.isCAPTCHAError=!1,e.$swal({icon:"success",title:"Thank you!",text:"We have recieved your response and we will get in touch with you soon.",confirmButtonText:"Close"}).then((function(t){t.isConfirmed&&e.$emit("closeModal")}))).catch((function(t){return e.$swal({icon:"error",title:"Could not save response",text:t.message,confirmButtonColor:"#d33"})}))).catch((function(t){return e.$swal({icon:"error",title:"Could not process response to API",text:t.message,confirmButtonColor:"#d33"})}))):e.isCAPTCHAVerified?e.isDocUploaded||(e.isDocError=!0):e.isCAPTCHAError=!0;case 1:case"end":return t.stop()}}),t)})))()},uploadFile:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((o=d.a.storage().ref("/dev-with-us/requirement-docs/".concat(e.name)).put(e)).on("state_changed",(function(e){t.uploadValue=e.bytesTransferred/e.totalBytes*100}),(function(e){t.$swal({icon:"error",title:"Upload of requirements document failed.",text:e,confirmButtonColor:"#d33"})}),(function(){t.uploadValue=100,o.snapshot.ref.getDownloadURL().then((function(e){t.fileUrl=e})),t.isDocUploaded=!0})),null===t.fileUrl){n.next=4;break}return n.abrupt("return",{url:t.fileUrl,name:e.name});case 4:case"end":return n.stop()}}),n)})))()}},beforeCreate:function(){d.a.initializeApp({apiKey:"AIzaSyB5w7vVqArM0rz6pRW-g_h3mUzvGYynpX8",authDomain:"paynalli.firebaseapp.com",projectId:"paynalli",storageBucket:"paynalli.appspot.com",messagingSenderId:"515914515467",appId:"1:515914515467:web:2a332f93e5ed708e51330e",measurementId:"G-680WMJ5S78"})}}),m=n(38),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("FormulateForm",{ref:"form",attrs:{name:"developForm"},on:{submit:e.handleSubmit}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"fullName",label:"Full Name *",validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"email",name:"email",label:"Email *",validation:"email","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"mobile",label:"Mobile Number",validation:"number","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"company",label:"Company Name *",validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"select",name:"services",placeholder:"Select your services *",options:{service1:"Service 1",service2:"Service 2",service3:"Service 3",service4:"Service 4"},validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"select",name:"budget",placeholder:"Select your budget *",options:{tenK:"0K - 10K USD",twoFiveK:"10k - 25K USD",fiveZeroK:"25K - 50K USD",sevenFiveK:"50K - 75K USD",oneHundredK:"75K - 100K USD",moreThanOneHundredK:"100K+ USD"},validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("FormulateInput",{attrs:{type:"textarea",name:"projectDetails",label:"Project Details *","input-class":"w-100 textarea-noresize",validation:"required","error-class":"text-danger",rows:"3"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}}),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{staticClass:"custom-file",attrs:{type:"file",name:"requirementsDoc","input-class":"custom-file-input","label-class":"custom-file-label",label:"Select your requirements document *",validation:"mime:application/pdf|required","error-class":"text-danger",uploader:e.uploadFile}}),e._v(" "),e.isDocError?t("p",{staticClass:"text-danger"},[e._v("File not uploaded yet.")]):e._e()],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"checkbox",name:"sendNDA",label:"Send NDA","wrapper-class":"row","input-class":"mx-3"},model:{value:e.sendNDA,callback:function(t){e.sendNDA=t},expression:"sendNDA"}})],1)])]),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6"},[t("ReCAPTCHA",{on:{verify:function(t){e.isCAPTCHAVerified=!0},expired:function(t){e.isCAPTCHAVerified=!1}}}),e._v(" "),e.isCAPTCHAError?t("p",{staticClass:"text-danger"},[e._v("\n          You must prove you are not a robot.\n        ")]):e._e()],1),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("button",{staticClass:"default-btn page-btn",attrs:{type:"submit"}},[e._v("Send")])])])],1)])}),[],!1,null,null,null);t.default=component.exports},736:function(e,t,n){"use strict";n.r(t);n(69),n(84);var o,r=n(22),l=(n(57),n(626)),c=n(604),d=n(180),f=(n(606),{name:"Banner",components:{DevelopWithUsForm:l.default,Modal:c.a},data:function(){return{showModal:!1,banner:null,isDevelopWithUsFormEnabled:!1}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.$get("".concat("http://192.168.0.100:1337","/software-engineering-main-banner?_locale=")+e.$i18n.locale);case 2:e.banner=t.sent;case 3:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0,created:(o=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=d.createClient("HyLaCHsdekyBEyYb4jZ1Hg/BWgAP9uBCUqPJDSKvEy4fg"),e.next=4,t.getValueAsync("developwithusform",!1);case 4:n=e.sent,this.isDevelopWithUsFormEnabled=n,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return o.apply(this,arguments)})}),m=f,v=n(38),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return null!==e.banner?t("div",{staticClass:"banner-area-six"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"banner-text"},[t("h1",[e._v(e._s(e.banner.title))]),e._v(" "),t("p",[e._v("\n            "+e._s(e.banner.description)+"\n          ")]),e._v(" "),e.isDevelopWithUsFormEnabled?t("div",{staticClass:"banner-btn wow fadeInUp",attrs:{"data-wow-delay":"1s"}},[t("button",{staticClass:"default-btn six",on:{click:function(t){e.showModal=!0}}},[t("i",{class:e.banner.icon_btnOne}),e._v("\n              "+e._s(e.banner.title_btnOne)+"\n            ")]),e._v(" "),t("Modal",{attrs:{"modal-style":"max-width: 900px",title:e.banner.title_btnOne},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[t("DevelopWithUsForm",{on:{closeModal:function(t){e.showModal=!1}}})],1)],1):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"banner-img"},[t("img",{attrs:{src:e.banner.img.url,alt:"Banner Image"}})])])])]),e._v(" "),t("div",{staticClass:"banner-shape-1"},[t("img",{attrs:{src:e.banner.shape1.url,alt:"Shape 1"}})]),e._v(" "),t("div",{staticClass:"banner-shape-2"},[t("img",{attrs:{src:e.banner.shape2.url,alt:"Shape 2"}})])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);