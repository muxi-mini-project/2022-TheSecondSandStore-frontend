(qq["webpackJsonp"]=qq["webpackJsonp"]||[]).push([[12],{48:function(e,t,n){e.exports=n.p+"Images/favorited.png"},77:function(e,t,n){},78:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(6),o=n(7),i=n(4),s=n(9),l=n(10),r=n(3),d=n(12),j=n(1),h=n(8),u=n.n(h),f=(n(77),n(13)),b=n(28),O=n.n(b),p=n(48),v=n.n(p),m=n(31),g=n.n(m),x=(n(78),n(0)),k=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),Object(r["a"])(Object(i["a"])(e),"handleCancle",(function(){e.props.changeHidden()})),e}return Object(o["a"])(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.hidden,n=e.place,c=e.QQ;return Object(x["jsx"])(j["f"],{children:t?null:Object(x["jsxs"])(j["f"],{class:"toast-box",children:[Object(x["jsx"])(j["f"],{class:"toastbg"}),Object(x["jsxs"])(j["f"],{class:"showToast",children:[Object(x["jsx"])(j["f"],{class:"toast-title",children:Object(x["jsx"])(j["d"],{onClick:this.handleCancle,children:"\xd7"})}),Object(x["jsxs"])(j["f"],{class:"toast-main",children:[Object(x["jsx"])(j["f"],{class:"toast-show",children:n}),Object(x["jsx"])(j["d"],{children:c})]})]})]})})}}]),n}(d["Component"]),y=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),Object(r["a"])(Object(i["a"])(e),"state",{good:{},hidden:!0,place:"\u5ba2\u5b98\uff0c\u8bf7\u8054\u7cfb\u8fd9\u4e2aQQ\u53f7",iffavorite:!1}),Object(r["a"])(Object(i["a"])(e),"handleBack",(function(){u.a.reLaunch({url:"/pages/Square/Square"})})),Object(r["a"])(Object(i["a"])(e),"showModal",(function(){var t=e.state.hidden,n=!t;e.setState({hidden:n})})),Object(r["a"])(Object(i["a"])(e),"changeHidden",(function(){var t=e.state.hidden,n=!t;e.setState({hidden:n})})),Object(r["a"])(Object(i["a"])(e),"handlefavorite",(function(){var t=e.state.iffavorite,n=!t,c=e.state.good.id;e.setState({iffavorite:n}),n?Object(f["a"])("/collection",{goods_id:c},"GET").then((function(e){console.log(e)})):Object(f["a"])("/collection/".concat(c),{},"DELETE").then((function(e){console.log(e)}))})),e}return Object(o["a"])(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidShow",value:function(){var e=this,t=Object(h["getCurrentInstance"])(),n=t.router.params,c=n.goods_id;Object(f["a"])("/goods/details/one/".concat(c),{},"GET").then((function(t){e.setState({good:t.data,iffavorite:t.data.if_collected})}))}},{key:"componentDidHide",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.place,c=e.hidden,a=e.iffavorite,o=t.user_nickname,i=t.user_image,s=t.qq_account,l=t.price,r=t.content,d=t.goods_images_videos,h=t.time;return Object(x["jsxs"])(j["f"],{children:[Object(x["jsxs"])(j["f"],{className:"top",children:[Object(x["jsx"])(j["b"],{src:g.a,style:{width:20,height:20,marginLeft:20},onClick:this.handleBack}),Object(x["jsx"])(j["b"],{src:a?v.a:O.a,className:"favorite",style:{width:22,height:22,marginLeft:290},onClick:this.handlefavorite})]}),Object(x["jsxs"])(j["f"],{className:"header",children:[Object(x["jsxs"])(j["f"],{className:"avater",children:[Object(x["jsx"])(j["b"],{src:"http://".concat(i)})," "]}),Object(x["jsx"])(j["d"],{className:"name",children:o}),Object(x["jsx"])(j["d"],{className:"time",children:h})]}),Object(x["jsxs"])(j["f"],{className:"description",children:[Object(x["jsx"])(j["d"],{className:"price",children:l}),Object(x["jsx"])(j["d"],{className:"message",children:r}),Object(x["jsx"])(j["f"],{className:"photo",children:Object(x["jsx"])(j["b"],{src:"http://".concat(d?d[0]:null)})}),Object(x["jsx"])(j["a"],{onClick:this.showModal,children:"\u6211\u60f3\u8981"}),Object(x["jsx"])(k,{hidden:c,place:n,QQ:s,changeHidden:this.changeHidden})]})]})}}]),n}(d["Component"]),w={navigationBarTitleText:"\u5546\u54c1\u8be6\u60c5"};Page(Object(c["createPageConfig"])(y,"pages/Goods-details/index",{root:{cn:[]}},w||{}))}},[[91,0,1,2,3]]]);