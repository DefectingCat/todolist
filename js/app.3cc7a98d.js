(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"229d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainTab")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-tab"},[n("div",{staticClass:"input"},[n("InputButton",{on:{addMsg:t.addMsg}})],1),n("Lists",{attrs:{lists:t.lists},on:{removeItem:t.removeItem,editMsg:t.editMsg,doneItem:t.doneItem}}),n("div",{staticClass:"wrap-proecss"},[n("div",{staticClass:"processed",style:{width:t.process}},[n("span",[t._v(" "+t._s(t.process)+" ")])])])],1)},a=[],u=(n("a434"),n("b85c")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-btn"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",placeholder:"Add someting..."},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitMsg(e)},input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("button",{on:{click:t.emitMsg}},[t._v("Add")])])},d=[],l=(n("498a"),{data:function(){return{msg:""}},methods:{emitMsg:function(){""!==this.msg.trim()&&this.$emit("addMsg",this.msg),this.msg=""}}}),f=l,p=(n("7b78"),n("2877")),m=Object(p["a"])(f,c,d,!1,null,"3246533d",null),h=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.lists,(function(e,i){return n("li",{key:e.id,attrs:{id:e.id}},[n("div",{staticClass:"item-view"},[n("input",{key:e.id,attrs:{type:"checkbox",name:e.id,id:e.id},on:{change:function(e){return t.doneItem(i)}}}),n("label",{attrs:{for:e.id}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isEdit!=e.id,expression:"isEdit != item.id"}],staticClass:"message",class:{done:e.done},on:{dblclick:function(n){return t.editItem(i,e.id)}}},[t._v(" "+t._s(e.msg)+" ")])]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.isEdit==e.id,expression:"isEdit == item.id"},{name:"model",rawName:"v-model",value:t.editedMsg,expression:"editedMsg"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.editedMsg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editMsg(i)},blur:function(e){return t.editMsg(i)},input:function(e){e.target.composing||(t.editedMsg=e.target.value)}}}),n("i",{staticClass:"ico-btn iconfont icon-bianji",on:{click:function(n){return t.editItem(i,e.id)}}}),n("i",{staticClass:"ico-btn iconfont icon-shanchu",on:{click:function(e){return t.removeItem(i)}}})])])})),0)],1)},v=[],b={data:function(){return{isEdit:-1,editedMsg:""}},props:{lists:Array},methods:{removeItem:function(t){this.$emit("removeItem",t)},editItem:function(t,e){this.isEdit=e,this.editedMsg=this.lists[t].msg},editMsg:function(t){this.$emit("editMsg",t,this.editedMsg),this.isEdit=-1},doneItem:function(t){this.$emit("doneItem",t)}}},y=b,M=(n("80e9"),Object(p["a"])(y,g,v,!1,null,"0a9b45d3",null)),w=M.exports,_={components:{InputButton:h,Lists:w},data:function(){return{lists:[],id:0}},methods:{addMsg:function(t){var e={id:this.id,msg:t,done:!1};this.lists.unshift(e),this.id++},removeItem:function(t){this.lists.splice(t,1)},editMsg:function(t,e){this.lists[t].msg=e},doneItem:function(t){this.lists[t].done?this.lists[t].done=!1:this.lists[t].done=!0}},computed:{process:function(){var t,e=[],n=0,i=this.lists.length,s=Object(u["a"])(this.lists);try{for(s.s();!(t=s.n()).done;){var o=t.value;o.done&&e.push(o)}}catch(r){s.e(r)}finally{s.f()}return n=e.length/i*100,Math.floor(n)?"".concat(Math.floor(n),"%"):0}}},k=_,x=(n("aaf5"),Object(p["a"])(k,r,a,!1,null,"5e9b380d",null)),O=x.exports,I={name:"App",components:{MainTab:O}},j=I,C=(n("034f"),Object(p["a"])(j,s,o,!1,null,null,null)),E=C.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},5804:function(t,e,n){},7035:function(t,e,n){},"7b78":function(t,e,n){"use strict";n("7035")},"80e9":function(t,e,n){"use strict";n("229d")},"85ec":function(t,e,n){},aaf5:function(t,e,n){"use strict";n("5804")}});
//# sourceMappingURL=app.3cc7a98d.js.map