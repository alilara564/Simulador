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


    const v1 = validarNumero("txtIngresos", "error-txtIngresos");
    const v2 = validarNumero("txtEgresos", "error-txtEgresos");
    const v3 = validarNumero("txtMonto", "error-txtMonto");
    const v4 = validarNumero("txtPlazo", "error-txtPlazo");
    const v5 = validarNumero("txtTasaInteres", "error-txtTasaInteres");


}

function reiniciar(){
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";
    document.getElementById("spnEstadoCredito").innerText = "";
}

function validarNumero(idInput, idError) {
  const input = document.getElementById(idInput);
  const error = document.getElementById(idError);

  const valor = input.value.trim();
  error.textContent = "";

  // vacío
  if (valor === "") {
    error.textContent = "Este campo es obligatorio";
    return false;
  }

  // solo números
  if (!/^\d+$/.test(valor)) {
    error.textContent = "Solo se permiten números";
    return false;
  }

  // máximo 5 dígitos
  if (valor.length > 5) {
    error.textContent = "Máximo 5 dígitos";
    return false;
  }

  return true;
}