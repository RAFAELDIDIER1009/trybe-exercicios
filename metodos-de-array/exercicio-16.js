// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const getFahrenheit = (temperaturesCelsius) => {
  let temperaturesFahrenheit = temperaturesCelsius.map((temperature) => {
    return (temperature * 9 / 5 + 32)
  });

return temperaturesFahrenheit;
};

console.log(getFahrenheit(temperaturesCelsius));



