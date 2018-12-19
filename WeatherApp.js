const kelvin = 293;
//kelvin is set to 293
const celsius = kelvin - 273;
// celsius is 273 less than kelvin
let fahrenheit = celsius * (9/5) + 32;
// fahrenheit needs to be changed so it's attributed to an let
fahrenheit = Math.floor(fahrenheit);
//we rounded the fahrenheit degrees to a integer number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees kelvin.`);

let newton = Math.floor(celsius * (33/100));
// Defined Newton as changable let rounded to an int

console.log(`The temperature is ${newton} degrees Newton.`);
