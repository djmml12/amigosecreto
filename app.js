let amigos = [] // El array que almacenara a los participantes en el concurso del amigo secreto 

function agregarNombre() {
    let input = document.getElementById("amigo")
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre para continuar");
    } else{
        nombres.push(nombre); //Agrega el nombre al Array
    }
}