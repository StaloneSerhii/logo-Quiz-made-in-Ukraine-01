import { level1 } from "./levelRend";
const list = document.querySelector(".listLogo")
const numLogos = level1.length
const allLogo = renderLogo(level1)
list.insertAdjacentHTML("beforeend", allLogo)
list.addEventListener('click', renderInputLogo)
let numLogo = '';
function renderLogo(level1) {
  return level1.map(({previewLogo, idName}) => {
 
   return `<li><img src="./img/${previewLogo}" alt="${idName}" width=80px></li>`
  }).join('')
}

function renderInputLogo(e) {
    let altLogoFind = e.target.alt
const findLogo = level1.findIndex(find => find.idName === altLogoFind)
const {idName, logoHidden} = level1[findLogo]
const showInputLogo = `<div><img src="./img/${logoHidden}" width = 100px alt="${idName}"><input type="text"></div>`

list.innerHTML = ('beforeend', showInputLogo)
}
