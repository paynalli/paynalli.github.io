(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{727:function(e,t,l){"use strict";l.r(t);l(54),l(107);var o={name:"SectionOne",data:function(){return{sectionOneValues:{},osValue:null,appValue:null,osArray:[],appObj:{}}},props:["surveyData","validations"],watch:{addValuesToArray:{handler:function(){var e=this;this.surveyData.Step1_Checkbox1.map((function(data,t){e.osArray.push(data.osValue)})),this.surveyData.Step1_Checkbox_two.map((function(data,t){e.appObj[data.key]=data.appValue}))},immediate:!0}}},r=l(38),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("FormulateForm",{ref:"formOne",attrs:{name:"sectionOne"},model:{value:e.sectionOneValues,callback:function(t){e.sectionOneValues=t},expression:"sectionOneValues"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-11 mx-auto"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{type:"email",name:"email",label:e.surveyData.email,validation:"email|required","input-class":"form-control","error-class":"text-danger","validation-messages":{email:e.validations.step1_validations.emailNotValid,required:e.validations.step1_validations.emailRequired}}})],1)]),e._v(" "),t("div",{staticClass:"col-6 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"name",label:e.surveyData.name,validation:"required","input-class":"form-control","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.nameRequired}}})],1)])]),e._v(" "),t("div",{staticClass:"row align-items-baseline"},[t("div",{staticClass:"col-4 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"organization",label:e.surveyData.org,validation:"required","input-class":"form-control","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.orgRequired}}})],1)]),e._v(" "),t("div",{staticClass:"col-4 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"appQuantity",type:"number",label:e.surveyData.appQty,validation:"required|between:0,4,length","input-class":"form-control","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.appQtyRequired,between:e.validations.step1_validations.appQtyLimit}}})],1)]),e._v(" "),t("div",{staticClass:"col-4 mx-auto"},[t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{name:"userQuantity",type:"number",label:e.surveyData.userQty,validation:"required|between:0,4,length","input-class":"form-control","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.userQtyRequired,between:e.validations.step1_validations.appQtyLimit}}})],1)])]),e._v(" "),e.osArray!==[]?t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{options:e.osArray,type:"checkbox","element-class":"d-flex text-center justify-content-around",name:"OSselection",label:e.surveyData.selectSystems_title,validation:"required","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.questionRequired}},model:{value:e.osValue,callback:function(t){e.osValue=t},expression:"osValue"}})],1):e._e(),e._v(" "),e.appObj!==[]?t("div",{staticClass:"form-group"},[t("FormulateInput",{attrs:{options:e.appObj,type:"checkbox","element-class":"d-flex text-center justify-content-between",name:"companyAppSelection",label:e.surveyData.selectApps_title,validation:"required","error-class":"text-danger","validation-messages":{required:e.validations.step1_validations.questionRequired}},model:{value:e.appValue,callback:function(t){e.appValue=t},expression:"appValue"}})],1):e._e()])])])}),[],!1,null,null,null);t.default=component.exports}}]);