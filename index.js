const form = document.querySelector('form');
const inputEL = document.getElementById('input');
const currentEL = form.addEventListener('click', (e) => {
  const { name } = e.target;
  switch (name) {
    case 'first': {
      console.log('This is a first button', inputEL.value);
      break;
    }
    case 'second': {
      console.log('This is a second button', inputEL.value);
      break;
    }
    case 'last': {
      console.log('This is a last button', inputEL.value);
      break;
    }
    default:
      return;
  }
});
