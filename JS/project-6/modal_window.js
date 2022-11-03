const modalWindow = document.querySelector(".modal_window");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close_modal");
const btnCallModal = document.querySelector(".button_modal");
const addVisibility = function () {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
btnCallModal.addEventListener("click", addVisibility);
btnCloseModal.addEventListener("click", addVisibility);
overlay.addEventListener("click", addVisibility);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
