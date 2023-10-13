// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

const casualNumb = [];

btn.addEventListener("click", function () {
  let inputUser = parseInt(inputEl.value);
  for (let i = 0; i < inputUser; i++) {
    console.log(inputUser[i]);
  }
});
