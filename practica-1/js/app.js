const btnBurger = document.querySelector('#btnBurger');
const nav = document.querySelector('#nav');

btnBurger.addEventListener('click', function () {
  console.log('click');
  nav.classList.toggle('active');
});