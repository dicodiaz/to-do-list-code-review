(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(81),a=n.n(s),r=n(645),o=n.n(r)()(a());o.push([e.id,"input:focus {\n  outline: none;\n}\n\nimg {\n  opacity: 0.5;\n  transition: opacity 0.2s ease-in-out;\n}\n\nimg:hover {\n  opacity: 1;\n}\n\n#clear-all {\n  opacity: 0.5;\n}\n\n#clear-all:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n\n#clear-all:focus {\n  box-shadow: none;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-move {\n  cursor: move;\n}\n\n.td-line-through {\n  text-decoration: line-through;\n}\n\n#warning {\n  transition: opacity 1s ease-in-out;\n}\n\n.table > :not(:last-child) > :last-child > * {\n  border-bottom-color: inherit;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(s)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);s&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},o=[],i=0;i<e.length;i++){var c=e[i],d=s.base?c[0]+s.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=a(h,s);s.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=s(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var i=n(r[o]);t[i].references--}for(var c=s(e,a),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,a&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},415:(e,t,n)=>{e.exports=n.p+"d3845d0a3def722e0661.png"},951:(e,t,n)=>{e.exports=n.p+"ec51b32a7052504d2e1a.png"},86:(e,t,n)=>{e.exports=n.p+"8fe84e7010d2acc3598d.png"},761:(e,t,n)=>{e.exports=n.p+"61394eefae2875887d71.png"}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={id:s,exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),s=n(795),a=n.n(s),r=n(569),o=n.n(r),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),h=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=(e,t)=>{const n=document.createElement("div");n.classList.add("d-flex","justify-content-end","align-items-center");const s=document.createElement("img");s.classList.add("cursor-pointer"),s.src=e,s.alt=t.id,s.classList.add("img-fluid"),n.appendChild(s),t.appendChild(n)};var g=n(951),v=n(761);class y{static tasks=[];constructor({description:e,completed:t=!1,index:n=y.tasks.length+1,afterElementIndex:s=-1}){this.description=e,this.completed=t,this.index=n,this.afterElementIndex=s}populate(e,t){const n=document.createElement("tr");n.classList.add("draggable"),n.draggable=!0;const s=document.createElement("td"),a=document.createElement("input");a.classList.add("form-check-input"),a.type="checkbox";const r=document.createElement("span");r.classList.add("ps-2"),r.innerText=this.description,s.appendChild(a),s.appendChild(r);const o=document.createElement("td");o.id=`menu-${t+1}`,o.classList.add("align-middle"),((e,t,n)=>{const s=document.createElement("div");s.classList.add("d-flex","justify-content-end","align-items-center");const a=document.createElement("img");a.src=e,a.alt=`${n.id}-bot`,a.classList.add("img-fluid");const r=document.createElement("img");r.src=t,r.alt=`${n.id}-top`,r.classList.add("cursor-pointer","cursor-move","img-fluid","opacity-0","position-absolute"),s.appendChild(a),s.appendChild(r),n.appendChild(s),n.classList.add("position-relative")})(g,v,o),n.appendChild(s),n.appendChild(o),e.appendChild(n),this.node=n,a.addEventListener("change",(()=>{a.checked?(this.completed=!0,r.classList.add("td-line-through"),s.classList.add("opacity-50")):(this.completed=!1,r.classList.remove("td-line-through"),s.classList.remove("opacity-50")),y.saveLocalTasks()})),this.completed&&(a.checked=!0,r.classList.add("td-line-through"),s.classList.add("opacity-50"));const i=o.firstElementChild.firstElementChild,c=o.firstElementChild.lastElementChild,d=document.createElement("input");d.type="text",d.classList.add("border-0","ps-2","bg-secondary","text-white"),c.addEventListener("click",(()=>{c.classList.contains("cursor-move")?(i.classList.toggle("opacity-0"),c.classList.toggle("opacity-0"),c.classList.toggle("cursor-move"),n.classList.add("bg-secondary"),d.value=r.innerText,s.replaceChild(d,r),d.focus()):(this.remove(),this.node.remove())})),d.addEventListener("keyup",(e=>{13===e.keyCode&&(r.innerText=d.value,s.replaceChild(r,d),i.classList.toggle("opacity-0"),c.classList.toggle("opacity-0"),c.classList.toggle("cursor-move"),n.classList.remove("bg-secondary"),this.description=d.value,y.saveLocalTasks())})),n.addEventListener("dragstart",(()=>{n.classList.add("dragging","bg-light")})),n.addEventListener("dragend",(()=>{n.classList.remove("dragging","bg-light");const e=y.tasks.findIndex((e=>e.node===n));e!==this.afterElementIndex&&y.move(e,this.afterElementIndex),this.afterElementIndex=-1,y.tasks.forEach(((e,t)=>{e.index=t+1})),y.saveLocalTasks()})),n.addEventListener("touchstart",(()=>{n.classList.add("dragging","bg-light")})),n.addEventListener("touchend",(()=>{n.classList.remove("dragging","bg-light");const e=y.tasks.findIndex((e=>e.node===n));e!==this.afterElementIndex&&y.move(e,this.afterElementIndex),this.afterElementIndex=-1,y.tasks.forEach(((e,t)=>{e.index=t+1})),y.saveLocalTasks()})),y.saveLocalTasks()}static populateAll(e){this.sort(),this.tasks.forEach(((t,n)=>{t.populate(e,n)}))}static sort(){this.tasks.sort(((e,t)=>e.index-t.index))}static saveLocalTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}static loadLocalTasks(){const e=JSON.parse(localStorage.getItem("tasks"));e&&e.forEach(((e,t)=>{y.tasks[t]=new y(e)}))}add(){return y.tasks.push(this),y.saveLocalTasks(),this}remove(){return y.tasks=y.tasks.filter((e=>e!==this)),y.tasks.forEach(((e,t)=>{e.index=t+1})),y.saveLocalTasks(),this}static clearAllCompleted(){this.tasks=this.tasks.filter((e=>(e.completed&&e.node.remove(),!e.completed))),this.tasks.forEach(((e,t)=>{e.index=t+1})),this.saveLocalTasks()}static getDragAfterElement(e,t){return[...e.querySelectorAll(".draggable:not(.dragging)")].reduce(((e,n)=>{const s=n.getBoundingClientRect(),a=t-s.top-s.height/2;return a<0&&a>e.offset?{offset:a,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}static swap(e,t){[this.tasks[e],this.tasks[t]]=[this.tasks[t],this.tasks[e]]}static move(e,t){this.tasks.splice(t,0,this.tasks.splice(e,1)[0])}}var L=n(86),k=n(415);const E=document.querySelector("#to-do-list"),x=document.querySelector("#refresh"),b=document.querySelector("#enter"),T=document.querySelector("#add-task"),C=document.querySelector("#enter"),I=document.querySelector("#warning"),w=document.querySelector("#clear-all"),S=e=>{e.preventDefault();const t=e.clientY||e.touches[0].clientY,n=y.getDragAfterElement(E,t),s=document.querySelector(".dragging"),a=y.tasks.findIndex((e=>e.node===s));let r;n?(E.insertBefore(s,n),r=y.tasks.findIndex((e=>e.node===n))-1):(E.appendChild(s),r=y.tasks.length-1),a>r&&(r+=1),y.tasks[a].afterElementIndex=r};window.onload=()=>{y.loadLocalTasks(),y.populateAll(E),f(L,x),f(k,b),C.addEventListener("click",(()=>{if(T.value){const e=new y({description:T.value});e.add().populate(E,e.index-1),T.value=""}else I.classList.remove("d-none"),setTimeout((()=>I.classList.remove("opacity-0")),0),setTimeout((()=>I.classList.add("opacity-0")),2e3),setTimeout((()=>I.classList.add("d-none")),3e3)})),T.addEventListener("keyup",(e=>{13===e.keyCode&&C.click()})),w.addEventListener("click",(()=>{y.clearAllCompleted()})),E.addEventListener("dragover",(e=>{S(e)})),E.addEventListener("touchmove",(e=>{S(e)}))}})()})();