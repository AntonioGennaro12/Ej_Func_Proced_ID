const miBoton   = document.querySelector("#mi-boton");
const Resultado = document.querySelector("#mi-result");
const clearTodo  = document.querySelector("#mi-clear");

var   result    = 0;
var   contador  = 0;

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

/* Borra todo incluso resultado */
function borratodo ( ) {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("operacion").value = "";
    Resultado.textContent = "Resultado";
}

/* Carga el resultado */
Resultado.addEventListener("click", () => {
    if (contador  <= 1){
    document.getElementById("numero1").value = result;
    contador++;
    }
    else { 
        borratodo();
    }
});


miBoton.addEventListener("click", () => {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var oper = document.getElementById("operacion").value;

    if      (oper == "+") {mueRes (suma  (num1,num2));}
    else if (oper == "-") {mueRes (resta (num1,num2));}
    else if (oper == "x") {mueRes (multi (num1,num2));}
    else if (oper == "*") {mueRes (multi (num1,num2));}
    else if (oper == "/") {mueRes (divid (num1,num2));}
    else if (oper == "%") {mueRes (porc  (num1,num2));}
    else if (oper == "p") {mueRes (pote  (num1,num2));}
    else if (oper == "r") {mueRes (raiz  (num1,num2));}
    else {Resultado.textContent = "Operación no definida"};
    miBoton.insertAdjacentText   = "Hacer otra cuenta";
    contador  = 0;
    });

/* Borra todos los labels  */ 
clearTodo.addEventListener("click", () => {
    borratodo ();
    clearTodo.style.background = "red";
}); 

