var navegador = document.getElementById("nav");
var cuerpo = document.getElementById("modo");
var claseCuerpo = cuerpo.classList;

//-------------------- VARIABLES LOCALES -----------------------//
if(localStorage.length < 1){
    enModoLuz = String(claseCuerpo == "ligth");
}else{
    enModoLuz = localStorage["inLigthMode"]
}
var enModoLuz;

var menu = function() {

    var claseNavegador = navegador.classList;

       if (claseNavegador == "oculto") {
        navegador.style.transition = "1.5s ease";
       navegador.style.transform = "translateX(250px)";
       claseNavegador.remove("oculto");
       claseNavegador.add("visible");
       } else {
        navegador.style.transition = "1.5s ease";
              navegador.style.transform = "translateX(0px)";
               claseNavegador.remove("visible");
               claseNavegador.add("oculto");
    }

if (claseCuerpo == "dark") {
    navegador.style.webkitBoxShadow = "none";
           navegador.style.mozBoxShadow = "none";
           navegador.style.boxShadow = "none";
} else if (claseCuerpo == "ligth"){
    navegador.style.webkitBoxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
           navegador.style.mozBoxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
           navegador.style.boxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
}
}

function aDark(){
    claseCuerpo.remove("ligth");
    claseCuerpo.add("dark");
    circulo.style.transition = "0.6s ease";
    circulo.style.transform = "translateX(40px)";
    circulo.style.top = "1px";
    cuerpo.style.transition = "1s ease all";
    document.getElementById("estilosWhite").href = 'css/estilosIndex/estilosIndexDark.css';
    document.getElementById("estilosBarra").href='css/estilosBarra/estilosBarraDark.css';
    navegador.style.webkitBoxShadow = "none";
    navegador.style.mozBoxShadow = "none";
    navegador.style.boxShadow = "none";
    localStorage["inLigthMode"] = "false";
}


function aLigth(){
    claseCuerpo.remove("dark");
    claseCuerpo.add("ligth");
    circulo.style.transition = "0.6s ease";
    circulo.style.transform = "translateX(0px)";
    circulo.style.top = "1px";
    document.getElementById("estilosWhite").href = 'css/estilosIndex/estilosIndex.css';
    document.getElementById("estilosBarra").href='css/estilosBarra/estilosBarra.css'
    navegador.style.webkitBoxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
    navegador.style.mozBoxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
    navegador.style.boxShadow = "11px 27px 10px 0px rgba(204,204,204,0.79)";
    localStorage["inLigthMode"] = "true"
}
function color() { 
    //Si esta en light, pasarse a dark
    if (enModoLuz == "true"){ 
        aDark();
        menu();
    }
    //Si esta en dark, pasarse a light
    else {
        aLigth();
        menu();
    }
    enModoLuz = localStorage["inLigthMode"]
}

if(enModoLuz == "false"){
    aDark()
}

