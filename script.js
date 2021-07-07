
const modal = document.querySelector('.modal');
const loginEl = document.querySelector('.login');
const modalClose = document.querySelector('.fa-times');
const modalOutside = document.querySelector('.login-modal-wrapper');


// When its close, remove is-active class. just a function. have to call later.
const closeModal = () => {
  modalOutside.classList.remove("is-active");
  modal.classList.remove("is-active");
};


// Adding is-active class
loginEl.addEventListener("click", () => {
  modalOutside.classList.add("is-active");
  modal.classList.add("is-active");
});


// when we click close, modal closes
modalClose.addEventListener("click", () => {
  closeModal();
});

// when we click ovrelay, modal closes
modalOutside.addEventListener("click", () => {
  closeModal();
});