const onSubmit = (e) => {
  e.preventDefault();
  console.log(inputEL.value);
};

const formEL = document.querySelector('form');
const inputEL = document.getElementById('input');
formEL.addEventListener('submit', onSubmit);
