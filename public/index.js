let roll = document.querySelector("#rollDisplay");
let rollBtn = document.querySelector("#rollBtn");

rollBtn.addEventListener("click", () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  fetch(`/rollDice`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 1; i < 7; i++) {
        roll.classList.remove("dice-" + i);
      }
      roll.classList.add("dice-" + data.roll);
    });
});
