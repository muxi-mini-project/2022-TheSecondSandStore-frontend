(qq["webpackJsonp"]=qq["webpackJsonp"]||[]).push([[14],{46:function(e,t,a){e.exports=a.p+"Images/lists.png"},72:function(e,t,a){},73:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(6),s=a(7),i=a(4),o=a(9),l=a(10),r=a(3),j=a(12),d=a(8),h=a.n(d),u=a(1),b=(a(72),a(28)),f=a.n(b),O=a(46),p=a.n(O),m=(a(73),a(13)),x=a(0),g=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(c["a"])(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),Object(r["a"])(Object(i["a"])(e),"handleCancle",(function(){e.props.changeHidden()})),Object(r["a"])(Object(i["a"])(e),"handleConfirm",(function(){var t=e.state.content;t&&Object(m["a"])("/feedback",{content:t},"POST"),e.props.changeHidden()})),Object(r["a"])(Object(i["a"])(e),"getcontent",(function(t){e.setState({content:t.target.value})})),e}return Object(s["a"])(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.hidden,a=e.text,n=e.place;return Object(x["jsx"])(u["f"],{children:t?null:Object(x["jsxs"])(u["f"],{class:"toast-box",children:[Object(x["jsx"])(u["f"],{class:"toastbg"}),Object(x["jsxs"])(u["f"],{class:"showToast",children:[Object(x["jsx"])(u["f"],{class:"toast-title",children:Object(x["jsx"])(u["d"],{children:a})}),Object(x["jsx"])(u["f"],{class:"toast-main",children:Object(x["jsx"])(u["f"],{class:"toast-input",children:Object(x["jsx"])(u["c"],{placeholder:n,onInput:this.getcontent,bindinput:"setValue","data-name":"stuEidtName",maxlength:150})})}),Object(x["jsxs"])(u["f"],{class:"toast-button",children:[Object(x["jsx"])(u["f"],{class:"button1",children:Object(x["jsx"])(u["a"],{catchtap:"cancel",onClick:this.handleCancle,children:"\u53d6\u6d88"})}),Object(x["jsx"])(u["f"],{class:"button2",children:Object(x["jsx"])(u["a"],{catchtap:"confirm",onClick:this.handleConfirm,children:"\u786e\u5b9a"})})]})]})]})})}}]),a}(j["Component"]),v=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(c["a"])(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),Object(r["a"])(Object(i["a"])(e),"state",{text:"\u5ba2\u5b98\uff0c\u8bf7\u7559\u4e0b\u5bf9\u5c0f\u8d30\u7684\u5efa\u8bae",place:"\u9650150\u5b57...",hidden:!0,user:[],avatar:""}),Object(r["a"])(Object(i["a"])(e),"showModal",(function(){var t=e.state.hidden,a=!t;e.setState({hidden:a})})),Object(r["a"])(Object(i["a"])(e),"changeHidden",(function(){var t=e.state.hidden,a=!t;e.setState({hidden:a})})),e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=this;Object(m["a"])("/user",{},"GET").then((function(t){t.data&&e.setState({user:t.data})}))}},{key:"tofavourites",value:function(){h.a.navigateTo({url:"/pages/Favourites/index"})}},{key:"tolists",value:function(){h.a.navigateTo({url:"/pages/Lists/index"})}},{key:"touserinfo",value:function(){h.a.navigateTo({url:"/pages/changeUserinfo/index"})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.avatar;return Object(x["jsxs"])(u["f"],{children:[Object(x["jsxs"])(u["f"],{className:"Homepage_box1",children:[Object(x["jsx"])(u["b"],{className:"Homepage_avatar",src:a||"http://".concat(t.image),onClick:this.touserinfo}),Object(x["jsx"])(u["d"],{className:"Homepage_nickname",onClick:this.changeName,children:t.nickname}),Object(x["jsxs"])(u["f"],{className:"Homepage_count",children:[Object(x["jsxs"])(u["f"],{className:"Homepage_box2",children:[t.posts_number,Object(x["jsx"])(u["d"],{children:"\u53d1\u5e03"})]}),Object(x["jsxs"])(u["f"],{className:"Homepage_box3",children:[t.sells_number,Object(x["jsx"])(u["d"],{children:"\u5356\u51fa"})]})]})]}),Object(x["jsxs"])(u["f"],{onClick:this.tolists,className:"Homepage_lists",children:[Object(x["jsx"])(u["b"],{src:p.a,className:"Homepage_img"}),Object(x["jsx"])(u["d"],{children:"\u6211\u53d1\u5e03\u7684"})]}),Object(x["jsxs"])(u["f"],{onClick:this.tofavourites,className:"Homepage_favourites",children:[Object(x["jsx"])(u["b"],{src:f.a,className:"Homepage_img"}),Object(x["jsx"])(u["d"],{children:"\u6211\u6536\u85cf\u7684"})]}),Object(x["jsx"])(u["f"],{className:"Homepage_feedback",onClick:this.showModal,children:"\u610f\u89c1\u53cd\u9988"}),Object(x["jsx"])(g,{hidden:this.state.hidden,changeHidden:this.changeHidden,text:this.state.text,place:this.state.place})]})}}]),a}(j["Component"]),k={navigationBarTitleText:"\u4e2a\u4eba\u4fe1\u606f"};Page(Object(n["createPageConfig"])(v,"pages/Homepage/index",{root:{cn:[]}},k||{}))}},[[90,0,1,2,3]]]);