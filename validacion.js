function validar() {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    var result_val_direcc = validar_direcc();
    var result_val_nombre = validad_nombre();
    var result_val_cod_postal = validad_Cod_Postal();
    var result_val_ciudad = validad_ciudad();
    var result_val_passw2 = validar_password2();
    var result_val_movil=validar_telefonoMovil();
    var result_val_comuna = validar_comuna();

    
    return (result_val_email && result_val_passw && result_val_direcc && result_val_nombre && result_val_cod_postal
    && result_val_ciudad && result_val_passw2&& result_val_movil && result_val_comuna);
}

function validar_fto_email(email){
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validad_nombre(){
    var nombre = document.getElementById("nombre").value;
    var div= document.getElementById("msj-nombre");
    if  (nombre != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "El nombre no puede quedar vacio";
        div.className = "text-danger";
        return false;
    }

}


function validar_password() {
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");
    if  (passw.length >=3 && passw.length<=6) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La contraseña debe ser de al menos 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}
function validar_password2() {
    var passw = document.getElementById("password").value;
    var passw2 = document.getElementById("re-password").value;

    var div = document.getElementById("msj-passw2");
    if  (passw != passw2) {
        div.innerHTML = "deben ser iguales";
        div.className = "text-danger";
        return true;
    } else {
        div.innerHTML = "";
        div.className = "";
        return false;
    }
}

function validar_direcc() {
    var direc = document.getElementById("address").value;
    var div= document.getElementById("msj-direccion");
    if  (direc != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La direccion no puede quedar vacio";
        div.className = "text-danger";
        return false;
    }

}

function validad_ciudad(){
    var ciudad = document.getElementById("Ciudad").value;
    var div= document.getElementById("msj-ciudad");
    if  (ciudad != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La ciudad no puede quedar vacio";
        div.className = "text-danger";
        return false;
    }

}

function validad_Cod_Postal(){
    var postal = document.getElementById("Postal").value;
    var div= document.getElementById("msj-postal");
    if  (postal != "") {
        if(7==postal.length){
            div.innerHTML = "";
            return true;
        }
        else{
            div.innerHTML="Formato invalido";
            return false;
        }
        
    } else {
        div.innerHTML = "El codigo postal no puede quedar vacio";
        div.className = "text-danger";
        return false;
    }
}

function validar_comuna(){
    var comu = document.getElementById("comuna").value;
    var div= document.getElementById("msj-comuna");

    if(comu == 0 ||
        comu ==""){
            div.innerHTML="Debe seleccionar una comuna";
            div.className="text-danger";
        }else{
            div.innerHTML="";
        }
}

function validar_telefonoMovil() {
    var movil = document.getElementById("phone").value;
    var fijo = document.getElementById("fijo").value;
    var div= document.getElementById("msj-movil");
    if  (movil != "" || fijo !="") {
        if(9 == movil.length || 9== fijo.length){
            div.innerHTML = "";
            return true;
            
        }else{
            div.innerHTML = "Numero movil debe ser igual a 9<br>Telefono fijo igual a 8";
            div.className="text-danger";
            return false; 
        }
        
    }else {
        div.innerHTML = "Debe ingresar un numero movil o fijo!";
        div.className = "text-danger";
        return false;
    }
}








