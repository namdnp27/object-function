// fighter game
let fighter = ["a", "b", "c", "d", "e", "f", "g", "h", "l", "k", "m", "n", "x", "z"];
// console.log(fighter.length); // array length 14

let stageEl = document.getElementById("stage");
let fighterButton = document.getElementById("fighterBtn");

fighterButton.addEventListener("click", function () {
  let randomIndex1 = Math.floor(Math.random() * fighter.length);
  let randomIndex2 = Math.floor(Math.random() * fighter.length);
  // console.log(fighter[randomIndex1]);
  // console.log(fighter[randomIndex2]);

  stageEl.textContent = `${fighter[randomIndex1]} VS ${fighter[randomIndex2]}`;
});
