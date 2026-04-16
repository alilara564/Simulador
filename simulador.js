//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

calcular = function(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponibles(ingresos, egresos);
    let capacidad_pago = calcularCapacidadDePago(disponible);

    let monto = document.getElementById("txtMonto").value;
    let tiempo = document.getElementById("txtPlazo").value;
    let taza = document.getElementById("txtTasaInteres").value;

    let interes = calcularInteresSimple(monto, taza, tiempo);
    let total = totalPagar(parseInt(monto), parseInt(interes));
    let cuota_mensual = calcularCuotaMensual(total, tiempo);
    
    
    mostrarEnSpan("spnDisponible", disponible);
    mostrarEnSpan("spnCapacidadPago", capacidad_pago);  
    mostrarEnSpan("spnInteresPagar", interes);

    
    mostrarEnSpan("spnTotalPrestamo", total);
    mostrarEnSpan("spnCuotaMensual", cuota_mensual);

    let resultado = aprobarCredito(capacidad_pago, cuota_mensual);
    document.getElementById("spnEstadoCredito").innerText = resultado;


}