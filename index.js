const colors = ["green", "red", "orange", "yellow", "gray"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
