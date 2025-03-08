let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Indica un número entre 1 y 10: "));

let vidas = 5;

while (vidas > 0) {
    if (numeroMaquina === numeroUser) {
        console.log("¡Felicidades adivinaste el número!\n Has ganado.");
        console.log("El número era: " + numeroMaquina);
        break;
    } else {
        vidas--;
        if (vidas > 0) {
            numeroUser = parseInt(prompt("El número no es correcto. \nTe quedan: " + vidas + " vidas. \nIntenta nuevamente:"));
        }
    }
}

if (numeroMaquina !== numeroUser) {
    console.log("Lo siento, has perdido. El número era: " + numeroMaquina + "\n¡Inténtalo de nuevo!");
}