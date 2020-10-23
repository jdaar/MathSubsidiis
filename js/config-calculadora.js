
function choose(array){
    min = 0 
    max = array.length
    let valor = parseInt(Math.random() * (max - min) + min)
    return array[valor];
}
// Variables de uso get
var numeroFixed = 1;
let estado = "cerrado";
var redondearPorDefectoBool = false
// Variables del dom
var inputDecimales = document.querySelector("#inputDecimales");
var redondearPorDefecto = document.querySelector("#redondearPorDefecto");
var checkRedondear = document.querySelector("#checkRedondear");
var aceptar = document.querySelector("#aceptar");
var warnSpots = $(".warn_spot").fadeOut()
var inputs = $(".input")
var ruedaElemento = document.getElementById("rue");
var contenedorSetting = document.getElementById("setting");
//FUNCIONES DE ANIMACIÓN Y TRANSLACIÓN
function abrirRueda(){
    estado = "abierto";
    ruedaElemento.style.transition = "1.5s ease";
    ruedaElemento.style.transform = "rotateZ(180deg)";
    contenedorSetting.style.transition = "1.5s ease";
    contenedorSetting.style.height = "200px";
    setTimeout(visibility, 300 );
}
function cerrarRueda(){
    estado = "cerrado";
    ruedaElemento.style.transition = "1.5s ease";
    ruedaElemento.style.transform = "rotateZ(0deg)";
    contenedorSetting.style.transition = "1.5s ease";
    contenedorSetting.style.height = "0px";
    setTimeout(visibility, 500 );
}
function rueda() {
    warnSpots.fadeIn()
    if (estado == "cerrado") {
        abrirRueda()
    }
    else {
        cerrarRueda()
    }
}
function visibility () {
    if (estado == "cerrado") {
        setTimeout(() => {
            inputDecimales.style.visibility = "hidden";
            redondearPorDefecto.style.visibility = "hidden";
            aceptar.style.visibility = "hidden";
        },500)
        
    }else {
        aceptar.addEventListener("click",maxDecimales);
        inputDecimales.style.visibility = "visible";   
        redondearPorDefecto.style.visibility = "visible";
        aceptar.style.visibility = "visible"; 
    }
}

//EVENTO BOTON ACEPTAR
ruedaElemento.addEventListener("click", rueda)
aceptar.addEventListener("click",() => {
    warnSpots.fadeOut("5ms")
    cerrarRueda()
    //Cambia la configuración de numero de decimales
    numeroFixed = parseInt(inputDecimales.value);
    inputDecimales.value = ""
    redondearPorDefectoBool = checkRedondear.checked
})
checkRedondear.addEventListener("click",() => {
    inputDecimales.disabled = checkRedondear.checked
})