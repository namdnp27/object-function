// sort fruits
let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleEl = document.getElementById("apple");
let orangeEl = document.getElementById("orange");

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "apple") {
      appleEl.textContent += " apple";
    } else if (fruit[i] === "orange") {
      orangeEl.textContent += " orange";
    }
  }
}
sortFruit();
