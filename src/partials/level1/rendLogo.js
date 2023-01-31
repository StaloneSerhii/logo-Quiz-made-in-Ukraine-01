import { level1 } from './levelRend';

// Рендер логотипів рівня \\

const rend = document.querySelector('.logoList');
const addRend = rendLogo(level1);
rend.insertAdjacentHTML('beforeend', addRend);

function rendLogo(level1) {
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
  console.log(e.currentTarget);
  let numLogo = e.target.alt;
  const { logoHidden, idName, answer, logo, info } = level1[numLogo];

  const savedSettings = localStorage.getItem(`${answer}`);
  logoClick.removeEventListener('click', renderInputLogo);
  if (savedSettings === `${idName}`) {
    // Ренд правильної відповіді завчасно
    rendRinghtAnswer();
    function rendRinghtAnswer() {
      const rendAnswer = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p></div>`;
      logoClick.innerHTML = ('beforeend', rendAnswer);
    }
  } else {
    // Ренд невизначаної відповіді
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<div class="logoInput"><img src="${logoHidden}" alt="${idName}" width="200px"><form class="sendBtn"><input class="inputClass" type="text"><button class="btn-answer">Відповідь</button></form></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);

      const inputSend = document.querySelector('.sendBtn');
      inputSend.addEventListener('submit', listenInput);

      function listenInput(e) {
        e.preventDefault();
        let answerLogo = e.target[0].value;
        const answerLogoUpCase = answerLogo.toLowerCase()
        console.log(answerLogoUpCase);
        if (answerLogoUpCase === answer) {
          // Ренд правильної відповіді
          localStorage.setItem(`${answer}`, `${idName}`);
          const re = `<div class="logoInput"><img src="${logo}" alt="${idName}" width="200px"><p>${info}</p></div>`;
          logoClick.innerHTML = ('beforeend', re);
        } else {
          // Ренд невірної відповіді
          alert('Назва не вірна');
        }
      }
    }
  }
}
