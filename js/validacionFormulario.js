const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

// const nombre = document.getElementById("name");
// const email = document.getElementById("correo");
// const telefono = document.getElementById("phone");
// const asunto = document.getElementById("affair");
// const mensaje = document.getElementById("message");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos
    mensaje: /^[a-zA-ZÀ-ÿ\s]{10,500}$/ // Letras y espacios, pueden llevar acentos
}

// Representan si un campo está validado o no (false no y true si)
const campos = {
    nombre: false,
    correo: false,
    telefono: false,
    asunto: false,
    mensaje: false
}



const validarFormulario = (event) => {

    switch (event.target.name) {
        case "nombre":
            // Valor que tenemos en el input.
            validarCampo(expresiones.nombre, event.target, "nombre");
            break;
        case "email":
            validarCampo(expresiones.correo, event.target, "email");
            break;
        case "telefono":
            validarCampo(expresiones.telefono, event.target, "telefono");
            break;
        case "asunto":
            validarCampo(expresiones.asunto, event.target, "asunto");
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, event.target, "mensaje");
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.nombre.test(input.value)) {
        document.getElementById(`grupo-${campo}`).classList.remove("formulario-grupo-incorrecto");
        document.getElementById(`grupo-${campo}`).classList.add("formulario-grupo-correcto");
        document.querySelector(`#grupo-${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo-${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove("formulario-input-error-activo");
        campos[campo] = true;
    } else {
        document.getElementById(`grupo-${campo}`).classList.add("formulario-grupo-incorrecto");
        document.getElementById(`grupo-${campo}`).classList.remove("formulario-grupo-correcto");
        document.querySelector(`#grupo-${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo-${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add("formulario-input-error-activo");
        campos[campo] = false;
    }
}


// Añadir eventListener a cada uno de los inputs.
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

// Añadir eventListener al formulario para comprobar cuando
// se hace submit sobre el botón Enviar.
form.addEventListener("submit", (event) => {
    //Evitamos que sea enviado el formulario.
    event.preventDefault();

    if (campos.nombre && campos.email && campos.telefono && campos.asunto && campos.mensaje) {
        form.reset();

        document.getElementById("formulario-mensaje-exito").classList.add("formulario-mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario-mensaje-exito").classList.remove("formulario-mensaje-exito-activo");
        }, 5000);

        document.querySelectorAll(".formulario-grupo-correcto").forEach((icono) => {
            icono.classList.remove(formulario-grupo-correcto);
        });
    } else {
        document.getElementById("formulario-mensaje").classList.add("formulario-mensaje-activo");
    }
});