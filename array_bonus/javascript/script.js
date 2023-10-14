// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

let firstArray = [1, 2, 25, 55, 42, 4];
let secondArray = [1, 2, 25, 55, 42, 4, 7, 89, 66];

btn.addEventListener("click", function () {
  for (let i = 0; i < firstArray.length; i++) {
    let indexFirst = firstArray[i];
    console.log(indexFirst);
  }
  for (let a = 0; a < secondArray.length; a++) {
    let indexSecond = secondArray[a];
    console.log(indexSecond);
  }
});
