import { help } from '../helper';
import { level1 } from './levelRend';

let numLogo = '';
let savedSettings =''
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
  const { answer } = level1[numLogo];
  savedSettings = localStorage.getItem(`${answer}`);
  logoClick.removeEventListener('click', renderInputLogo);
  rennLogoInputu(savedSettings, numLogo);
}

// ренд логотипу і інпуту
function rendInputu(answerLogoUpCase) {

  const { idName, answer, logo, info } = level1[numLogo];

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

      const re = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>`;
      logoClick.innerHTML = ('beforeend', re);
      const nextBt = document.querySelector('.next');
      const backBt = document.querySelector('.back');
      nextBt.addEventListener('click', nextBtn);
      backBt.addEventListener('click', backBtn);
    }
  } else {
    // Ренд невірної відповіді
    alert('Назва не вірна');
  }
}

function rennLogoInputu(savedSettings, numLogo) {
  console.log(numLogo);
  const { logoHidden, idName, logo, info } = level1[numLogo];
  const idname = Number(idName)
  console.log(savedSettings, idName);
  if (Number(savedSettings) === Number(idname)) {
    console.log('ringht');
    // Ренд правильної відповіді завчасно
    backHidden.hidden = false;
    hiddenLevels.hidden = true;
    rendRinghtAnswer();
    function rendRinghtAnswer() {
      const rendAnswer = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p><button class="helper back">Back</button><button  class="helper-twit next">Next</button></div>`;
      logoClick.innerHTML = ('beforeend', rendAnswer);
      // Слухач на кнопку далі
      const nextBt = document.querySelector('.next');
      const backBt = document.querySelector('.back');
      nextBt.addEventListener('click', nextBtn);
      backBt.addEventListener('click', backBtn);
    }
  } else {
    // Ренд невизначаної відповіді(інпуту)
    backHidden.hidden = false;
    hiddenLevels.hidden = true;
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">Back</button></div><img src="${logoHidden}" alt="${idName}" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next</button></div><form class="sendBtn"><input class="inputClass" placeholder="" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);
      const inputSend = document.querySelector('.sendBtn');
      inputSend.addEventListener('submit', listenInput);

      help(numLogo);
      const nextBt = document.querySelector('.next');
      const backBt = document.querySelector('.back');
      nextBt.addEventListener('click', nextBtn);
      backBt.addEventListener('click', backBtn);

      function listenInput(e) {
        e.preventDefault();
        let answerLogo = e.target[0].value;
        const answerLogoUpCase = answerLogo.toLowerCase();
        rendInputu(answerLogoUpCase);
      }
    }
  }
}

// btn next back

function nextBtn() {
  console.log('next');
  numLogo=  Number(numLogo)+1
  const { answer } = level1[numLogo];
  console.log(answer);
  console.log(numLogo);
  savedSettings = localStorage.getItem(`${answer}`);
  logoClick.removeEventListener('click', renderInputLogo);

console.log(savedSettings);
  rennLogoInputu(savedSettings, Number(numLogo));
}
function backBtn() {
  console.log('next');
  numLogo=  Number(numLogo)-1
  const { answer } = level1[numLogo];
  console.log(answer);
  console.log(numLogo);
  savedSettings = localStorage.getItem(`${answer}`);
  logoClick.removeEventListener('click', renderInputLogo);

console.log(savedSettings);
  rennLogoInputu(savedSettings, Number(numLogo));
}
