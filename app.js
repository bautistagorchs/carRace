let distanceR = 0;
let distanceB = 0;
let redCar = document.querySelector("#red");
let blueCar = document.querySelector("#blue");

document.addEventListener("keypress", (e) => {
  if (distanceR === 80) {
    distanceR = -2;
    alert("Gano el auto rojo! Felicitaciones Space");
  }
  if (distanceB === 80) {
    distanceB = -2;
    alert("Gano el auto azul! Felicitaciones Enter");
  }
  if (e.code == "Space") {
    distanceR += 2;
    redCar.style.marginLeft = `${distanceR}%`;
  }
  if (e.code == "Enter") {
    distanceB += 2;
    blueCar.style.marginLeft = `${distanceB}%`;
  }
});
