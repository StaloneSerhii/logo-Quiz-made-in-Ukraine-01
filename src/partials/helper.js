import { level1 } from './level1/levelRend';
import { getMoney, renderInputLogo, numLogo } from './level1/rendLogo';
let hel = 0;
export function help(params) {
  const helpBtn = document.querySelector('.helper');
  helpBtn.addEventListener('click', helper);
  const inputClass = document.querySelector('.inputClass');
  const helperTwit = document.querySelector('.helper-twit');
  helperTwit.addEventListener('click', helperNext);

  function helperNext() {
    console.log(params);
    if (getMoney() >= 15) {
      let backLevel = level1[params].answer;
      console.log(backLevel);
      const getMoneys = getMoney();
      refreshLS(Number(getMoneys) - 15);
      inputClass.value = '';
        inputClass.value += backLevel;
    }
  }
let val ='';
  function helper() {
    if (getMoney() >= 1) {
      if (level1[params].answer.length >= hel+1) {
  let backLevel = level1[params].answer.split('');
  const getMoneys = getMoney();
  refreshLS(Number(getMoneys) - 1);
  alert(backLevel[hel]);

val += backLevel[hel]
inputClass.value = '';
inputClass.value += val;
inputClass.placeholder += backLevel[hel];





console.log(level1[params].answer.length , hel);
      hel += 1;
     }
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
