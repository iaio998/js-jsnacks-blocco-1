// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const inputElSecond = document.getElementById("quanti");
const resultEl = document.querySelector(".alert");
let msg;

const casualNumb = [];

btn.addEventListener("click", function () {
  inputUser = parseInt(inputEl.value);
  inputUserSecond = parseInt(inputElSecond.value);
  for (let i = 0; i < inputUser; i++) {
    casualNumb.push(getRndInteger(0, 100));
    console.log(casualNumb);
  }
  console.log(
    casualNumb.slice(casualNumb.length - inputUserSecond, casualNumb.length)
  );
});
