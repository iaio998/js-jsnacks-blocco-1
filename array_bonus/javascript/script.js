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
  console.log(firstArray.length, secondArray.length);
  if (firstArray.length < secondArray.length) {
    let diff1 = secondArray.length - firstArray.length;
    for (let i = 0; i < diff1; i++) {
      let indexFirst = firstArray[i];
      firstArray.push(indexFirst);
    }
    msg = "Il secondo e' maggiore";
  } else if (firstArray.length > secondArray.length) {
    let diff2 = firstArray.length - secondArray.length;
    for (let a = 0; a < diff2; a++) {
      let indexSecond = secondArray[a];
      secondArray.push(indexSecond);
    }
    msg = "Il secondo e' minore";
  } else {
    msg = "Sono uguali";
  }
  console.log(firstArray.length, secondArray.length);
});
