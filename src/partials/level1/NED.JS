import { help } from '../helper';
import { level1 } from './levelRend';

export let numLogo = '';
// Кнопки в хедері
const hiddenLevels = document.querySelector('.levelsAll');
const backHidden = document.querySelector('.back-btn-ref');

// Рендер логотипів рівня \\
const rend = document.querySelector('.logoList');
const addRend = rendLogo(level1);
rend.insertAdjacentHTML('beforeend', addRend);

// Функція рендеру грошей...
export function getMoney() {
  let monneys = localStorage.getItem('monney');
  return JSON.parse(monneys);
}

function rendLogo(level1) {
  const showMonney = document.querySelector('.monney');
  if (getMoney() === null) {
    showMonney.textContent = 0;
  } else {
    showMonney.textContent = getMoney();
  }

  return level1
    .map(({ logoHidden, idName, answer, logo }) => {
      const rendTest = localStorage.getItem(`${answer}`);
      if (rendTest === idName) {
        return `<li><img class="imgList" src="${logo}" alt="${idName}" width="200px" /><img src="https://w7.pngwing.com/pngs/181/255/png-transparent-check-mark-computer-icons-others-angle-leaf-grass.png" alt="+" width="30" class="check"></li>`;
      } else {
        return `<li><img class="imgList" src="${logoHidden}" alt="${idName}" width="200px" /></li>`;
      }
    })
    .join('');
}

// Перевірка і рендер інпуту логотипа \\

const logoClick = document.querySelector('.logoList');
logoClick.addEventListener('click', renderInputLogo);

function renderInputLogo(e) {
  numLogo = e.target.alt;

  const { logoHidden, idName, answer, logo, info } = level1[numLogo];

  const savedSettings = localStorage.getItem(`${answer}`);
  logoClick.removeEventListener('click', renderInputLogo);
  if (savedSettings === `${idName}`) {
    // Ренд правильної відповіді завчасно
    backHidden.hidden = false;
    hiddenLevels.hidden = true;
    rendRinghtAnswer();
    function rendRinghtAnswer() {
      const rendAnswer = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p></div>`;
      logoClick.innerHTML = ('beforeend', rendAnswer);

      // Слухач на кнопку далі
    }
  } else {
    let add = 0;
    // Ренд невизначаної відповіді(інпуту)
    backHidden.hidden = false;
    hiddenLevels.hidden = true;
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<div class="logoInput"><img src="${logoHidden}" alt="${idName}" width="200px"><button class="helper-twit">></button><ul class="inputClass"  type="text"></ul><ul class = "word"></ul></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);

      const inputSend = document.querySelector('.inputClass');
      const answerPoint = document.querySelector('.word');

      let randomMas = [];
      const masAnswer = answer.split('');
      const alfavit = 'йцукенгшщзхїфівапролджєячсмитьбю'.split('');
      const cikl = 14 - masAnswer.length;
      let pushRng = '';

      for (let i = 0; i < cikl; i++) {
        const randomMath = Math.random() * (10 - 1) + 1;
        randomMas.push(alfavit[Math.round(randomMath)]);
      }

      const allMasiveRandom = randomMas.concat(masAnswer);

      function makeRandomArr(a, b) {
        return Math.random() - 0.5;
      }
      const fin = allMasiveRandom.sort(makeRandomArr);

      for (let i = 0; i < allMasiveRandom.length; i++) {
        const rendWord = `<li><h3 name="${i}" class="inputCub">${fin[i]}</h3></li>`;
        answerPoint.insertAdjacentHTML('beforeend', rendWord);
      }
      if (pushRng.length > 0) {
        pushRng -= 1
      }

      help();

      const word = document.querySelector('.word');
      word.addEventListener('click', listenIn);

      let wordsPack = '';
      let answerInput = [];

      for (let i = 0; i < answer.length; i++) {
        const backroundPos = `<li style="background-color: aqua"><h3 name="${i}" class="inputWord">-</h3></li>`;
        inputSend.insertAdjacentHTML('beforeend', backroundPos);
      }

      function listenIn(e) {
        if (answerInput.length < answer.length) {
          answerInput .push(e.target.textContent)
        }

        let words = e.target.textContent;
        let wordsD = e.target;
        wordsPack += words;
        godHelp += 1
        console.log(godHelp);
        let delH = e.target;
       
        if (pushRng.length < answer.length) {
          
          pushRng +=1
          inputSend.childNodes[add].textContent= e.target.textContent
          add += 1
          console.log(add)
          // inputSend.insertAdjacentHTML('beforeend', rendInput);
          delH.remove();
        }

        

 
      }
    let godHelp = 0
    console.log(godHelp);
// видалення веденого

      inputSend.addEventListener('click', removedGit);
      function removedGit(e) {
        if (0 < godHelp) {
          godHelp -= 1
        const numDell = answerInput.indexOf(e.target.textContent)
        answerInput = answerInput .splice(numDell, 1);
        let delH = e.target;

        word.insertAdjacentHTML(
          'beforeend',
          `<li><h3 class="inputCub">${delH.textContent}</h3></li>`
        )
  delH.textContent= "";

}
      }

      function listenInput() {

        if (answerLogoUpCase === answer) {
          const monney = localStorage.getItem('monney');
          if (monney === null) {
            localStorage.setItem('monney', 5);
          } else {
            // showMonney.refresh();
            const monney = localStorage.getItem('monney');
            const monneyParse = JSON.parse(monney);
            const asd = Number(monneyParse);
            let qwe = [];
            qwe.push(asd);
            qwe.join('');
            let qaqa = Number(qwe) + 5;
            localStorage.removeItem('monney');
            localStorage.setItem('monney', qaqa);
            localStorage.setItem(`${answer}`, `${idName}`);

            // Оновлення грошей після відповіді
            const showMonney = document.querySelector('.monney');
            showMonney.textContent = getMoney();

            const re = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p></div>`;
            logoClick.innerHTML = ('beforeend', re);
          }
        } else {
          // Ренд невірної відповіді
          alert('Назва не вірна');
        }
      }
    }
  }
}
