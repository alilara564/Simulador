//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

import { calcularDisponibles } from "./funciones.js";


function calcular(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let disponible = calcularDisponibles(ingresos, egresos);
    
    
    const elemento = document.getElementById('spnDisponible');
    elemento.innerText =  disponible.toFixed(2);
}