//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

calcular = function(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let disponible = calcularDisponibles(ingresos, egresos);
    let capacidad_pago = calcularCapacidadDePago(disponible);
    
    
    mostrarEnSpan("spnDisponible", disponible);
    mostrarEnSpan("spnCapacidadPago", capacidad_pago);   

}