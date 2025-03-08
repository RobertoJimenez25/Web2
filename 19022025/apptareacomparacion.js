var dato1 = parseInt(prompt("Ingresa el primer 1: "));
var dato2 = parseInt(prompt("Ingresa el segundo 2: "));
var dato3 = parseInt(prompt("Ingresa el tecrer 3: "));


if (dato1 === dato2 && dato2 === dato3) {
    console.log("Los tres números son iguales");
} else if (dato1 === dato2) {
    console.log("El número " + dato1 + "es igual");
} else if (dato1 == dato3) {
    console.log("El número " + dato1 + " " + "es igual");
}
else if (dato2 === dato3) {
    console.log("El número " + dato2 + " " + "es igual");
}
else {
    console.log("No hay números iguales");
}

if (dato1 >= dato2 && dato1 >= dato3) {
    console.log("El número " + dato1 + " es mayor");
}
else if (dato2 >= dato1 && dato2 >= dato3) {
    console.log("El número " + dato2 + " es el mayor");
}
else if (dato3 > dato1 && dato3 > dato2) {
    console.log("El número " + dato3 + " es el mayor");
}
else {
    console.log("El dato es incorrecto");
}