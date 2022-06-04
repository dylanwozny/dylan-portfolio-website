var button = document.querySelector(".nav-btn");
console.log(button);

button.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-show");
});
