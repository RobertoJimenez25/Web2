let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opcion Diponibles: \n"+
        "1. Agregar Producto \n"+
        "2. Mostrar todos los productos \n"+
        "3. Buscar producto por nombre \n"+
        "4. Salir \n"+
        "Elige una opcion: "
    ));
}

function agregarProducto(){
    let nombreProducto = prompt("Introduce el nombre del producto: ");
    let cantidadProducto = parseInt( prompt("Introduce la cantidad del producto: "));
    let precioProducto = parseInt(prompt("Introduce el precio del producto:"));

    if( cantidadProducto > 0 && precioProducto > 0 ){
        let producto ={
            nombre: nombreProducto,
            cantidad: cantidadProducto,
            precio: precioProducto
        };
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("Cantidad y precio tiene que ser positivo");
    }
  
}

function mostrarProducto(){
    if( inventario.length === 0 ){
        alert("no tenemos productos en el inventario");
    }else{
        let mensaje= "Productos en el inventario: ";
        
        for(let i =0; i< inventario.length;i++ ){
            mensaje+=`Producto ID: ${i+1} \n`+
                     `Nombre: ${inventario[i].nombre}\n`+
                     `Cantidad: ${inventario[i].cantidad}\n`+
                     `Precio: ${inventario[i].precio}\n`+
                     "------------------------------------\n";           ;
        }
        alert(mensaje);
    }


}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1: 
                agregarProducto();
                break;
            case 2: 
                mostrarProducto();
                break;
            case 3: buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");

        }

    }
}

iniciarPrograma();