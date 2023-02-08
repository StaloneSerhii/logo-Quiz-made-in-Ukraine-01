import { exLevel1 } from './level1/extreLevel'
import { getMoney } from './level1/extralev1';
 export let hel = 0;
export function exHelp(params) {
  const helpBtn = document.querySelector('.helper');
  helpBtn.addEventListener('click', helper);
  const inputClass = document.querySelector('.inputClass');
  const helperTwit = document.querySelector('.helper-twit');
  helperTwit.addEventListener('click', helperNext);

  function helperNext() {
    if (getMoney() >= 25) {
     
      let backLevel = exLevel1[params].answer;
      const getMoneys = getMoney();
      refreshLS(Number(getMoneys) - 25);
      inputClass.value = '';
        inputClass.value += backLevel;
        inputClass.placeholder += backLevel;
        
    }
  }
let val ='';
  function helper() {
    if (getMoney() >= 5) {
      if (exLevel1[params].answer.length >= hel+1) {
  let backLevel = exLevel1[params].answer.split('');
  const getMoneys = getMoney();
  refreshLS(Number(getMoneys) - 1);
  alert(backLevel[hel]);

val += backLevel[hel]
inputClass.value = '';
inputClass.value += val;
inputClass.placeholder += backLevel[hel];
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
