const miBoton   = document.querySelector("#mi-boton");
const Resultado = document.querySelector("#result");

var   result    = 0;

/* funciones */
function suma   (op1, op2){return op1+op2;} 
function resta  (op1, op2){return op1-op2;} 
function multi  (op1, op2){return op1*op2;} 
function divid  (op1, op2){return op1/op2;} 
function porc   (op1, op2){return (op1*op2)/100;}
function pote   (bas, exp){return Math.pow (bas, exp);} 
function raiz   (bas, exp){return Math.pow (bas, (1/exp));}

/* procedimiento*/
function mueRes (resul) {
    Resultado.textContent = "Resultado = "+resul+"";
    Resultado.style.background = "green";
    result = resul;
}

Resultado.addEventListener("click", () => {
    document.getElementById("numero1").value = result;
});
    
miBoton.addEventListener("click", () => {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var oper = document.getElementById("operacion").value;

    if      (oper == "+") {mueRes (suma  (num1,num2));}
    else if (oper == "-") {mueRes (resta (num1,num2));}
    else if (oper == "*") {mueRes (multi (num1,num2));}
    else if (oper == "/") {mueRes (divid (num1,num2));}
    else if (oper == "%") {mueRes (porc  (num1,num2));}
    else if (oper == "p") {mueRes (pote  (num1,num2));}
    else if (oper == "r") {mueRes (raiz  (num1,num2));}
    else {Resultado.textContent = "Operación no definida"};
    
    miBoton.insertAdjacentText   = "Hacer otra cuenta";
    });

