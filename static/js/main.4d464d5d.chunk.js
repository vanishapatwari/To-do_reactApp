(this["webpackJsonpmanaging-a-component-tree-practice-completed"]=this["webpackJsonpmanaging-a-component-tree-practice-completed"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),l=n.n(r),o=n(6),u=n(3);var i=function(e){return c.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},c.a.createElement("li",null,e.text))};var m=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],l=n[1];return c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",value:r}),c.a.createElement("button",{onClick:function(){e.onAdd(r),l("")}},c.a.createElement("span",null,"Add")))};var d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function l(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement(m,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),c.a.createElement("div",null,c.a.createElement("ul",null,n.map((function(e,t){return c.a.createElement(i,{key:t,id:t,text:e,onChecked:l})})))))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4d464d5d.chunk.js.map