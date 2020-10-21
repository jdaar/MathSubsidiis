//---------------------------------------VARIABLES GLOBALES ---------------//

var input = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var navegador = document.getElementById("nav");
var ultimoIndice = 0; 
var lugarDeColocacion;

var inputDecimales = document.getElementById("inputDecimales");

var inputDecimales = document.getElementById("inputDecimales");

var inputDecimales = document.getElementById("inputDecimales");

var inputDecimales = document.getElementById("inputDecimales");
var resultado = document.createElement("p");
document.getElementById("resultado").appendChild(resultado);
var claseResultado = resultado.classList;
claseResultado.add("resultado");
//---------------------------------------VARIABLES GLOBALES ---------------//
//--------------------------------------- CARACTERES EN INPUT ---------------//
function insertarCaracter(indice,string,caracter,borrar = false){
    if(!borrar){
    return string.slice(0, indice) + caracter + string.slice(indice);
    }else{
    return string.slice(0, indice).slice(0,-1) + string.slice(indice);
    }
}
// colocando caracteres en el input
function numeros(caracter) {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,caracter);
}
// Boton limpiar input
function reinicio() {
    input.value = "";
}
// Colocar punto en input
function punto() {
    input.value = input.value + ".";
}
// eliminar caracteres
function back() {
    input.value = input.value.substring(0, input.value.length -1);
}
// retroceder indice
function retroceder() {   
     ultimoIndice --;
}
// adelantar indice
function adelantar() {
     ultimoIndice ++;
}
//--------------------------------------- CARACTERES EN INPUT ---------------//
//------------------------------------------SIGNOS---------------//
//signo de suma
function signoSuma() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"+");
}
// signo de resta
function signoResta() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"-");
}
// signo de multiplicacion
function signoMultiplicacion() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"*");
}
// signo de division
function signoDivision() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"/");
}
// signo de cociente
function signoCociente() {

    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"%");
}
// signo de potenciacion
function signoPotenciacion() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"**");
}
// signo de radicacion
function signoRadicacion() {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"√()");
}
// signo de parentesis
function parentesis1 () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"(");
}
// signo de parentesis
function parentesis2 () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,")");
}
function logaritmo () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"ln(");
}
function seno () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"sin(");
}
function coseno () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"cos(");
}
function tangente () {
    lugarDeColocacion = input.value.length + ultimoIndice;  
    input.value = insertarCaracter(lugarDeColocacion,input.value,"tan(");
}
//------------------------------------------SIGNOS---------------//
//---------------------------- MOSTRAR RESULTADO -------------------------------//
function pulsar() {
    var claseInput = input.classList;
    let ult = input.value.replace("√","Math.sqrt")
                         .replace("ln","Math.log")
                         .replace("tan","Math.tan(") 
                         .replace("sin","Math.sin") 
                         .replace("cos","Math.cos(");
    var ev = eval(ult); 
    console.log(ev)
    if(checkRedondear.checked){
        ev = Math.round(ev)
    }else{
        ev = parseFloat(ev.toFixed(numeroFixed));
    }
    console.log(ev)
    if(ev != undefined){
        resultado.value = "El resultado es: " + ev
        claseResultado.remove("incorrecto");
        input.style.border = "1px solid #B6E2C7";
        input.style.color = "unset";
    }else{
        resultado.innerText = "Ha ocurrido un error, revise la operacion a realizar.";
        claseResultado.add("incorrecto");
        input.style.border = "1px solid red";
        input.style.color = "red";
    }
}
//---------------------------- MOSTRAR RESULTADO -------------------------------//


//----------------------- MOSTRAR RESULTADO VALOR ABSOLUTO --------------------------//
let valorAbsoluto = function() {

    let resultadoValorAbsoluto;
    let parse = parseFloat(input2.value);
    let casillaRespuesta = document.getElementById("respuesta2");

    if (input2.value > 0) {
        resultadoValorAbsoluto = parse;
        casillaRespuesta.innerHTML = resultadoValorAbsoluto;
    }
    else if (input2.value == 0) {
        resultadoValorAbsoluto = 0;
    } 
    else if (input2.value < 0) {
        resultadoValorAbsoluto = parse * -1;
    }

    casillaRespuesta.innerHTML = "El resultado del valor absoluto es: " + resultadoValorAbsoluto;
}

//----------------------- MOSTRAR RESULTADO VALOR ABSOLUTO --------------------------//

//-------------------- MOSTRAR RESULTADO CONVERSOR DE GRADOS -----------------------//
function conversorGrados () {

    let select = document.getElementById("select");
    let pi = Math.PI;
    let espacioRespuesta = document.getElementById("respuesta3");

    if (select.value == "Grados a Radianes" && input3.value != NaN && input3.value != undefined) {
        espacioRespuesta.style.color = "unset";
        input3.style.border = "1px solid #B6E2C7";
        input3.style.color = "unset";
        let respuestaConversorGrados = eval(input3.value) * (pi/180);
        espacioRespuesta.innerHTML = "El resultado de la conversion a radianes es: "+respuestaConversorGrados;
              
    }
    else if (select.value == "Radianes a grados" && input3.value != NaN && input3.value != undefined) {
        espacioRespuesta.style.color = "unset";
        input3.style.border = "1px solid #B6E2C7";
        input3.style.color = "unset";
        let respuestaConversorGrados = eval(input3.value) * (180/pi);
        espacioRespuesta.innerHTML = "El resultado de la conversion a radianes es: "+respuestaConversorGrados;
    }
    else if (select.value == "Seleccionar conversion" && input3.value != NaN && input3.value != undefined) {
      espacioRespuesta.innerHTML = "Porfavor seleccione el tipo de conversion.";
      espacioRespuesta.style.color = "red";
      input3.style.border = "1px solid red";
      input3.style.color = "red";
    } else {
        espacioRespuesta.innerHTML = "Ha ocurrido un error por favor verifique el numero a convertir.";
        espacioRespuesta.style.color = "red";
        input3.style.border = "1px solid red";
        input3.style.color = "red"; 
    }
}
//-------------------- MOSTRAR RESULTADO CONVERSOR DE GRADOS -----------------------//

// decimales funcion
function maxDecimales (){
    inputDecimales.value;
}


// ---------------------EVENTOS--------------------//

//EVENTOS DE TECLAS
window.addEventListener("keydown",(event) => {
    //ENTER
    if(event.keyCode == 13){
        pulsar()
    }
    // RETROCEDER
    if (event.keyCode == 8) {
        back();
    }
    // 0
    if (event.keyCode  == 48 && input === document.activeElement) {
        numeros(0);
    }
    // 1
    if (event.keyCode == 49 && input === document.activeElement) {
        numeros(1);
    }
    // 2
    if (event.keyCode == 50 && input === document.activeElement) {
        numeros(2);
    }
    // 3
    if (event.keyCode == 51 && input === document.activeElement) {
        numeros(3);
    }
    // 4
    if (event.keyCode == 52 && input === document.activeElement) {
        numeros(4);
    }
    // 5
    if (event.keyCode == 53 && input === document.activeElement) {
        numeros(5);
    }
    // 6
    if (event.keyCode == 54 && input === document.activeElement) {
        numeros(6);
    }
    // 7
    if (event.keyCode == 55 && input === document.activeElement) {
        numeros(7);
    }
    // 8
    if (event.keyCode == 56 && input === document.activeElement) {
        numeros(8);
    }
    // 9
    if (event.keyCode == 57 && input === document.activeElement) {
        numeros(9);
    }
})
// ---------------------EVENTOS--------------------//