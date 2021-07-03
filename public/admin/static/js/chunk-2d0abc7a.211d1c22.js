(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abc7a"],{1775:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-tabs",[t.checkPermission(["admin/Setting/tokenInfo"])?n("el-tab-pane",{attrs:{label:"Token设置",lazy:""}},[n("Token")],1):t._e(),t.checkPermission(["admin/Setting/captchaInfo"])?n("el-tab-pane",{attrs:{label:"验证码设置",lazy:""}},[n("Captcha")],1):t._e(),t.checkPermission(["admin/Setting/logInfo"])?n("el-tab-pane",{attrs:{label:"日志设置",lazy:""}},[n("Log")],1):t._e(),t.checkPermission(["admin/Setting/apiInfo"])?n("el-tab-pane",{attrs:{label:"接口设置",lazy:""}},[n("Api")],1):t._e()],1)],1)},o=[],l=n("e350"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Token名称",prop:"token_name"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{type:"text"},model:{value:t.model.token_name,callback:function(e){t.$set(t.model,"token_name",e)},expression:"model.token_name"}}),n("i",{staticClass:"el-icon-warning-outline",attrs:{title:"必须与前端设置一致，否则Token验证失败。"}})],1),n("el-form-item",{attrs:{label:"Token密钥",prop:"token_key"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{type:"text"},model:{value:t.model.token_key,callback:function(e){t.$set(t.model,"token_key",e)},expression:"model.token_key"}}),n("i",{staticClass:"el-icon-warning-outline",attrs:{title:"修改后所有会员登录状态失效，需重新登录。"}})],1),n("el-form-item",{attrs:{label:"Token有效时间",prop:"token_exp"}},[n("el-input",{attrs:{type:"number"},model:{value:t.model.token_exp,callback:function(e){t.$set(t.model,"token_exp",e)},expression:"model.token_exp"}},[n("template",{slot:"append"},[t._v("小时")])],2)],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},s=[],r=n("b775");function c(t){return Object(r["a"])({url:"/admin/Setting/tokenInfo",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/admin/Setting/tokenEdit",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/admin/Setting/captchaInfo",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/admin/Setting/captchaEdit",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/admin/Setting/apiInfo",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/admin/Setting/apiEdit",method:"post",data:t})}var h={name:"Token",components:{},data:function(){return{loading:!1,model:{token_name:"",token_key:"",token_exp:720},rules:{}}},created:function(){this.info()},methods:{info:function(){var t=this;c().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,c().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,u(t.model).then((function(e){t.info(),t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},g=h,_=n("4ac2"),b=Object(_["a"])(g,i,s,!1,null,null,null),v=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"注册验证码",prop:"captcha_register"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.captcha_register,callback:function(e){t.$set(t.model,"captcha_register",e)},expression:"model.captcha_register"}})],1),n("el-form-item",{attrs:{label:"登录验证码",prop:"captcha_login"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.captcha_login,callback:function(e){t.$set(t.model,"captcha_login",e)},expression:"model.captcha_login"}})],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},x=[],w={name:"Captcha",components:{},data:function(){return{loading:!1,model:{captcha_register:0,captcha_login:0},rules:{}}},created:function(){this.info()},methods:{info:function(){var t=this;m().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,m().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,d(t.model).then((function(e){t.info(),t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},y=w,$=Object(_["a"])(y,k,x,!1,null,null,null),j=$.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"",prop:""}},[n("span",[t._v("开启后，会记录前台会员日志。")])]),n("el-form-item",{attrs:{label:"日志记录",prop:"log_switch"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.log_switch,callback:function(e){t.$set(t.model,"log_switch",e)},expression:"model.log_switch"}})],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},S=[],C=n("0768"),E={name:"Log",components:{},data:function(){return{loading:!1,model:{log_switch:0},rules:{}}},created:function(){this.info()},methods:{info:function(){var t=this;Object(C["h"])().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,Object(C["h"])().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,Object(C["g"])(t.model).then((function(e){t.info(),t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},T=E,I=Object(_["a"])(T,O,S,!1,null,null,null),P=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"",prop:""}},[n("span",[t._v("次数/时间；3/1：3次1秒；次数设置为 0 则不限制。")])]),n("el-form-item",{attrs:{label:"接口速率"}},[n("el-col",{attrs:{span:11}},[n("el-input",{attrs:{type:"number",placeholder:"次数"},model:{value:t.model.api_rate_num,callback:function(e){t.$set(t.model,"api_rate_num",e)},expression:"model.api_rate_num"}})],1),n("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("/")]),n("el-col",{attrs:{span:11}},[n("el-input",{attrs:{type:"number",placeholder:"时间"},model:{value:t.model.api_rate_time,callback:function(e){t.$set(t.model,"api_rate_time",e)},expression:"model.api_rate_time"}},[n("template",{slot:"append"},[t._v("秒")])],2)],1)],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},A=[],L={name:"Api",components:{},data:function(){return{loading:!1,model:{api_rate_num:3,api_rate_time:1},rules:{}}},created:function(){this.info()},methods:{info:function(){var t=this;f().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,f().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,p(t.model).then((function(e){t.info(),t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},J=L,B=Object(_["a"])(J,z,A,!1,null,null,null),q=B.exports,D={name:"Base",components:{Token:v,Captcha:j,Log:P,Api:q},data:function(){return{height:600}},created:function(){},methods:{checkPermission:l["a"]}},F=D,G=Object(_["a"])(F,a,o,!1,null,null,null);e["default"]=G.exports}}]);