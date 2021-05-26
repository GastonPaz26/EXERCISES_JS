// Ejercicio de variables

//Ejercicio 1

alert("Hello world!");

//Ejercicio 2

document.write("Hello World" + "<br>");
document.write()

//Ejercicio 3

let result = 3 + 5;
document.write(result + "<br>")

//Ejercicio 4
let nombre = prompt('Ingrese su nombre')
document.write('Como estas ' + nombre)


//Ejercicio 5

function suma(a, b) {
  return a + b
}

let a = Number(prompt('Ingrese el primer numero'))
let b = Number(prompt('Ingrese el segundo numero'))
console.log(suma(a, b)) 

//Ejercicio 6

let num1 = parseInt(prompt('Elija el primer numero'))
let num2 = parseInt(prompt('Elija el segundo numero'))

if(num1 > num2){
  console.log(`El numero  ${num1} es mayor`);
}
 else if(num1 < num2) {console.log(`El numero  ${num2} es mayor`)
}
else  { console.log('Los numeros son iguales')
} 

//Ejercicio 7

 let num1 = parseInt(prompt('Elija el primer numero'))
let num2 = parseInt(prompt('Elija el segundo numero'))
let num3 = parseInt(prompt('Elija el tercer numero'))

switch(true){
  case num1 > num2  && num1 > num3 : console.log(`El numero ${num1} es mayor`);
  break; 
  case num2 > num1  && num2 > num3: console.log(`El numero ${num2} es mayor`);
  break;
  case num3 > num1  && num3 > num2: console.log(`El numero ${num3} es mayor`);
  break;
  default: console.log('Los numeros son iguales')
} 

//Ejercicio 8

let number = parseInt(prompt('Introduzca su numero'))

for(let i=0; i < number; i++){
  if(number % 2 === 0){
    console.log('Es divisible');
  } else{console.log('No es divisible');
  }
} 

//Ejercicio 9

let text = prompt("Escribe una frase").toLowerCase();
let nText = text.length;
const vocalArray = ['a', 'e', 'i', 'o','u'];
const vocalArrayText = vocalArray.join(' ')

for(let i = 0; i < text.length; i++){
  if (vocalArrayText.indexOf(text[i]) >= 0){
  console.log(text[i])
  }
}

Ejercicio 10

let num = Number(prompt('Escriba su numero'));
for (i=0; i <= num; i++) {
if (num % 2 === 0) { console.log(`${num} Es divisible en 2`)

} else if (num % 3 === 0) { console.log(`${num} Es divisible en 3`)
} else if (num % 5 === 0) { console.log(`${num} Es divisible en 5`)
} else if (num % 7 === 0) { console.log(`${num} Es divisible en 7`)
}
else {console.log(`${num} no es divisible por 2,3,5 y 7`)}
}

otra opcion para el ejercico 10

let num = Number(prompt('Escriba su numero'));
for (i=0; i <= num; i++) {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0||num % 7 === 0) {
    console.log(`${num} si es divisible entre las opciones`) 
    } else {console.log(`${num} no es divisible entre las opciones`)
  }
}

Ejercicio 11

function division(){
let num = Number(prompt('Escriba su numero'));
const numsArray = [2, 3, 5, 7];
for(let i = 0; i < numsArray.length; i++) {
  if (num % numsArray[i] === 0){ console.log(numsArray[i])}
}
}

division()

