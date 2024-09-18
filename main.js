let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let botonLimpiar = document.getElementById("limpiar");   
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJQLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!°#$%&/()=?¡";

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor o igual que 8");
        return;
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAletario = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAletario;
    }
    
    contrasena.value = password;
    evaluarFortaleza(password);
}

function limpiarCampos() {
    cantidad.value = '';
    contrasena.value = '';
}

function evaluarFortaleza(password) {
    let fortaleza = "Débil";
    let regexFuerte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!°#$%&/()=?¡])[A-Za-z\d!°#$%&/()=?¡]{8,}$/;

    if (regexFuerte.test(password)) {
        fortaleza = "Fuerte";
    }

    alert("La contraseña es " + fortaleza);
}









