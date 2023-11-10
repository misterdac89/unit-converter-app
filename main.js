const meterToFeet = 3.28084;
const feetToMeter = 0.3048;
const literToGallon = 0.264172;
const gallonToLiter = 3.78541;
const kiloToPound = 2.20462;
const poundToKilo = 0.453592;

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  let baseLine = inputEl.value;

  lengthEl.innerHTML = `<p>
   ${baseLine} meters = ${(baseLine * meterToFeet).toFixed(
    3
  )} feet | ${baseLine} feet = ${(baseLine * feetToMeter).toFixed(3)} meters
						</p>`;

  volumeEl.innerHTML = `<p>
	${baseLine} liters = ${(baseLine * literToGallon).toFixed(
    3
  )} gallons | ${baseLine} gallons = ${(baseLine * gallonToLiter).toFixed(
    3
  )} liters
						</p>`;

  massEl.innerHTML = `<p>
	${baseLine} kilos = ${(baseLine * kiloToPound).toFixed(
    3
  )} pounds | ${baseLine} pounds = ${(baseLine * poundToKilo).toFixed(3)} kilos
						</p>`;
  inputEl.value = 'type = "number" placeholder = "0"';
});
