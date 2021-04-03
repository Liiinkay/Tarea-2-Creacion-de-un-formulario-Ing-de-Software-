let formulario=document.getElementById("formulario");

let nombre:any=document.getElementById("nombre");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let email:any=document.getElementById("email");
let mensaje:any=document.getElementById("mensaje1");
let telefono:any=document.getElementById("telefono");
let errorRut:any=document.getElementById("errorRut");
let errorTelefono:any=document.getElementById("errorTelefono");

formulario.addEventListener("submit",function(evento){
    let rutvalor=rut.value;
    let telefonoValor=telefono.value;
    if(validarDatos(rutvalor,telefonoValor)==true){
        console.log(telefonoValor);
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted!!";
    }
    else{
        console.log("Hay errores en los campos");
    }
    
    evento.preventDefault();
});

function validarDatos(r:string,n:number){
    let validoR=false;
    let validoT=false;
    if(validarRut(r)==true){
        validoR = true;
    }else{
        validoR = false;
    }
    if(validarNumero(n)==true){
        validoT = true;
    }else{
        validoT = false;
    }
    if((validoR==true)&&(validoT==true)){
        return true;
    }else{
        return false;
    }
}

function validarRut(r:string){
    let rCuerpo:string=r.slice(0,-1);
    let rDV:string=r.slice(-1);

    if(rCuerpo.length < 7){
        console.log("Rut No es valido");
        errorRut.style.display="block";
        errorRut.innerHTML="El rut ingresado no es valido, debe de contener almenos 7 caracteres"
        return false;
    }
    errorRut.style.display="none";
    return true;
}

function validarNumero(numero:number){

    if(numero.toString().length == 9){
        errorTelefono.style.display="none";
        return true;
    }else{
        console.log("Numero no es valido");
        errorTelefono.style.display="block";
        errorTelefono.innerHTML="El numero ingresado no es valido, debe de contener almenos 9 caracteres"
        return false;
    }
}
