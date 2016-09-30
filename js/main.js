var num1 = prompt("Primer numero");
console.log(num1);

var num2 = prompt("Segundo numero");
console.log(num2);

var operador = prompt("Operador");
console.log(operador);

switch(operador){

case "multiplicar":
    result = num1 + " por "+ num2 + " igual " + num1 * num2 + ".";
break;

case "resta":
    result = num1 + " menos "+ num2 + " igual " + num1 - num2 + ".";
break;

}
