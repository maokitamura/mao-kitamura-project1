
const modal = document.querySelector('.modal');
const loginEl = document.querySelector('.login');
const modalClose = document.querySelector('.fa-times');
const modalOutside = document.querySelector('.login-modal-wrapper');


// when its close taking off is-active class. just a function. have to call later.
const closeModal = () => {
  modalOutside.classList.remove("is-active");
  modal.classList.remove("is-active");
};


// Adding is-active class
loginEl.addEventListener("click", () => {
  modalOutside.classList.add("is-active");
  modal.classList.add("is-active");
});


const formEl = document.querySelector('#login-form');


// when we click close, modal closes
modalClose.addEventListener("click", () => {
  closeModal();
});

// when we click ovrelay, modal closes
modalOutside.addEventListener("click", () => {
  closeModal();
});