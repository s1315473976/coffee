(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228864"],{da0a:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("van-nav-bar",{attrs:{title:"修改密码","left-text":"返回","left-arrow":""},on:{"click-left":t.toback}}),s("van-form",{on:{submit:t.password}},[s("van-field",{attrs:{label:"旧密码",placeholder:"旧密码"},model:{value:t.pwds.oldPassword,callback:function(a){t.$set(t.pwds,"oldPassword",a)},expression:"pwds.oldPassword"}}),s("van-field",{attrs:{type:"text",label:"新密码",placeholder:"新密码"},model:{value:t.pwds.password,callback:function(a){t.$set(t.pwds,"password",a)},expression:"pwds.password"}}),s("div",{staticClass:"btn-box"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},e=[],d={data:function(){return{pwds:{oldPassword:"",password:""}}},methods:{toback:function(){this.$router.go(-1)},password:function(){var t=this,a=localStorage.getItem("login_Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:a,password:this.pwds.password,oldPassword:this.pwds.oldPassword}}).then((function(a){t.$toast.clear(),"E001"==a.data.code?(localStorage.removeItem("login_Tk"),t.$router.push({name:"Login"})):t.$toast(a.data.msg)})).catch((function(a){t.$toast.clear()}))}}},n=d,r=s("2877"),l=Object(r["a"])(n,o,e,!1,null,"cc2835bc",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d228864.1298acd9.js.map