const onClickA = (e) => {
  console.log(inputEL.value);
};
const onClickB = (e) => {
  console.log(inputEL.value);
};
const onClickC = (e) => {
  console.log(inputEL.value);
};

const inputEL = document.getElementById('input');
const a = document
  .querySelector('[data-a]')
  .addEventListener('click', onClickA);
const b = document
  .querySelector('[data-b]')
  .addEventListener('click', onClickB);
const c = document
  .querySelector('[data-c]')
  .addEventListener('click', onClickC);
