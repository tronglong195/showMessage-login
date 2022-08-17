// select element

const messageOk = document.querySelector(".message--ok");
const btnShow = document.querySelector(".box--btn");
const btnHide = document.querySelector(".box--btn__bue");
const btnClose = document.querySelector(".message--ok__close");
// addeventListener
// show
btnShow.addEventListener("click", (e) => {
  e.preventDefault();
  messageOk.classList.toggle("animation-right");
  console.log("add animation");
});
// hide

btnHide.addEventListener("click", (e) => {
  e.preventDefault();
  messageOk.classList.remove("animation-right");
  console.log("add animation");
});
// close in message

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  messageOk.classList.remove("animation-right");
  console.log("add animation");
});
