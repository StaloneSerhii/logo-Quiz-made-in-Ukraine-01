import { level1 } from './levelRend';

// Рендер логотипів рівня \\

const rend = document.querySelector('.logoList');
const addRend = rendLogo(level1);
rend.insertAdjacentHTML('beforeend', addRend);

function rendLogo(level1) {
  return level1
    .map(({ logoHidden, idName }) => {
      return `<li><img src="${logoHidden}" alt="${idName}" width="200px" height="150px"/></li>`;
    })
    .join('');
}

// Перевірка і рендер інпуту логотипа \\

const logoClick = document.querySelector('.logoList');
console.log(logoClick);
logoClick.addEventListener('click', renderInputLogo);

function renderInputLogo(e) {
  let numLogo = e.target.alt;
  const { logoHidden, idName, answer, logo, info } = level1[numLogo];

  const savedSettings = localStorage.getItem(`${answer}`);
  console.log(savedSettings);
  if (savedSettings === `${idName}`) {
    rendRinghtAnswer();
    function rendRinghtAnswer() {
      const rendAnswer = `<a href="./level1.html">Назад</a><div><img src="${logo}" alt="${idName}"height="150" width="200px"><span>${answer}</span><p>${info}</p></div>`;
      logoClick.innerHTML = ('beforeend', rendAnswer);
    }
  } else {
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<a href="./level1.html">Назад</a><div><img src="${logoHidden}" alt="${idName}"height="150" width="200px"><form class="sendBtn"><input type="text"><button >answer</button></form></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);

      const inputSend = document.querySelector('.sendBtn');
      inputSend.addEventListener('submit', listenInput);

      function listenInput(e) {
        e.preventDefault();
        let answerLogo = e.target[0].value;
        if (answerLogo === answer) {
          localStorage.setItem(`${answer}`, `${idName}`);
          const re = `<a href="./level1.html">Назад</a><div><img src="${logo}" alt="${idName}"height="150" width="200px"><span>${answer}</span><p>${info}</p></div>`;
          logoClick.innerHTML = ('beforeend', re);
        } else {
          alert('Newirno');
        }
      }
    }
  }
}

