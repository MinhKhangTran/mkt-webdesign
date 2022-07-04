// Selector
const upButton = document.querySelector(".up");

// appear if scrolled 350
window.addEventListener("scroll", () => {
  if (window.scrollY >= 290) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
});