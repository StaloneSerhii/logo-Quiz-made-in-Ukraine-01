var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("5yURT");let c=0;function r(e){document.querySelector(".helper").addEventListener("click",(function(){if(p()>=5&&l.level1[e].answer.length>=c+1){let o=l.level1[e].answer.split("");const r=p();s(Number(r)-1),alert(o[c]),n+=o[c],t.value="",t.value+=n,t.placeholder+=o[c],c+=1}}));const t=document.querySelector(".inputClass");document.querySelector(".helper-twit").addEventListener("click",(function(){if(p()>=25){let n=l.level1[e].answer;console.log(n);const o=p();s(Number(o)-25),t.value="",t.value+=n,t.placeholder+=n}}));let n=""}function s(e){localStorage.removeItem("monney"),localStorage.setItem("monney",e);document.querySelector(".monney").textContent=p()}l=o("5yURT");let i="",a="";const u=document.querySelector(".levelsAll"),d=document.querySelector(".back-btn-ref"),m=document.querySelector(".logoList"),g=function(e){const t=document.querySelector(".monney");null===p()?t.textContent=0:t.textContent=p();return e.map((({logoHidden:e,idName:t,answer:n,logo:o})=>localStorage.getItem(`${n}`)===t?`<li><img class="imgList" src="${o}" alt="${t}" width="200px" /><img src="https://w7.pngwing.com/pngs/181/255/png-transparent-check-mark-computer-icons-others-angle-leaf-grass.png" alt="+" width="30" class="check"></li>`:`<li><img class="imgList" src="${e}" alt="${t}" width="200px" /></li>`)).join("")}(l.level1);function p(){let e=localStorage.getItem("monney");return JSON.parse(e)}m.insertAdjacentHTML("beforeend",g);const v=document.querySelector(".logoList");function b(e){i=e.target.alt;const{answer:t}=l.level1[i];a=localStorage.getItem(`${t}`),v.removeEventListener("click",b),f(a,i)}function f(e,t){console.log(t);const{logoHidden:n,idName:o,logo:c,info:s}=l.level1[t],a=Number(o);if(console.log(e,o),Number(e)===Number(a)){console.log("ringht"),d.hidden=!1,u.hidden=!0,function(){const e=`<div class="logoInput"><img src="${c}" alt="${o}" width="200px"><p>${s}</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>`;v.innerHTML=e;const t=document.querySelector(".next"),n=document.querySelector(".back");t.addEventListener("click",y),n.addEventListener("click",h)}()}else{d.hidden=!1,u.hidden=!0,function(){const e=`<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">Back</button></div><img src="${n}" alt="${o}" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next</button></div><form class="sendBtn"><input class="inputClass" placeholder="" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>`;v.innerHTML=e;document.querySelector(".sendBtn").addEventListener("submit",(function(e){e.preventDefault();let t=e.target[0].value;!function(e){const{idName:t,answer:n,logo:o,info:c}=l.level1[i];if(e===n)if(null===localStorage.getItem("monney"))localStorage.setItem("monney",5);else{const e=localStorage.getItem("monney"),l=JSON.parse(e),r=Number(l);let s=[];s.push(r),s.join("");let i=Number(s)+5;localStorage.removeItem("monney"),localStorage.setItem("monney",i),localStorage.setItem(`${n}`,`${t}`),document.querySelector(".monney").textContent=p();const a=`<div class="logoInput"><img src="${o}" alt="${t}" width="200px"><p>${c}</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>`;v.innerHTML=a;const u=document.querySelector(".next"),d=document.querySelector(".back");u.addEventListener("click",y),d.addEventListener("click",h)}else alert("Назва не вірна")}(t.toLowerCase())})),r(t);const c=document.querySelector(".next"),s=document.querySelector(".back");c.addEventListener("click",y),s.addEventListener("click",h)}()}}function y(){console.log("next"),i=Number(i)+1;const{answer:e}=l.level1[i];console.log(e),console.log(i),a=localStorage.getItem(`${e}`),v.removeEventListener("click",b),console.log(a),f(a,Number(i))}function h(){console.log("next"),i=Number(i)-1;const{answer:e}=l.level1[i];console.log(e),console.log(i),a=localStorage.getItem(`${e}`),v.removeEventListener("click",b),console.log(a),f(a,Number(i))}v.addEventListener("click",b);
//# sourceMappingURL=level1.718c7172.js.map
