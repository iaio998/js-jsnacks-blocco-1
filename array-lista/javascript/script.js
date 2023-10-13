// UTILITY
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

const fridge = [
  "banana",
  "mela",
  "pera",
  "ciliegia",
  "arancia",
  "mandarino",
  "cocomero",
  "limone",
  "fragola",
];
const peach = "pesca";
console.log(fridge);

btn.addEventListener("click", function () {
  fridge.push(peach);
  msg = `Ottimo, la tua ${peach} e' stata spostata in frigo :D`;
  console.log(fridge);
  console.log(msg);
});
