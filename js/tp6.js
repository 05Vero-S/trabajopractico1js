//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const valor1 = parseInt(prompt("Ingrese un primer número"));
console.log(valor1);
const valor2 = parseInt(prompt("Ingrese un segundo número"));
console.log(valor2);

if(valor1 > valor2){
    alert(`El ${valor1} es el número más grande`);
}
else{
    alert(`El ${valor2} es el número más grande`);
}
