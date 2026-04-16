//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponibles(ingresos,egresos){
    let disponibles = ingresos - egresos;
    if(disponibles < 0){
        disponibles = 0;
    }
    return disponibles;
}