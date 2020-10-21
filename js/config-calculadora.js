var numeroFixed = 1;
let estado = "cerrado";
var inputDecimales = document.querySelector("#inputDecimales");
var redondearPorDefecto = document.querySelector("#redondearPorDefecto");
var checkRedondear = document.querySelector("#checkRedondear");
var aceptar = document.querySelector("#aceptar");
//FUNCIONES DE ANIMACIÓN Y TRANSLACIÓN
function rueda() {
    let ru = document.getElementById("rue");
    let contenedorSetting = document.getElementById("setting");
    if (estado == "cerrado") {
        estado = "abierto";
    ru.style.transition = "1.5s ease";
    ru.style.transform = "rotateZ(180deg)";
    contenedorSetting.style.transition = "1.5s ease";
    contenedorSetting.style.height = "200px";
    setTimeout(vis, 300 );
    }
    else {
        estado = "cerrado";
    ru.style.transition = "1.5s ease";
    ru.style.transform = "rotateZ(0deg)";
    contenedorSetting.style.transition = "1.5s ease";
    contenedorSetting.style.height = "0px";
    setTimeout(vis, 500 );
    }
}
function vis () {
    if (estado == "cerrado") {
    inputDecimales.style.visibility = "hidden";
    redondearPorDefecto.style.visibility = "hidden";
    aceptar.style.visibility = "hidden";

    } else {
        aceptar.addEventListener("click",maxDecimales);
        inputDecimales.style.visibility = "visible";   
        redondearPorDefecto.style.visibility = "visible";
        aceptar.style.visibility = "visible"; 
    }
}
//EVENTO BOTON ACEPTAR
aceptar.addEventListener("click",() => {
    numeroFixed = parseInt(inputDecimales.value);
    inputDecimales.value = ""
})