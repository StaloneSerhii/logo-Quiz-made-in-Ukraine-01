// Кнопка ресен в опціях
const reset = document.querySelector('.reset');
const alertR = document.querySelector('body');
reset.addEventListener('click', () => {
  alertR.insertAdjacentHTML('beforeend', `<span>Прогрес скинуто</span>`)
  localStorage.clear()
});



