var num1 = prompt("Primer numero");
console.log(num1);

var num2 = prompt("Segundo numero");
console.log(num2);

var operador = prompt("Operador: + - * or /");
console.log(operador);

var result;

switch(operador){

case "*":
    result = num1 * num2;
break;

case "-":
    result = num1 - num2;
break;

}

console.log("Result: " + result);
