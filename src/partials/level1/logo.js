import { level1 } from './levelRend';

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
      const rendAnswer = `<div><img src="/${logo}" alt="${idName}"height="100" width="100px"><span>${answer}</span><p>${info}</p></div>`;
      logoClick.innerHTML = ('beforeend', rendAnswer);
    }
  } else {
    rendAnsw();
    function rendAnsw() {
      const renderInput = `<div><img src="/${logoHidden}" alt="${idName}"height="100" width="100px"><form class="sendBtn"><input type="text"><button >answer</button></form></div>`;
      logoClick.innerHTML = ('beforeend', renderInput);

      const inputSend = document.querySelector('.sendBtn');
      inputSend.addEventListener('submit', listenInput);

      function listenInput(e) {
        e.preventDefault();
        let answerLogo = e.target[0].value;
        if (answerLogo === answer) {
          localStorage.setItem(`${answer}`, `${idName}`);
          const re = `<div><img src="/${logo}" alt="${idName}"height="100" width="100px"><span>${answer}</span><p>${info}</p></div>`;
          logoClick.innerHTML = ('beforeend', re);
        } else {
          alert('Newirno');
        }
      }
    }
  }
}

const reset = document.querySelector('.reset')
reset.addEventListener("click", ()=> {localStorage.clear()})