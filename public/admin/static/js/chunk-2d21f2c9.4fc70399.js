(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f2c9"],{d964:function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("el-row",{attrs:{gutter:0}},[t("el-col",{attrs:{xs:24,sm:12}},[t("el-form",{ref:"ref",attrs:{model:e.model,rules:e.rules,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"logo",prop:"logo"}},[t("el-row",{attrs:{gutter:0}},[t("el-col",{attrs:{span:12}},[t("el-image",{staticStyle:{height:"100px"},attrs:{shape:"circle",fit:"contain",src:e.model.logo_url,"preview-src-list":[e.model.logo_url]}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1),t("el-col",{attrs:{span:12}},[t("el-upload",{attrs:{name:"file","show-file-list":!1,action:e.uploadAction,headers:e.uploadHeaders,"on-success":e.uploadSuccess,"on-error":e.uploadError}},[t("el-button",{attrs:{size:"mini"}},[e._v("上传logo")])],1),t("span",[e._v("jpg、png图片，小于200KB。")])],1)],1)],1),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"name"},model:{value:e.model.name,callback:function(l){e.$set(e.model,"name",l)},expression:"model.name"}})],1),t("el-form-item",{attrs:{label:"标题",prop:"title"}},[t("el-input",{attrs:{clearable:"",placeholder:"title"},model:{value:e.model.title,callback:function(l){e.$set(e.model,"title",l)},expression:"model.title"}})],1),t("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[t("el-input",{attrs:{clearable:"",placeholder:"keywords"},model:{value:e.model.keywords,callback:function(l){e.$set(e.model,"keywords",l)},expression:"model.keywords"}})],1),t("el-form-item",{attrs:{label:"描述",prop:"description"}},[t("el-input",{attrs:{type:"textarea",clearable:"",placeholder:"description"},model:{value:e.model.description,callback:function(l){e.$set(e.model,"description",l)},expression:"model.description"}})],1),t("el-form-item",{attrs:{label:"备案号",prop:"icp"}},[t("el-input",{attrs:{clearable:"",placeholder:"icp"},model:{value:e.model.icp,callback:function(l){e.$set(e.model,"icp",l)},expression:"model.icp"}})],1),t("el-form-item",{attrs:{label:"版权",prop:"copyright"}},[t("el-input",{attrs:{clearable:"",placeholder:"copyright"},model:{value:e.model.copyright,callback:function(l){e.$set(e.model,"copyright",l)},expression:"model.copyright"}})],1),t("el-form-item",{attrs:{label:"地址",prop:"address"}},[t("el-input",{attrs:{clearable:"",placeholder:"address"},model:{value:e.model.address,callback:function(l){e.$set(e.model,"address",l)},expression:"model.address"}})],1),t("el-form-item",{attrs:{label:"电话",prop:"tel"}},[t("el-input",{attrs:{clearable:"",placeholder:"tel"},model:{value:e.model.tel,callback:function(l){e.$set(e.model,"tel",l)},expression:"model.tel"}})],1),t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{attrs:{clearable:"",placeholder:"mobile"},model:{value:e.model.mobile,callback:function(l){e.$set(e.model,"mobile",l)},expression:"model.mobile"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{clearable:"",placeholder:"email"},model:{value:e.model.email,callback:function(l){e.$set(e.model,"email",l)},expression:"model.email"}})],1),t("el-form-item",{attrs:{label:"QQ",prop:"qq"}},[t("el-input",{attrs:{clearable:"",placeholder:"qq"},model:{value:e.model.qq,callback:function(l){e.$set(e.model,"qq",l)},expression:"model.qq"}})],1),t("el-form-item",{attrs:{label:"微信",prop:"wechat"}},[t("el-input",{attrs:{clearable:"",placeholder:"wechat"},model:{value:e.model.wechat,callback:function(l){e.$set(e.model,"wechat",l)},expression:"model.wechat"}})],1),t("el-form-item",{attrs:{label:"公众号",prop:"off_acc"}},[t("el-row",{attrs:{gutter:0}},[t("el-col",{attrs:{span:12}},[t("el-image",{staticStyle:{height:"100px"},attrs:{shape:"circle",fit:"contain",src:e.model.off_acc_url,"preview-src-list":[e.model.off_acc_url]}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1),t("el-col",{attrs:{span:12}},[t("el-upload",{attrs:{name:"file","show-file-list":!1,action:e.uploadAction,headers:e.uploadHeaders,"on-success":e.uploadOffSuccess,"on-error":e.uploadError}},[t("el-button",{attrs:{size:"mini"}},[e._v("上传公众号")])],1),t("span",[e._v("jpg、png图片，小于200KB。")])],1)],1)],1),t("el-form-item",[t("el-button",{attrs:{loading:e.loading},on:{click:function(l){return e.refresh()}}},[e._v("刷新")]),t("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(l){return e.submit()}}},[e._v("提交")])],1)],1)],1)],1)],1)],1)},a=[],r=t("b775");function s(e){return Object(r["a"])({url:"/admin/SettingCms/cmsInfo",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/admin/SettingCms/cmsEdit",method:"post",data:e})}var c=t("5f87"),n={name:"SettingCms",components:{},data:function(){return{loading:!1,model:{logo:"",logo_url:"",name:"",title:"",keywords:"",description:"",icp:"",copyright:"",address:"",tel:"",mobile:"",email:"",qq:"",wechat:"",off_acc:"",off_acc_url:""},uploadAction:"/admin/SettingCms/cmsUpload",uploadHeaders:{AdminToken:Object(c["d"])()},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.info()},methods:{info:function(){var e=this;s().then((function(l){e.model=l.data}))},refresh:function(){var e=this;this.loading=!0,s().then((function(l){e.model=l.data,e.loading=!1,e.$message.success(l.msg)})).catch((function(){e.loading=!1}))},submit:function(){var e=this;this.$refs["ref"].validate((function(l){l&&(e.loading=!0,i(e.model).then((function(l){e.info(),e.loading=!1,e.$message.success(l.msg)})).catch((function(){e.loading=!1})))}))},uploadSuccess:function(e,l){200===e.code?(this.model.logo_url=e.data.url,this.model.logo=e.data.path,this.$message.success(e.msg)):this.$message.error(e.msg)},uploadError:function(e,l){this.$message.error(e.msg||"上传出错")},uploadOffSuccess:function(e,l){200===e.code?(this.model.off_acc_url=e.data.url,this.model.off_acc=e.data.path,this.$message.success(e.msg)):this.$message.error(e.msg)}}},d=n,m=t("4ac2"),p=Object(m["a"])(d,o,a,!1,null,"07010210",null);l["default"]=p.exports}}]);