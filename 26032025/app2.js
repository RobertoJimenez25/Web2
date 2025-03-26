/*
//Funcion declarativa
function numeroAleatorio(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}
//Invoco la funcion
console.log(numeroAleatorio(1, 11));

//Funcion expresada
const miNumero =function(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(10, 35));


function dato (a){
    return a + 100;
}

const dato = function(a){
    return a + 100;
}

var datos = (a) => {
    return a + 100;
}

var datos = (a) => a + 100;

function numeroAleatorioflecha(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

let numeroAleatorioflecha = (min,max) => Math.floor(Math.random()*(max-min)+min);
*/
/*
const array1 = ["a", "b", "c", "d"];
array1.forEach(element => console.log(element));
/*
arr.forEach(funtion callcack (currentValue, index, array)){
    //iterador
}
*/


let frutas = ["manzana", "pera", "naranja", "sandia"];
frutas.forEach(fruta => console.log(fruta));

frutas.forEach((fruta,index,array) =>{
    console.log( index);
    console.log( fruta);
    console.log( array);
});


