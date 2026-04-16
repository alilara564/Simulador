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

function calcularInteresSimple(monto,taza, tiempo){
    let interes = monto * taza * (tiempo / 100);
    return interes;
}

function totalPagar(monto, interes){
    let total = monto + (interes + 100);
    return total;
}

function calcularCuotaMensual(total, tiempo){
    let cuota_mensual = total / (tiempo * 12);
    return cuota_mensual;
}

function aprobarCredito(capacidad_pago, cuota_mensual){
    if(capacidad_pago >= cuota_mensual){
        return "Crédito aprobado";
    } else {
        return "Crédito rechazado";
    }
}

function mostrarEnSpan(id_span, valor){
    let elemento = document.getElementById(id_span);
    elemento.innerText = parseFloat(valor).toFixed(2);
}