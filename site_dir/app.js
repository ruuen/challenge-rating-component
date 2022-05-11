const formBtns = document.querySelectorAll(".rating__options-btn");

formBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearBtnSelection();
    setActiveBtn(btn);
  });
});

const setActiveBtn = (btn) => {
  btn.classList.add("rating__options-btn--active");
};

const clearBtnSelection = () => {
  formBtns.forEach((btn) => {
    btn.classList.remove("rating__options-btn--active");
  });
};
