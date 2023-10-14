// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

let firstArray = [1, 2, 25, 66, 12, 44, 67];
let secondArray = [1, 2, 25, 55];

btn.addEventListener("click", function () {
  console.log(firstArray.length, secondArray.length);
  if (firstArray.length < secondArray.length) {
    let diff1 = secondArray.length - firstArray.length;
    for (let i = 0; i < diff1; i++) {
      firstArray.push(getRndInteger);
    }
    msg = "Il secondo array era piu' lungo";
  } else if (firstArray.length > secondArray.length) {
    let diff2 = firstArray.length - secondArray.length;
    for (let a = 0; a < diff2; a++) {
      secondArray.push(getRndInteger);
    }
    msg = "Il primo array era piu' lungo";
  } else {
    msg = "I due array sono uguali";
  }
  console.log(firstArray.length, secondArray.length);
  console.log(msg);
});
