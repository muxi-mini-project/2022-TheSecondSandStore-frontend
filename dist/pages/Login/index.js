(qq["webpackJsonp"]=qq["webpackJsonp"]||[]).push([[18],{49:function(e,t,a){e.exports=a.p+"Images/background.png"},50:function(e,t,a){e.exports=a.p+"Images/\u5b57\u4f531.png"},87:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(6),c=a(7),o=a(4),r=a(9),i=a(10),u=a(3),p=a(12),d=a(1),l=a(8),b=a.n(l),j=(a(87),a(49)),h=a.n(j),g=a(50),O=a.n(g),f=a(13),w=a(0),x=function(e){Object(r["a"])(a,e);var t=Object(i["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),Object(u["a"])(Object(o["a"])(e),"login",(function(){var t=e.state,a=t.account,n=t.password;a&&n&&Object(f["a"])("/auth",{account:a,password:n},"POST").then((function(e){switch(e.code){case 200:b.a.setStorage({key:"account",data:a}),b.a.setStorage({key:"password",data:n}),b.a.setStorage({key:"token",data:e.data}),b.a.reLaunch({url:"/pages/Square/Square"});break}})).catch((function(){b.a.showToast({icon:"none",title:"\u8d26\u53f7\u6216\u8005\u5bc6\u7801\u9519\u8bef"})})),a&&n||b.a.showToast({icon:"none",title:"\u8d26\u53f7\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"})})),e.state={account:"",password:""},e}return Object(c["a"])(a,[{key:"getuserid",value:function(e){this.setState({account:e.target.value})}},{key:"getpwd",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return Object(w["jsxs"])(d["f"],{className:"Login",children:[Object(w["jsx"])(d["b"],{src:h.a}),Object(w["jsx"])(d["f"],{className:"header",children:Object(w["jsx"])(d["b"],{src:O.a})}),Object(w["jsxs"])(d["f"],{className:"passWord",children:[Object(w["jsx"])(d["c"],{type:"number",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5b66\u53f7",className:"input1",onInput:this.getuserid.bind(this)}),Object(w["jsx"])(d["c"],{type:"password",password:!0,placeholder:"\u5bc6\u7801",className:"input2",onInput:this.getpwd.bind(this)})]}),Object(w["jsx"])(d["f"],{children:Object(w["jsx"])(d["a"],{className:"btn1",onClick:this.login,children:"\u767b\u5f55"})})]})}}]),a}(p["Component"]),k={navigationBarTitleText:"\u5e97\u5c0f\u8d30"};Page(Object(n["createPageConfig"])(x,"pages/Login/index",{root:{cn:[]}},k||{}))}},[[98,0,1,2,3]]]);