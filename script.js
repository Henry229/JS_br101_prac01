const windowScreen1 = document.querySelector('.p1');
const windowScreen2 = document.querySelector('.p2');
const windowScreen3 = document.querySelector('.p3');
const windowScreen4 = document.querySelector('.p4');

const updateWindow = () => {
  windowScreen1.innerText = `${window.screen.width}, ${window.screen.height}`;
  windowScreen2.innerText = `${window.outerWidth}, ${window.outerHeight}`;
  windowScreen3.innerText = `${window.innerWidth}, ${window.innerHeight}`;
  windowScreen4.innerText = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
};

window.addEventListener('resize', () => {
  updateWindow();
});
updateWindow();
