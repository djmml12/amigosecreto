
let amigos = []; // array que almacena los nombres de los amigos

// funcion para agregar un amigo al array
function agregarAmigo() {
    let input = document.getElementById("amigo");  // obtiene el texto del input
    let nombre = input.value.trim();

    // alert para texto vacio
    if (nombre === "") {
        alert("Agrega a un amigo para continuar")
    } else {
        amigos.push(nombre);  // agrega el nombre al array
        input.value = "";

        // listado de amigos                                             
        let listaAmigos = document.que

        // Crear un <div> por cada amigo en el array y agregarlo a la lista
        amigos.forEach(function(amigo) {
            let divAmigo = document.createElement("div"); // Crear un <div>
            divAmigo.textContent = amigo; // Asignar el nombre del amigo al <div>
            listaAmigos.appendChild(divAmigo); // Agregar el <div> al contenedor
        });
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de hacer el sorteo");
    } else {
        // Elegir un amigo al azar del array de amigos
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el nombre del amigo secreto
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`; // Mostrar el resultado en el HTML
    }
}