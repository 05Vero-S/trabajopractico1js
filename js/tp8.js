//Escribe un programa que pida un número y diga si es divisible por 2

const numero= parseInt(prompt("Ingrese un número"));
console.log(numero);

if(numero % 2 == 0){
    alert(`El ${numero} es divisible por 2`);
}
else{
    alert(`El ${numero} no es divisible por 2`);
}