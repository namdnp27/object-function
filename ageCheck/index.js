function checkAge() {
  let ageEl = document.getElementById("age");
  let discountEl = document.getElementById("discount");

  let userAge = Math.floor(Math.random() * 100) + 1;
  console.log(userAge);

  if (userAge >= 6 && userAge <= 17) {
    ageEl.textContent = `Age: ${userAge}`;
    discountEl.textContent = "Discount: children discount applied";
    // console.log("children discount applied");
  } else if (userAge >= 18 && userAge <= 26) {
    ageEl.textContent = `Age: ${userAge}`;
    discountEl.textContent = "Discount: student discount applied";
    // console.log("student discount applied");
  } else if (userAge >= 27 && userAge <= 66) {
    ageEl.textContent = `Age: ${userAge}`;
    discountEl.textContent = "Discount: full price";
    // console.log("full price");
  } else if (userAge > 66) {
    ageEl.textContent = `Age: ${userAge}`;
    discountEl.textContent = "Discount: senior discount applied";
    // console.log("senior discount applied");
  } else {
    ageEl.textContent = `Age: ${userAge}`;
    discountEl.textContent = "Discount: free ticket";
    // console.log("free ticket");
  }
}
