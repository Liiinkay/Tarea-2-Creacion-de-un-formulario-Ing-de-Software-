var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje1");
var telefono = document.getElementById("telefono");
var errorRut = document.getElementById("errorRut");
var errorTelefono = document.getElementById("errorTelefono");
formulario.addEventListener("submit", function (evento) {
    var rutvalor = rut.value;
    var telefonoValor = telefono.value;
    if (validarDatos(rutvalor, telefonoValor) == true) {
        console.log(telefonoValor);
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted!!";
    }
    else {
        console.log("Hay errores en los campos");
    }
    evento.preventDefault();
});
function validarDatos(r, n) {
    var validoR = false;
    var validoT = false;
    if (validarRut(r) == true) {
        validoR = true;
    }
    else {
        validoR = false;
    }
    if (validarNumero(n) == true) {
        validoT = true;
    }
    else {
        validoT = false;
    }
    if ((validoR == true) && (validoT == true)) {
        return true;
    }
    else {
        return false;
    }
}
function validarRut(r) {
    var rCuerpo = r.slice(0, -1);
    var rDV = r.slice(-1);
    if (rCuerpo.length < 7) {
        console.log("Rut No es valido");
        errorRut.style.display = "block";
        errorRut.innerHTML = "El rut ingresado no es valido, debe de contener almenos 7 caracteres";
        return false;
    }
    errorRut.style.display = "none";
    return true;
}
function validarNumero(numero) {
    if (numero.toString().length == 9) {
        errorTelefono.style.display = "none";
        return true;
    }
    else {
        console.log("Numero no es valido");
        errorTelefono.style.display = "block";
        errorTelefono.innerHTML = "El numero ingresado no es valido, debe de contener almenos 9 caracteres";
        return false;
    }
}
