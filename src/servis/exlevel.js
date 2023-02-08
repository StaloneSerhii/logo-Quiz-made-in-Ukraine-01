import { exLevel1 } from '../partials/level1/extreLevel';
let allLogoBaseEx = exLevel1.length;
let allAnswerLogoEx = [];

for (let i = 0; i < allLogoBaseEx; i++) {
  console.log(allLogoBaseEx);
  const { answer } = exLevel1[i];
  const localKeyAnswerEx = localStorage.getItem(`${answer}`);
  if (localKeyAnswerEx) {
    allAnswerLogoEx.splice(0, 0, localKeyAnswerEx);
  }
}

const titleEx = document.querySelector('.answerLogoLevelEx');
titleEx.textContent = `${allAnswerLogoEx.length}`;
