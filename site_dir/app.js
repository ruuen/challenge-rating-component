const form = document.querySelector(".rating__options");
const formBtns = document.querySelectorAll(".rating__options-btn");

formBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearBtnSelection();
    setActiveBtn(btn);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const activeBtn = getActiveBtnValue();

  if (!activeBtn) {
    return;
  }

  showSubmitMsg(activeBtn);
});

const setActiveBtn = (btn) => {
  btn.classList.add("rating__options-btn--active");
};

const getActiveBtnValue = () => {
  const activeBtn = document.querySelector(".rating__options-btn--active");
  return activeBtn ? activeBtn.value : false;
};

const clearBtnSelection = () => {
  formBtns.forEach((btn) => {
    btn.classList.remove("rating__options-btn--active");
  });
};

const showSubmitMsg = (rating) => {
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
  document.querySelector(".thank-you__rating").innerText = `You selected ${rating} out of 5`;
};
