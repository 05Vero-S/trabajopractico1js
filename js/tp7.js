//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const valor1= parseInt(prompt("Ingrese un primer número"));
console.log(valor1);
const valor2= parseInt(prompt("Ingrese un segundo número"));
console.log(valor2);
const valor3= parseInt(prompt("Ingrese un tercer número"));
console.log(valor3);

if(valor1 > valor2 && valor1 > valor3){
    alert(`El ${valor1} es el número mas grande`);
}
else{
    if(valor2 > valor1 && valor2 > valor3){
        alert(`El ${valor2} es el número más grande`);
    }
    else{
        if(valor3 > valor1 && valor3 > valor2){
            alert(`El ${valor3} es el número más grande`);
        }
    }
}

