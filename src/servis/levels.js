import { level1 } from '../partials/level1/levelRend';

let allLogoBase = level1.length;
let allAnswerLogo = [];

for (let i = 0; i < allLogoBase; i++) {
  const { answer } = level1[i];
  const localKeyAnswer = localStorage.getItem(`${answer}`);
  if (localKeyAnswer) {
    allAnswerLogo.splice(0, 0, localKeyAnswer);
  }
}

const title = document.querySelector(".answerLogoLevel");
title.textContent = `${allAnswerLogo.length}`;