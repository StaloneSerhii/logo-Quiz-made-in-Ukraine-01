import { level1 } from '../partials/level1/levelRend';
import { linkLevel } from './linkLevel';

const sectionLevels = document.querySelector('section');
let allLogoBase = level1.length;
let allAnswerLogo = [];

for (let i = 0; i < allLogoBase; i++) {
  const { answer } = level1[i];
  const localKeyAnswer = localStorage.getItem(`${answer}`);
  if (localKeyAnswer) {
    allAnswerLogo.splice(0, 0, localKeyAnswer);
  }
}
renderLevels()

function renderLevels() {

  for (let i = 0; i < linkLevel.length; i++) {
    const {link} = linkLevel[i]
    const rLevel = `
        <div>
        <a href="${link}">
            <h2>Рівень ${i+1}</h2>
            <h3>Розгаданих: ${allAnswerLogo.length}</h3>
            <h3>Логотипів: ${allLogoBase}</h3>
        </a>
    </div>`
    sectionLevels.insertAdjacentHTML("beforeend", rLevel)
  }

}
