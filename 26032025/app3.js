// Inicializamos un arreglo para almacenar las tareas
let tareas = [];

// Funcion para mostrar un menú
function mostrarMenu() {
    return parseInt(prompt(
        "Opciones dispnibles:\n" +
        "1. Agregar tarea \n" +
        "2. Ver todas las tareas \n" +
        "3. Marcara tarea como completada \n" +
        "4. Salir \n" +
        "Elige una ocpion"
    ));
}

function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea:");
    if (nombre) {
        let tareas = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tareas);
        alert("Tarea agregada exitosamente");
    } else {
        alert("El nombre de la tarea no puede estar vacio")
    }
    console.log("En proceso");
}

function verTareas() {
    if(tareas.length === 0){
        alert("No hay tareas en lista");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}. ${tarea.nombre} [ ${tarea.completada ? "Completada" : "Pendiente"} ]\n`;
        });
        alert(mensaje);
    }
}


function marcarTareaCompletada() {
    let numero = parseInt(prompt("Introduce el numero de la tarea a completar"));
    if (numero > 0 && numero <= tareas.length) {
        tareas[numero - 1].completado = true;
        alert('La tarea "${tareas[numero - 1].nombre}" ha sido completada');
    } else {
        alert("Numero de tarea invalido");
    }
}

//Funcion principal para manejar el programa

function iniciarPrograma(){
let condicion = true;
while (condicion){
    let opcion = mostrarMenu();
    switch (opcion){
        case 1:
            agregarTarea();
            break;
        case 2:
            verTareas();
            break;
        case 3:
            marcarTareaCompletada();
            break;
        case 4:
            alert("Saliendo del programa");
            condicion = false;
            break;
        default:
            alert("Saliendo del programa");
            break;
        }
    }
    alert = ("Programa finalizado");
}


iniciarPrograma();


















