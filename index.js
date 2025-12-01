// Step 1: Define the temperature data
const temperatures = [
  { unit: "F", value: 32 }, { unit: "C", value: 25 },
  { unit: "F", value: 70 }, { unit: "C", value: 18 },
  { unit: "F", value: 80 }, { unit: "C", value: 15 },
  { unit: "F", value: 72 }, { unit: "C", value: 28 },
  { unit: "F", value: 68 }, { unit: "C", value: 20 },
  { unit: "F", value: 75 }, { unit: "C", value: 23 },
  { unit: "F", value: 82 }, { unit: "C", value: 30 },
  { unit: "F", value: 65 }, { unit: "C", value: 22 },
  { unit: "F", value: 77 }, { unit: "C", value: 26 },
  { unit: "F", value: 78 }, { unit: "C", value: 24 },
  { unit: "F", value: 73 }, { unit: "C", value: 21 },
  { unit: "F", value: 79 }, { unit: "C", value: 27 },
  { unit: "F", value: 71 }, { unit: "C", value: 19 },
  { unit: "F", value: 74 }, { unit: "C", value: 17 },
  { unit: "F", value: 76 }, { unit: "C", value: 29 }
];


//* Then work on the conversion of the temperature from Celsius to Fahrenheit 
function fToC(f) {
  return (f - 32) * 5/9;
}

function cToF(c) {
  return (c * 9/5) + 32;
}

// Convert each reading into Celsius
const tempsInCelsius = temperatures.map(t =>
  t.unit === "F" ? fToC(t.value) : t.value
);

// Convert each reading into Fahrenheit
const tempsInFahrenheit = temperatures.map(t =>
  t.unit === "C" ? cToF(t.value) : t.value
);



//! Calculation of the total temperatures
const tot_temperature_in_celsius =
  tempsInCelsius.reduce((sum, temp) => sum + temp, 0);

const tot_temperature_in_fahrenheit =
  tempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);


//! Calculation of the average temperatures
const avg_temperature_in_celsius =
  tot_temperature_in_celsius / tempsInCelsius.length;

const avg_temperature_in_fahrenheit =
  tot_temperature_in_fahrenheit / tempsInFahrenheit.length;


//! Console.log the results for your own inspection 
console.log("Total °C:", tot_temperature_in_celsius);
console.log("Total °F:", tot_temperature_in_fahrenheit);
console.log("Avg °C:", avg_temperature_in_celsius);
console.log("Avg °F:", avg_temperature_in_fahrenheit);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
