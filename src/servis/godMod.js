import { level1 } from '../partials/level1/levelRend';
import { addEasy } from '../partials/level1/test';

const lastElementIndex = level1.length;

const formInput = document.querySelector('form');
formInput.addEventListener('submit', createForm);

function createForm(e) {
  e.preventDefault();
  const { answer, logo, logoHidden, info } = e.currentTarget;

  const answers = answer.value;
  const logos = logo.value;
  const logoHiddens = logoHidden.value;
  const inf = info.value;

  const objLogo = {
    idName: lastElementIndex,
    answer: answers,
    logo: logos,
    logoHidden: logoHiddens,
    info: inf,
  };

  const logoAdd = [objLogo];
  addEasy.push(logoAdd);
  console.log(addEasy);
}
