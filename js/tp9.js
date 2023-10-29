//Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase= "Hola mundo";
console.log(frase);

const vocal1 = frase.charAt(1);
const vocal2 = frase.charAt(3);
const vocal3 = frase.charAt(6);
const vocal4 = frase.charAt(9);

document.write(`Las vocales que aparecen en dicha frase son: ${vocal1} ${vocal2} ${vocal3} ${vocal4}`);

