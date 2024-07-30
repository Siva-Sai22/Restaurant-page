(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),c=t(667),d=t.n(c),s=new URL(t(771),t.b),l=r()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Roboto&display=swap);"]),l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);var p=d()(s);l.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: transparent;\n}\n\nbody {\n    height: 100vh;\n    box-sizing: border-box;\n    font-family: 'Open Sans', sans-serif;\n}\n\n#header {\n    padding: 0 8%;\n    background-color: #042f4b;\n    height: 8vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: fredoka, sans-serif;\n}\n\n#header p {\n    font-size: 32px;\n    color: red;\n    font-weight: bold;\n}\n\n#header ul {\n    color: palegoldenrod;\n    font-size: 20px;\n    width: 30%;\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\na:hover {\n    cursor: pointer;\n    color: #ed1250;\n    transition: 400ms;\n}\n\n.activelink {\n    color: #ed1250;\n}\n\n#content {\n    height: 92vh;\n    background-image: url(${p});\n    background-size: cover;\n    background-position: center;\n    opacity: 90%;\n}\n\n.homediv {\n    height: 80%;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\n.mainpara {\n    background: linear-gradient(to left, #ed1250 0%, #fbc99d 100%);\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    width: 50%;\n    text-align: center;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.belowtext {\n    background: linear-gradient(to left, #ed1250 0%, #fbc99d 100%);\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.homediv button {\n    background-color: #ed1250;\n    color: white;\n    font-weight: bold;\n    margin-top: 32px;\n    font-size: 20px;\n    padding: 8px 16px;\n    border-radius: 16px;\n}\n\n.addDiv {\n    color: #fbc99d;\n    font-size: 20px;\n    background-color: rgba(0,0,0,0.6);\n    position: absolute;\n    top: 70%;\n    width: 30vw;\n    height: 12vh;\n    padding: 32px;\n    border-radius: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n.menudiv {\n    background-color: #fff6da;\n    height: 100svh;\n}\n\n.menuheading {\n    font-size: 32px;\n    text-align: center;\n    padding: 24px;\n}\n\n.menuitems {\n    background-color: rgba(255, 68, 68, 0.28);\n    width: 75%;\n    margin: 0 auto;\n    border-radius: 16px;\n    padding: 32px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n}\n\n.menuitem {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 20px;\n}\n\n.menuitemphoto {\n    width: 150px;\n}\n\n.menuitemheading {\n    font-size: 20px;\n    margin-bottom: 12px;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=t(i[r]);n[c].references--}for(var d=a(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},771:(e,n,t)=>{e.exports=t.p+"3d1e915ab8bd60e7eec8.jpeg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),i=t(569),r=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("homediv");const t=document.createElement("p");t.classList.add("mainpara"),t.textContent="Indulge Your Senses and Elevate Your Dining Experience";const a=document.createElement("p");a.classList.add("belowtext"),a.textContent="Tasty and affordable";const o=document.createElement("button");o.textContent="Order Now";const i=document.createElement("div");i.classList.add("addDiv");const r=document.createElement("p");r.textContent="1024 Oakwood Ave San Diego, CA 22434";const c=document.createElement("p");c.textContent="Mon-Thurs:8am-8pm Fri-Sun:8am-11pm",i.appendChild(r),i.appendChild(c),n.appendChild(t),n.appendChild(a),n.appendChild(o),n.appendChild(i),e.appendChild(n)},g=t.p+"5def3cdd4cca83c61d05.png",v=t.p+"c447272b17a7d1327926.png",x=t.p+"37f80343f05d250f968a.png",b=t.p+"977ecea13cf8136c730a.png",C=t.p+"3de4f85c5ae658981ef3.png";!function(){f();const e=document.querySelector("#content");function n(n){for(;e.firstChild;)e.removeChild(e.lastChild);"Home"===n.target.textContent?f():"Menu"===n.target.textContent&&function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menudiv");const t=document.createElement("h1");t.textContent="Our Menu",t.classList.add("menuheading");const a=document.createElement("div");a.classList.add("menuitems");const o=document.createElement("div");o.classList.add("menuitem");const i=document.createElement("img");i.src=g,i.classList.add("menuitemphoto");const r=document.createElement("div");r.classList.add("menucontent");const c=document.createElement("h2");c.textContent="Cheeseburger",c.classList.add("menuitemheading");const d=document.createElement("p");d.textContent="Delicious cheeseburger with all the fixings.",d.classList.add("menuitemdescription");const s=document.createElement("div");s.classList.add("menuitem");const l=document.createElement("img");l.src=v,l.classList.add("menuitemphoto");const p=document.createElement("div");p.classList.add("menucontent");const u=document.createElement("h2");u.textContent="Hamburger",u.classList.add("menuitemheading");const m=document.createElement("p");m.textContent="Classic hamburger with juicy patty.",m.classList.add("menuitemdescription"),s.appendChild(l),p.appendChild(u),p.appendChild(m),s.appendChild(p),a.appendChild(s);const h=document.createElement("div");h.classList.add("menuitem");const f=document.createElement("img");f.src=x,f.classList.add("menuitemphoto");const y=document.createElement("div");y.classList.add("menucontent");const E=document.createElement("h2");E.textContent="Double Cheeseburger",E.classList.add("menuitemheading");const w=document.createElement("p");w.textContent="Two juicy patties with melted cheese.",w.classList.add("menuitemdescription"),h.appendChild(f),y.appendChild(E),y.appendChild(w),h.appendChild(y),a.appendChild(h);const L=document.createElement("div");L.classList.add("menuitem");const k=document.createElement("img");k.src=b,k.classList.add("menuitemphoto");const S=document.createElement("div");S.classList.add("menucontent");const T=document.createElement("h2");T.textContent="Steak",T.classList.add("menuitemheading");const j=document.createElement("p");j.textContent="Tender and juicy steak cooked to perfection.",j.classList.add("menuitemdescription"),L.appendChild(k),S.appendChild(T),S.appendChild(j),L.appendChild(S),a.appendChild(L);const M=document.createElement("div");M.classList.add("menuitem");const z=document.createElement("img");z.src=C,z.classList.add("menuitemphoto");const A=document.createElement("div");A.classList.add("menucontent");const O=document.createElement("h2");O.textContent="French Fries",O.classList.add("menuitemheading");const I=document.createElement("p");I.textContent="Crispy and golden french fries.",I.classList.add("menuitemdescription"),M.appendChild(z),A.appendChild(O),A.appendChild(I),M.appendChild(A),a.appendChild(M),o.appendChild(i),r.appendChild(c),r.appendChild(d),o.appendChild(r),a.appendChild(o),n.appendChild(t),n.appendChild(a),e.appendChild(n)}(),document.querySelectorAll("#header a").forEach((e=>{e.classList.remove("activelink")})),n.target.classList.add("activelink")}document.querySelectorAll("#header a").forEach((e=>{e.addEventListener("click",n)}))}()})()})();