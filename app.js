
let amigos = []; // Array que almacena los nombres de los amigos

// Función para agregar el nombre de un amigo al array
function agregarAmigo() {
    let input = document.getElementById("amigo");  // Obtener el valor del input
    let nombre = input.value.trim();  // Eliminar espacios antes y después del nombre

    // Verificar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre para continuar");
    } else {
        amigos.push(nombre);  // Agregar el nombre al array 'amigos'
        input.value = "";  // Limpiar el campo de texto

        // Mostrar la lista de amigos directamente después de agregar uno
        let listaAmigos = document.querySelector("#listaAmigos"); // Seleccionar el contenedor
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos amigos

        // Crear un <div> o <li> por cada amigo en el array y agregarlo a la lista
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