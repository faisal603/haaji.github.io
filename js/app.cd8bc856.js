(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("notes")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("h1",[e._v(" Faisal Notes 2021 ")]),n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"inputer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.entry,expression:"entry"}],attrs:{type:"text",placeholder:"write note"},domProps:{value:e.entry},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.pressme(e.entry)},input:function(t){t.target.composing||(e.entry=t.target.value)}}})]),n("div",{attrs:{id:"displayer"}},e._l(e.arr,(function(t,r){return n("li",{key:r},[n("p",[e._v(e._s(t))]),n("button",{on:{click:function(t){return e.deleter(r)}}},[e._v("X")])])})),0)])])},u=[],c=n("1da1"),s=(n("a434"),n("96cf"),n("bc3a")),p=n.n(s),l=n("2106"),f=n.n(l);r["a"].use(f.a,p.a);var d={data:function(){return{entry:"",arr:[]}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.getItem("notes")){t.next=4;break}e.arr=JSON.parse(localStorage.getItem("notes")),t.next=9;break;case 4:return t.next=6,p.a.get("https://phplaravel-598798-1936248.cloudwaysapps.com/api/index/21").then((function(e){return e.data.notes}));case 6:n=t.sent,e.arr=JSON.parse(n),e.savedata();case 9:case"end":return t.stop()}}),t)})))()},methods:{pressme:function(e){this.arr.push(e),this.entry="",this.savedata()},deleter:function(e){this.arr.splice(e,1),this.savedata()},savedata:function(){var e=JSON.stringify(this.arr);localStorage.setItem("notes",e),this.syncdata(e)},syncdata:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.axios.put("https://phplaravel-598798-1936248.cloudwaysapps.com/api/update",{id:"21",notes:e});case 2:case"end":return n.stop()}}),n)})))()}}},v=d,h=(n("fcb6"),n("2877")),y=Object(h["a"])(v,i,u,!1,null,"4ef9c3be",null),m=y.exports,b={name:"App",components:{notes:m},data:function(){return{}}},g=b,w=(n("034f"),n("6544")),x=n.n(w),O=n("7496"),_=n("f6c4"),k=Object(h["a"])(g,a,o,!1,null,null,null),j=k.exports;x()(k,{VApp:O["a"],VMain:_["a"]});var S=n("f309");r["a"].use(S["a"]);var P=new S["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:P,render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},be1a:function(e,t,n){},fcb6:function(e,t,n){"use strict";n("be1a")}});
//# sourceMappingURL=app.cd8bc856.js.map