(window.webpackJsonp=window.webpackJsonp||[]).push([[99,25,95,97],{591:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{sitekey:"6Les4UsfAAAAAFhn-Zyx0Rt1m989pA7mDFwYqm-e",vueWidgtId:0}},methods:{reset:function(){window.grecaptcha.reset(this.vueWidgtId)},render:function(){var e=this;window.grecaptcha&&(this.vueWidgtId=window.grecaptcha.render("g-recaptcha",{sitekey:this.sitekey,size:"normal",callback:function(t){e.$emit("verify",t)},"expired-callback":function(t){e.$emit("expired",t)}}))}},mounted:function(){this.render()}},o=n(38),component=Object(o.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"g-recaptcha",attrs:{id:"g-recaptcha","data-sitekey":this.sitekey}})}),[],!1,null,null,null);t.default=component.exports},596:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(57),{name:"FeaturesCard",data:function(){return{features:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.$get("".concat("http://192.168.0.229:1337","/featurecards?_locale=")+e.$i18n.locale);case 2:e.features=t.sent;case 3:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0}),l=n(38),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container pt-100"},[e.features!==[]?t("div",{staticClass:"row justify-content-center"},e._l(e.features,(function(n){return t("div",{key:n.id,staticClass:"col-lg-4 col-sm-6"},[t("div",{staticClass:"single-features"},[t("h3",[t("i",{class:n.icon}),e._v("\n            "+e._s(n.title)+"\n          ")]),e._v(" "),t("p",[e._v("\n            "+e._s(n.shortDesc)+"\n          ")]),e._v(" "),t("span",{class:n.icon})])])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports},613:function(e,t,n){var content=n(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("12aa8aa6",content,!0,{sourceMap:!1})},622:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(52),n(57),n(591)),l=n(346),c=n.n(l),d=n(627),m=(n(635),{name:"DevelopWithUsForm",components:{ReCAPTCHA:o.default},data:function(){return{areaValue:null,projectDetails:null,sendNDA:!1,isCAPTCHAVerified:!1,isCAPTCHAError:!1,isDocUploaded:!1,isDocError:!1,textarea:{resize:"none"},fileUrl:null}},methods:{handleSubmit:function(data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isCAPTCHAVerified&&e.isDocUploaded?(null,null,o=null,l=d.a.storage().ref(),c.a.post("http://localhost:8080/v1/create-develop-with-us-form",data).then(n=JSON.stringify(data),r=new Blob([n],{type:"application/json"}),o=l.child("/dev-with-us/response-"+data.company+".json"),o.put(r).then(e.isCAPTCHAError=!1,e.$swal({icon:"success",title:"Thank you!",text:"We have recieved your response and we will get in touch with you soon.",confirmButtonText:"Close"}).then((function(t){t.isConfirmed&&e.$emit("closeModal")}))).catch((function(t){return e.$swal({icon:"error",title:"Could not save response",text:t.message,confirmButtonColor:"#d33"})}))).catch((function(t){return e.$swal({icon:"error",title:"Could not process response to API",text:t.message,confirmButtonColor:"#d33"})}))):e.isCAPTCHAVerified?e.isDocUploaded||(e.isDocError=!0):e.isCAPTCHAError=!0;case 1:case"end":return t.stop()}}),t)})))()},uploadFile:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((r=d.a.storage().ref("/dev-with-us/requirement-docs/".concat(e.name)).put(e)).on("state_changed",(function(e){t.uploadValue=e.bytesTransferred/e.totalBytes*100}),(function(e){t.$swal({icon:"error",title:"Upload of requirements document failed.",text:e,confirmButtonColor:"#d33"})}),(function(){t.uploadValue=100,r.snapshot.ref.getDownloadURL().then((function(e){t.fileUrl=e})),t.isDocUploaded=!0})),null===t.fileUrl){n.next=4;break}return n.abrupt("return",{url:t.fileUrl,name:e.name});case 4:case"end":return n.stop()}}),n)})))()}},beforeCreate:function(){d.a.initializeApp({apiKey:"AIzaSyB5w7vVqArM0rz6pRW-g_h3mUzvGYynpX8",authDomain:"paynalli.firebaseapp.com",projectId:"paynalli",storageBucket:"paynalli.appspot.com",messagingSenderId:"515914515467",appId:"1:515914515467:web:2a332f93e5ed708e51330e",measurementId:"G-680WMJ5S78"})}}),v=n(38),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("FormulateForm",{ref:"form",attrs:{name:"developForm"},on:{submit:e.handleSubmit}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"fullName",label:"Full Name *",validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"email",name:"email",label:"Email *",validation:"email","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"mobile",label:"Mobile Number",validation:"number","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"company",label:"Company Name *",validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"select",name:"services",placeholder:"Select your services *",options:{service1:"Service 1",service2:"Service 2",service3:"Service 3",service4:"Service 4"},validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"select",name:"budget",placeholder:"Select your budget *",options:{tenK:"0K - 10K USD",twoFiveK:"10k - 25K USD",fiveZeroK:"25K - 50K USD",sevenFiveK:"50K - 75K USD",oneHundredK:"75K - 100K USD",moreThanOneHundredK:"100K+ USD"},validation:"required","input-class":"form-control","error-class":"text-danger"}})],1)])]),e._v(" "),t("FormulateInput",{attrs:{type:"textarea",name:"projectDetails",label:"Project Details *","input-class":"w-100 textarea-noresize",validation:"required","error-class":"text-danger",rows:"3"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}}),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{staticClass:"custom-file",attrs:{type:"file",name:"requirementsDoc","input-class":"custom-file-input","label-class":"custom-file-label",label:"Select your requirements document *",validation:"mime:application/pdf|required","error-class":"text-danger",uploader:e.uploadFile}}),e._v(" "),e.isDocError?t("p",{staticClass:"text-danger"},[e._v("File not uploaded yet.")]):e._e()],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"})]),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6"},[t("ReCAPTCHA",{on:{verify:function(t){e.isCAPTCHAVerified=!0},expired:function(t){e.isCAPTCHAVerified=!1}}}),e._v(" "),e.isCAPTCHAError?t("p",{staticClass:"text-danger"},[e._v("\n          You must prove you are not a robot.\n        ")]):e._e()],1),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("button",{staticClass:"default-btn page-btn",attrs:{type:"submit"}},[e._v("Send")])])])],1)])}),[],!1,null,null,null);t.default=component.exports},628:function(e,t,n){"use strict";n(613)},629:function(e,t,n){var r=n(87)((function(i){return i[1]}));r.push([e.i,".btn-center{bottom:0;cursor:pointer;left:0;margin:auto;position:absolute;right:250px;top:0}",""]),r.locals={},e.exports=r},641:function(e,t,n){"use strict";n.r(t);n(58),n(73);var r,o=n(22),l=(n(57),n(584),n(596)),c=(n(607),n(626)),d=n(182),m=n(622),v={name:"MainBanner",components:{FeaturesCard:l.default,DevelopWithUsForm:m.default,Modal:c.a},data:function(){return{index:null,items:[],banner:null,showModal:!1,isDevelopWithUsFormEnabled:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.$get("".concat("http://192.168.0.229:1337","/bannerdefaulthomepage?_locale=")+e.$i18n.locale);case 2:e.banner=t.sent,e.items.push({src:e.banner.videoLink});case 4:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0,created:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=d.createClient("HyLaCHsdekyBEyYb4jZ1Hg/BWgAP9uBCUqPJDSKvEy4fg"),e.next=4,t.getValueAsync("developwithusform",!1);case 4:n=e.sent,this.isDevelopWithUsFormEnabled=n,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return r.apply(this,arguments)})},f=v,h=(n(628),n(38)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("CoolLightBox",{attrs:{items:e.items,fullScreen:!0,index:e.index},on:{close:function(t){e.index=null}}}),e._v(" "),null!==e.banner?t("div",{staticClass:"banner-area-six"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"banner-text"},[t("span",[e._v(e._s(e.banner.subTitle))]),e._v(" "),t("h1",[e._v(e._s(e.banner.heading))]),e._v(" "),t("p",[e._v("\n              "+e._s(e.banner.description)+"\n            ")]),e._v(" "),e.isDevelopWithUsFormEnabled?t("div",{staticClass:"banner-btn wow fadeInUp",attrs:{"data-wow-delay":"1s"}},[t("button",{staticClass:"default-btn six",on:{click:function(t){e.showModal=!0}}},[t("i",{class:e.banner.icon_btnOne}),e._v("\n                "+e._s(e.banner.btnText)+"\n              ")]),e._v(" "),t("Modal",{attrs:{"modal-style":"max-width: 900px",title:e.banner.title_btnOne},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[t("DevelopWithUsForm",{on:{closeModal:function(t){e.showModal=!1}}})],1)],1):e._e()])]),e._v(" "),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"banner-img position-relative"},[t("img",{attrs:{src:e.banner.img.url,alt:"Banner Image"}})]),e._v(" "),t("div",{staticClass:"video-btn-animat"},e._l(e.items,(function(image,n){return t("div",{key:n,staticClass:"video-btn popup-youtube btn-center",on:{click:function(t){e.index=n}}},[t("i",{staticClass:"bx bx-play"})])})),0)])])]),e._v(" "),t("div",{staticClass:"banner-shape-1"},[t("img",{attrs:{src:e.banner.shape1.url,alt:"Shape 1"}})]),e._v(" "),t("div",{staticClass:"banner-shape-2"},[t("img",{attrs:{src:e.banner.shape2.url,alt:"Shape 2"}})])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);