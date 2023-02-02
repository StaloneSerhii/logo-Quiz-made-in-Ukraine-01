import { level1 } from './levelRend';

// Кнопки в хедері
const hiddenLevels = document.querySelector('.levelsAll');
const backHidden = document.querySelector('.back-btn-ref');

// Рендер логотипів рівня \\
const rend = document.querySelector('.logoList');
const addRend = rendLogo(level1);
rend.insertAdjacentHTML('beforeend', addRend);

// Функція рендеру грошей...
function getMoney() {
  let monneys = localStorage.getItem('monney');
  return (monneysParse = JSON.parse(monneys));
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
  let numLogo = e.target.alt;

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
    // Ренд невизначаної відповіді(інпуту)
    backHidden.hidden = false;
    hiddenLevels.hidden = true;
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<div class="logoInput"><img src="${logoHidden}" alt="${idName}" width="200px"><form class="sendBtn"><input class="inputClass" type="text"><button class="btn-answer">Відповідь</button></form></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);

      const inputSend = document.querySelector('.sendBtn');
      inputSend.addEventListener('submit', listenInput);

      function listenInput(e) {
        e.preventDefault();
        let answerLogo = e.target[0].value;
        const answerLogoUpCase = answerLogo.toLowerCase();
        if (answerLogoUpCase === answer) {
          const monney = localStorage.getItem('monney');

          if (monney === null) {
            localStorage.setItem('monney', 5);
          } else {
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
