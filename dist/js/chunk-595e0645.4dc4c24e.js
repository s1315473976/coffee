(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595e0645"],{"057f":function(t,a,e){"use strict";var i=e("7b61"),o=e.n(i);o.a},"0c03":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回",fixed:!0},on:{"click-left":t.toback}}),e("div",{staticClass:"collect-list clearfix"},t._l(t.collectData,(function(a,i){return e("div",{key:i,staticClass:"collect-one fl",on:{click:function(e){return t.goDetail(a.pid)}}},[e("div",{staticClass:"top"},[e("img",{staticClass:"auto-img listImg",attrs:{src:a.smallImg,alt:""}})]),e("div",{staticClass:"center"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"fl"},[t._v("￥"+t._s(a.price))]),e("div",{staticClass:"fr"},[e("van-icon",{staticClass:"delete-icon",attrs:{name:"delete"},on:{click:function(e){return e.stopPropagation(),t.noLike(a.pid)}}})],1)])])})),0)],1)},o=[],n={data:function(){return{collectData:[]}},created:function(){this.getCollect()},methods:{toback:function(){this.$router.go(-1)},getCollect:function(){var t=this,a=localStorage.getItem("login_Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAllLike",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),2e3==a.data.code&&(t.collectData=a.data.result)})).catch((function(a){t.$toast.clear()}))},noLike:function(t){var a=this,e=localStorage.getItem("login_Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/notlike",data:{appkey:this.appkey,pid:t,tokenString:e}}).then((function(t){a.$toast.clear(),900==t.data.code&&a.getCollect()})).catch((function(t){a.$toast.clear()}))},goDetail:function(t){this.$router.push({name:"Detail",query:{pid:t}})}}},c=n,s=(e("057f"),e("2877")),l=Object(s["a"])(c,i,o,!1,null,"10b8836e",null);a["default"]=l.exports},"7b61":function(t,a,e){}}]);
//# sourceMappingURL=chunk-595e0645.4dc4c24e.js.map