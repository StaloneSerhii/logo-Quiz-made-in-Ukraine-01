const e=[{idName:"1000",answer:"шевченко",logoHidden:"https://her-dan.pp.ua/img/exlevel1/shew.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/shw.jpg",info:"«Борітеся – поборете,Вам Бог помагає!За вас правда, за вас славаІ воля святая!»"},{idName:"1001",answer:"зеленський",logoHidden:"https://her-dan.pp.ua/img/exlevel1/zele.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/zel.jpg",info:"«Мені потрібна зброя, а не евакуація»"},{idName:"1002",answer:"джонсон",logoHidden:"https://her-dan.pp.ua/img/exlevel1/jon.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/jons.jpg",info:"«Добрий день everybody»"},{idName:"1003",answer:"симоненко",logoHidden:"https://her-dan.pp.ua/img/exlevel1/simo.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/sim.jpg",info:"«Можеш вибирати друзів і дружину, вибрати не можеш тільки Батьківщину »"},{idName:"1004",answer:"галаневич",logoHidden:"https://her-dan.pp.ua/img/exlevel1/gale.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/gal.jpg",info:"«Доброго вечора, ми з України» Слова, з яких зробили семпл, озвучив учасник українського гурту «ДахаБраха» Марко Галаневич."},{idName:"1005",answer:"поворознюк",logoHidden:"https://her-dan.pp.ua/img/exlevel1/pov.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/povo.jpg",info:"«Вова, їбаш їх, бл*ть»"},{idName:"1006",answer:"костенко",logoHidden:"https://her-dan.pp.ua/img/exlevel1/kost.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/kos.jpg",info:"«А й правда, крилатим ґрунту не треба.Землі немає, то буде небо.Немає поля, то буде воля.Немає пари, то будуть хмари.В цьому, напевно, правда пташина...А як же людина? А що ж людина?»"},{idName:"1007",answer:"українка",logoHidden:"https://her-dan.pp.ua/img/exlevel1/ukra.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/ukr.jpg",info:"«Ні долі, ні волі у мене нема,Зосталася тільки надія одна:Надія вернутись ще раз на Вкраїну,»"},{idName:"1008",answer:"стасік",logoHidden:"https://her-dan.pp.ua/img/exlevel1/st.jpg",logo:"https://her-dan.pp.ua/img/exlevel1/stas.jpg",info:"«Фраза-застереження російським окупантам із пісні «Колискова для ворога» української співачки, авторки й учасниці війни на Сході України Анастасії Шевченко (псевдонім СТАСІК).»"}];let t=0;function n(n){document.querySelector(".helper").addEventListener("click",(function(){if(d()>=5&&e[n].answer.length>=t+1){let i=e[n].answer.split("");const s=d();o(Number(s)-1),alert(i[t]),a+=i[t],l.value="",l.value+=a,l.placeholder+=i[t],t+=1}}));const l=document.querySelector(".inputClass");document.querySelector(".helper-twit").addEventListener("click",(function(){if(d()>=25){let t=e[n].answer;const a=d();o(Number(a)-25),l.value="",l.value+=t,l.placeholder+=t}}));let a=""}function o(e){localStorage.removeItem("monney"),localStorage.setItem("monney",e);document.querySelector(".monney").textContent=d()}let l="",a="";const i=document.querySelector(".levelsAll"),s=document.querySelector(".back-btn-ref"),r=document.querySelector(".logoList"),c=function(e){const t=document.querySelector(".monney");null===d()?t.textContent=0:t.textContent=d();return e.map((({logoHidden:e,idName:t,answer:n,logo:o})=>localStorage.getItem(`${n}`)===t?`<li><img class="imgList" src="${o}" alt="${t}" width="200px" /><img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png" alt="+" width="40" class="check"></li>`:`<li><img class="imgList" src="${e}" alt="${t}" width="200px" /></li>`)).join("")}(e);function d(){let e=localStorage.getItem("monney");return JSON.parse(e)}r.insertAdjacentHTML("beforeend",c);const u=document.querySelector(".logoList");function p(t){l=t.target.alt-1e3;const{answer:n}=e[l];a=localStorage.getItem(`${n}`),u.removeEventListener("click",p),g(a,l)}function g(t,o){const{logoHidden:a,idName:r,logo:c,info:p}=e[o],g=Number(r);if(t==Number(g)){s.hidden=!1,i.hidden=!0,function(){const e=`<div class="logoInput"><img src="${c}" alt="${r}" width="200px"><p>${p}</p><button class="helper back">< Back</button><button  class="helper-twit next">Next ></button></div>`;u.innerHTML=e;const t=document.querySelector(".next"),n=document.querySelector(".back");t.addEventListener("click",m),n.addEventListener("click",h),0===o?n.classList+=" visually-hidden":8===o&&(t.classList+=" visually-hidden")}()}else{s.hidden=!1,i.hidden=!0,function(){const t=`<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">< Back</button></div><img src="${a}" alt="${r}" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next ></button></div><form class="sendBtn"><input class="inputClass" placeholder="введіть фамілію автора" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>`;u.innerHTML=t;document.querySelector(".sendBtn").addEventListener("submit",(function(t){t.preventDefault();let n=t.target[0].value;!function(t){const{idName:n,answer:o,logo:a,info:i}=e[l];if(t===o)if(null===localStorage.getItem("monney"))localStorage.setItem("monney",5);else{const e=localStorage.getItem("monney"),t=JSON.parse(e),s=Number(t);let r=[];r.push(s),r.join("");let c=Number(r)+5;localStorage.removeItem("monney"),localStorage.setItem("monney",c),localStorage.setItem(`${o}`,`${n}`),document.querySelector(".monney").textContent=d();const p=`<div class="logoInput"><img src="${a}" alt="${n}" width="200px"><p>${i}</p><button class="helper back">< Back</button><button  class="helper-twit next">Next></button></div>`;u.innerHTML=p;const g=document.querySelector(".next"),v=document.querySelector(".back");g.addEventListener("click",m),v.addEventListener("click",h),0===l?v.classList+=" visually-hidden":8===l&&(g.classList+=" visually-hidden")}else alert("Назва не вірна")}(n.toLowerCase().trimRight().trimLeft())})),n(o);const i=document.querySelector(".next"),s=document.querySelector(".back");i.addEventListener("click",m),s.addEventListener("click",h),0===o?s.classList+=" visually-hidden":8===o&&(i.classList+=" visually-hidden")}()}}function m(){l=Number(l)+1;const{answer:t}=e[l];a=localStorage.getItem(`${t}`),u.removeEventListener("click",p),g(a,Number(l))}function h(){l=Number(l)-1;const{answer:t}=e[l];a=localStorage.getItem(`${t}`),u.removeEventListener("click",p),g(a,Number(l))}u.addEventListener("click",p);
//# sourceMappingURL=extralevel1.77fa7bab.js.map