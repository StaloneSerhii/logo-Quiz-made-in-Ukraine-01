!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("jyBrX"),c=0;function r(e){document.querySelector(".helper").addEventListener("click",(function(){if(g()>=5&&l.level1[e].answer.length>=c+1){var o=l.level1[e].answer.split(""),r=g();a(Number(r)-1),alert(o[c]),n+=o[c],t.value="",t.value+=n,t.placeholder+=o[c],c+=1}}));var t=document.querySelector(".inputClass");document.querySelector(".helper-twit").addEventListener("click",(function(){if(g()>=25){var n=l.level1[e].answer;console.log(n);var o=g();a(Number(o)-25),t.value="",t.value+=n,t.placeholder+=n}}));var n=""}function a(e){localStorage.removeItem("monney"),localStorage.setItem("monney",e),document.querySelector(".monney").textContent=g()}l=o("jyBrX");var i="",s="",u=document.querySelector(".levelsAll"),d=document.querySelector(".back-btn-ref"),m=document.querySelector(".logoList"),v=function(e){var t=document.querySelector(".monney");null===g()?t.textContent=0:t.textContent=g();return e.map((function(e){var t=e.logoHidden,n=e.idName,o=e.answer,l=e.logo;return localStorage.getItem("".concat(o))===n?'<li><img class="imgList" src="'.concat(l,'" alt="').concat(n,'" width="200px" /><img src="https://w7.pngwing.com/pngs/181/255/png-transparent-check-mark-computer-icons-others-angle-leaf-grass.png" alt="+" width="30" class="check"></li>'):'<li><img class="imgList" src="'.concat(t,'" alt="').concat(n,'" width="200px" /></li>')})).join("")}(l.level1);function g(){var e=localStorage.getItem("monney");return JSON.parse(e)}m.insertAdjacentHTML("beforeend",v);var p=document.querySelector(".logoList");function b(e){i=e.target.alt;var t=l.level1[i].answer;s=localStorage.getItem("".concat(t)),p.removeEventListener("click",b),f(s,i)}function f(e,t){console.log(t);var n=l.level1[t],o=n.logoHidden,c=n.idName,a=n.logo,s=n.info,m=Number(c);if(console.log(e,c),Number(e)===Number(m)){console.log("ringht"),d.hidden=!1,u.hidden=!0,function(){var e='<div class="logoInput"><img src="'.concat(a,'" alt="').concat(c,'" width="200px"><p>').concat(s,'</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>');p.innerHTML=e;var t=document.querySelector(".next"),n=document.querySelector(".back");t.addEventListener("click",y),n.addEventListener("click",h)}()}else{d.hidden=!1,u.hidden=!0,function(){var e='<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">Back</button></div><img src="'.concat(o,'" alt="').concat(c,'" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next</button></div><form class="sendBtn"><input class="inputClass" placeholder="" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>');p.innerHTML=e,document.querySelector(".sendBtn").addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=l.level1[i],n=t.idName,o=t.answer,c=t.logo,r=t.info;if(e===o)if(null===localStorage.getItem("monney"))localStorage.setItem("monney",5);else{var a=localStorage.getItem("monney"),s=JSON.parse(a),u=Number(s),d=[];d.push(u),d.join("");var m=Number(d)+5;localStorage.removeItem("monney"),localStorage.setItem("monney",m),localStorage.setItem("".concat(o),"".concat(n)),document.querySelector(".monney").textContent=g();var v='<div class="logoInput"><img src="'.concat(c,'" alt="').concat(n,'" width="200px"><p>').concat(r,'</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>');p.innerHTML=v;var b=document.querySelector(".next"),f=document.querySelector(".back");b.addEventListener("click",y),f.addEventListener("click",h)}else alert("Назва не вірна")}(e.target[0].value.toLowerCase())})),r(t);var n=document.querySelector(".next"),a=document.querySelector(".back");n.addEventListener("click",y),a.addEventListener("click",h)}()}}function y(){console.log("next"),i=Number(i)+1;var e=l.level1[i].answer;console.log(e),console.log(i),s=localStorage.getItem("".concat(e)),p.removeEventListener("click",b),console.log(s),f(s,Number(i))}function h(){console.log("next"),i=Number(i)-1;var e=l.level1[i].answer;console.log(e),console.log(i),s=localStorage.getItem("".concat(e)),p.removeEventListener("click",b),console.log(s),f(s,Number(i))}p.addEventListener("click",b)}();
//# sourceMappingURL=level1.28746c84.js.map
