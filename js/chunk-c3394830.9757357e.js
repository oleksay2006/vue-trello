(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3394830"],{"446f":function(t,e,i){},"4a58":function(t,e,i){},"55f3":function(t,e,i){"use strict";i("c87f")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),n=i("5899"),s="["+n+"]",r=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),o=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(d,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},"596e":function(t,e,i){},"5e8b":function(t,e,i){"use strict";i("446f")},7156:function(t,e,i){var a=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var s,r;return n&&"function"==typeof(s=e.constructor)&&s!==i&&a(r=s.prototype)&&r!==i.prototype&&n(t,r),t}},"74cc":function(t,e,i){"use strict";i("4a58")},8039:function(t,e,i){"use strict";i("596e")},"91ea":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"first-board-nav"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"home"},[i("a",{attrs:{href:"#"}},[t._v("Домой")])])]),i("div",{staticClass:"name",attrs:{href:"#"}},[i("a",{class:{hidden:t.first},attrs:{href:"#"},on:{click:function(e){t.first=!0,t.showInput()}}},[i("h1",[t._v(" "+t._s(t.BOARD.title)+" ")])]),i("span",{attrs:{id:"hide"}}),i("input",{attrs:{id:"txt",type:"hidden"},on:{blur:function(e){t.first=!1,t.hideInput(),t.renameBoard()},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.hideInput(),t.first=!1,t.renameBoard()}}})]),i("div",{staticClass:"delete_board"},[i("router-link",{attrs:{to:"/"}},[i("a",{staticStyle:{padding:"5px"},on:{click:function(e){return t.removeBoard()}}},[t._v("Удалить доску")])])],1)],1),i("div",{staticClass:"element"},[t._l(t.BOARD.lists,(function(t){return i("List",{key:t.title,attrs:{list_data:t,cards:t.cards}})})),i("AddList")],2)])},n=[],s=i("1da1"),r=i("5530"),d=(i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dont"},[i("div",{staticClass:"title"},[i("h2",{class:{hidden:t.listTitle},on:{click:function(e){t.listCrest=!0,t.listTitle=!0,t.listInput=!1}}},[t._v(" "+t._s(t.list_data.title)+" ")]),i("span",{class:{hidden:t.listCrest},on:{click:function(e){return t.removeList()}}},[t._v("✖")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],class:{hidden:t.listInput},attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(e){t.changeListTitle(),t.listInput=!0,t.listCrest=!1,t.listTitle=!1},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.changeListTitle(),t.listInput=!0,t.listCrest=!1,t.listTitle=!1},input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._l(t.cards,(function(e){return i("Card",{key:e.id,attrs:{card_data:e,list:t.list_data}})})),i("AddCard",{attrs:{list:t.list_data}})],2)}),o=[],c=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main",on:{mouseover:function(e){t.hoverCard=!1},mouseout:function(e){t.hoverCard=!0}}},[i("div",{staticClass:"secondDiv",class:{hidden:t.second},on:{click:function(e){t.input=!1,t.second=!0,t.span=!0,t.focusInput("myInput")}}},[i("p",[t._v(" "+t._s(t.card_data.title)+" ")])]),i("div",{staticClass:"crest",class:{hidden:t.span},on:{click:function(e){return t.deleteCard()}}},[i("span",{class:{hidden:t.hoverCard}},[t._v("✖")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"myInput",class:{hidden:t.input},attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(e){t.input=!0,t.second=!1,t.span=!1,t.Change()},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.input=!0,t.second=!1,t.span=!1,t.Change()},input:function(e){e.target.composing||(t.title=e.target.value)}}})])}),u=[],l=i("2f62"),f={mounted:function(){},name:"Card",data:function(){return{hoverCard:!0,second:!1,input:!0,span:!1,title:this.card_data.title}},props:{card_data:{type:Object,default:function(){return{}}},list:{type:Object,default:function(){return{}}}},methods:Object(r["a"])(Object(r["a"])({focusInput:function(t){this.$refs[t].select()}},Object(l["b"])(["DELETE_CARD","GET_BOARD","RENAME_CARD"])),{},{Change:function(){""!==this.title&&(this.RENAME_CARD({boardId:this.$route.params.board_id,cardId:this.card_data.id,data:{title:this.title,list_id:this.list.id}}),this.GET_BOARD(this.$route.params.board_id))},deleteCard:function(){this.DELETE_CARD({boardId:this.$route.params.board_id,cardId:this.card_data.id}),this.GET_BOARD(this.$route.params.board_id)},showInput:function(){var t=document.querySelector("#input");t.type="text",t.select()}})},p=f,h=(i("8039"),i("2877")),m=Object(h["a"])(p,c,u,!1,null,"54ea7d32",null),_=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"addNew",class:{hidden:t.addCard}},[i("a",{attrs:{href:"#"},on:{click:function(e){t.isHidden=!1,t.addCard=!0,t.showInput()}}},[i("p",[t._v("+ Добавить карточку")])])]),i("div",{staticClass:"area",class:{hidden:t.isHidden}},[i("div",{staticClass:"textarea"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"",id:"cardName",placeholder:"Введите название карточки"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"controls"},[i("input",{attrs:{type:"submit",value:"Добавить карточку"},on:{click:function(e){t.createCard(),t.isHidden=!0,t.addCard=!1}}}),i("a",{attrs:{href:"#"},on:{click:function(e){t.isHidden=!0,t.addCard=!1}}},[t._v("×")])])])])},E=[],b={name:"AddCard",props:["list"],data:function(){return{title:"",isHidden:!0,addCard:!1}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["CREATE_CARD","GET_BOARD"])),{},{showInput:function(){document.querySelector("textarea").focus()},createCard:function(){this.CREATE_CARD({boardId:this.$route.params.board_id,data:{title:this.title,list_id:this.list.id,position:1}}),this.GET_BOARD(this.$route.params.board_id),this.title=""}}),mounted:function(){document.querySelector("textarea").focus()}},C=b,I=(i("74cc"),Object(h["a"])(C,v,E,!1,null,"65bd780e",null)),A=I.exports,O={name:"List",props:{list_data:{type:Object,default:function(){return{}}},cards:Object,index:Number},components:{Card:_,AddCard:A},data:function(){return{listInput:!0,listTitle:!1,listCrest:!1,title:this.list_data.title}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["DELETE_LIST","GET_BOARD","RENAME_LIST"])),{},{changeListTitle:function(){this.RENAME_LIST({boardId:this.$route.params.board_id,listId:this.list_data.id,data:{title:this.title,position:1}}),this.GET_BOARD(this.$route.params.board_id)},removeList:function(){this.DELETE_LIST({boardId:this.$route.params.board_id,listId:this.list_data.id}),this.GET_BOARD(this.$route.params.board_id)}})},y=O,R=(i("5e8b"),Object(h["a"])(y,d,o,!1,null,"d21b59a2",null)),T=R.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"second",class:{hidden:t.addList}},[i("a",{attrs:{href:"#"},on:{click:function(e){t.addList=!0,t.isHidden=!1,t.showInput()}}},[i("p",[t._v("+ Добавить список")])])]),i("div",{staticClass:"area",class:{hidden:t.isHidden}},[i("div",{staticClass:"textarea"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.addNewList()}}},[i("input",{attrs:{type:"text",id:"listName",placeholder:"Введите название списка"}}),i("div",{staticClass:"controls"},[i("input",{attrs:{type:"submit",value:"Добавить список"}}),i("a",{attrs:{href:"#"},on:{click:function(e){t.isHidden=!0,t.addList=!1}}},[t._v("×")])])])])])])},k=[],x={name:"AddList",data:function(){return{addList:!1,isHidden:!0}},methods:Object(r["a"])(Object(r["a"])({showInput:function(){var t=document.getElementById("listName");t.focus()}},Object(l["b"])(["CREATE_LIST","GET_BOARD"])),{},{addNewList:function(){var t=document.getElementById("listName");this.CREATE_LIST({id:this.$route.params.board_id,data:{title:t.value,position:1}}),t.value="",this.GET_BOARD(this.$route.params.board_id),console.log("u")}})},D=x,N=(i("55f3"),Object(h["a"])(D,g,k,!1,null,"5c4f4c38",null)),B=N.exports,L={data:function(){return{first:!1}},name:"Board",computed:Object(r["a"])({},Object(l["c"])(["BOARD","BOARDS"])),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.GET_BOARD(t.$route.params.board_id);case 1:case"end":return e.stop()}}),e)})))()},components:{List:T,AddList:B},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["GET_BOARD","DELETE_BOARD","RENAME_BOARD","CREATE_LIST"])),{},{removeBoard:function(){this.DELETE_BOARD(this.$route.params.board_id)},renameBoard:function(){var t=document.getElementById("txt"),e=this.$route.params.board_id,i={title:t.value};this.RENAME_BOARD({id:e,data:i}),this.GET_BOARD(this.$route.params.board_id)},showInput:function(){var t=document.getElementById("hide"),e=document.getElementById("txt");function i(){t.textContent=e.value,e.style.width="".concat(t.offsetWidth+6,"px")}e.addEventListener("input",i),e.value=this.BOARD.title,i(),e.type="text",e.select()},hideInput:function(){var t=document.getElementById("txt");t.type="hidden"}})},j=L,w=(i("fe76"),Object(h["a"])(j,a,n,!1,null,"f4f565b6",null));e["default"]=w.exports},a9e3:function(t,e,i){"use strict";var a=i("83ab"),n=i("da84"),s=i("94ca"),r=i("6eeb"),d=i("5135"),o=i("c6b6"),c=i("7156"),u=i("c04e"),l=i("d039"),f=i("7c73"),p=i("241c").f,h=i("06cf").f,m=i("9bf2").f,_=i("58a8").trim,v="Number",E=n[v],b=E.prototype,C=o(f(b))==v,I=function(t){var e,i,a,n,s,r,d,o,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=_(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(s=c.slice(2),r=s.length,d=0;d<r;d++)if(o=s.charCodeAt(d),o<48||o>n)return NaN;return parseInt(s,a)}return+c};if(s(v,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,O=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof O&&(C?l((function(){b.valueOf.call(i)})):o(i)!=v)?c(new E(I(e)),i,O):I(e)},y=a?p(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;y.length>R;R++)d(E,A=y[R])&&!d(O,A)&&m(O,A,h(E,A));O.prototype=b,b.constructor=O,r(n,v,O)}},ae04:function(t,e,i){},c87f:function(t,e,i){},fe76:function(t,e,i){"use strict";i("ae04")}}]);
//# sourceMappingURL=chunk-c3394830.9757357e.js.map