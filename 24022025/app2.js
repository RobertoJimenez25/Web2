let frutas = ["Mango", "Platano", "Manzana", "Zapote"];
console.log(frutas.length);

for (let j= 0; j< frutas.length; j++){
    console.log(frutas[j]);
}

let fruta = ["Mango", "Platano", "Manzana", "Zapote", "Fresa"];
for ( let frutas of fruta){
    console.log(frutas);
}

for (let frutas in fruta){
    console.log(frutas);
}