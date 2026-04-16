//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponibles(ingresos,egresos){
    let disponibles = ingresos - egresos;
    if(disponibles < 0){
        disponibles = 0;
    }
    return disponibles;
}

function calcularCapacidadDePago(monto_disponible){
    let capacidad_pago = monto_disponible / 2;
    return capacidad_pago;
}

function mostrarEnSpan(id_span, valor){
    let elemento = document.getElementById(id_span);
    elemento.innerText = parseFloat(valor).toFixed(2);
}