function suma(numero1, numero2) {
    return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1, numero2) {
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1, numero2) {
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2) {
    if (numero2 == 0) {
        return 'No se puede dividir por cero';
    }
    return parseInt(numero1) / parseInt(numero2);
}

function menu(opcion, numero1, numero2) {
    let resultado;
    let operacionNombre;
    switch (opcion) {
        case '1':
            resultado = suma(numero1, numero2);
            operacionNombre = 'suma';
            break;
        case '2':
            resultado = resta(numero1, numero2);
            operacionNombre = 'resta';
            break;
        case '3':
            resultado = multiplicacion(numero1, numero2);
            operacionNombre = 'multiplicación';
            break;
        case '4':
            resultado = division(numero1, numero2);
            operacionNombre = 'división';
            break;
        default:
            return 'Opción no válida';
    }
    return `El resultado de la operación ${operacionNombre} es: ${resultado}`;
}

let n1 = prompt("Ingresa un número1: ");
let n2 = prompt("Ingresa un número2: ");
let operacion = prompt("Ingresa la operación (1= suma, 2= resta, 3= multiplicación, 4= división): ");

let resultado = menu(operacion, n1, n2);
console.log(resultado);