//Conversion de grados Celsius a Fahrenheit

//Declaro una variable 
const gradosCelsius = parseFloat(prompt("Ingrese grado Celsius: "));
console.log(gradosCelsius + " "+ "ºC");

//Formula de conversion para calcular los grados Fahrenheit : ºF = (ºC * 1,8) + 32
const gradosFahrenheit = (gradosCelsius*1.8) + 32;
console.log("Conversión: " + (gradosFahrenheit + " "+ "ºF"));