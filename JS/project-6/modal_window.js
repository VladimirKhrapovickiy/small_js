const modalWindow = document.querySelector(".modal_window");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close_modal");
const btnCallModal = document.querySelector(".button_modal");
const addDisplayNone = function () {
  modalWindow.classList.toggle("display_none");
  overlay.classList.toggle("display_none");
};
btnCallModal.addEventListener("click", addDisplayNone);
btnCloseModal.addEventListener("click", addDisplayNone);
overlay.addEventListener("click", addDisplayNone);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalWindow.classList.add("display_none");
    overlay.classList.add("display_none");
  }
});
