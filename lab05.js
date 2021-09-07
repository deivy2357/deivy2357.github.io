const ESPACIO = " ";
const GUION = "-";
const MESES = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

function procesarNombresYApellidos() {
    const capturarNombre = String(document.getElementById("capturarNombre").value);
    const separador = capturarNombre.split(ESPACIO);
    if (separador.length == 3) {
        const apellidoPaterno = separador[0];
        const apellidoMaterno = separador[1];
        const nombres = separador[2];
        document.getElementById("paterno").value = apellidoPaterno;
        document.getElementById("materno").value = apellidoMaterno;
        document.getElementById("nombres").value = nombres;
        document.getElementById("longitud").value = `${apellidoPaterno} ${apellidoMaterno}`.length;
        return;
    }
}

function procesarEdad() {
    const fechaNacimiento = String(document.getElementById("nacimiento").value);
    const fechaValues = fechaNacimiento.split(GUION);
    const anioNacimiento = Number(fechaValues[0]);
    const mesNacimiento = Number(fechaValues[1]);
    const diaNacimiento = Number(fechaValues[2]);

    const edad = calcularEdad(anioNacimiento, mesNacimiento, diaNacimiento);

    document.getElementById("edad").value = edad;
    document.getElementById("mes").value = MESES[mesNacimiento - 1];
}

function calcularEdad(anioNacimiento, mesNacimiento, diaNacimiento) {
    const fechaHoy = new Date();
    const anioHoy = fechaHoy.getFullYear();
    const mesHoy = fechaHoy.getMonth() + 1;
    const diaHoy = fechaHoy.getDate();
    
    const difAnios = anioHoy - anioNacimiento;
    const difMeses = mesHoy - mesNacimiento;
    const difDias = diaHoy - diaNacimiento;
    
    // cuando el mes corresponde al nacimiento
    if (difMeses == 0) {
        if (difDias >= 0) {
            return difAnios;
        }
        // Te faltan días para cumplir años
        return difAnios - 1;
    }

    // cuando ya cumplió años
    if (difMeses > 0) {
        return difAnios;
    }

    // aun no cumple años
    return difAnios -1;
}

function capturarTexto() {
    procesarNombresYApellidos();
    procesarEdad();
}
