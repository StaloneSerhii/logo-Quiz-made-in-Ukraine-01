import { level1 } from './level1/levelRend';
import { getMoney, renderInputLogo, numLogo } from './level1/rendLogo';
let hel = 0
export function help(params) {
  const helpBtn = document.querySelector('.helper');
  helpBtn.addEventListener('click', helper);

  function helper() {
    console.log(params);
if ( getMoney() > 1) {
  
    backLevel = level1[params].answer.split('');

    const getMoneys = getMoney();
    refreshLS(Number(getMoneys) - 1);
    alert(backLevel[hel])
    hel += 1
}

  }
}

function refreshLS(params) {
  // оновленя локал маней
  localStorage.removeItem('monney');
  localStorage.setItem('monney', params);

  // Оновлення грошей після відповіді
  const showMonney = document.querySelector('.monney');
  showMonney.textContent = getMoney();
}
