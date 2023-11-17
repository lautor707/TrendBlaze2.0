
/* Funcion para que cuando alquien se registre salga una alerta avisando que se realizo con exito */
function showConfirmationMessage() {
    
    alert("¡Subscripción realizada con éxito!");
}

/* Esto es todo el coigo que hace que el fondo cambie de color */ 
document.addEventListener("DOMContentLoaded", function () {
    let colorBlanco = true;
    const colorBlancoHex = "#ffffff";
    const colorNegroHex = "#000000";

    function cambiarColorFondo() {
        if (colorBlanco) {
            document.body.style.backgroundColor = colorNegroHex;
            document.body.style.color = colorBlancoHex;
        } else {
            document.body.style.backgroundColor = colorBlancoHex;
            document.body.style.color = colorNegroHex;
        }

        colorBlanco = !colorBlanco;
    }

    document.getElementById("cambiarColorBtn").addEventListener("click", cambiarColorFondo);
});