let amigos = []; // array que almacena los nombres de los amigos

// funcion para agregar un amigo al array
function agregarAmigo() {
    let input = document.getElementById("amigo");  // obtiene el texto del input
    let nombre = input.value.trim();  

    // alert para texto vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre para continuar");
    } else {
        amigos.push(nombre);  // agrega el nombre al array
        input.value = "";

        // listado de amigos
        let listaAmigos = document.querySelector("#listaAmigos"); // seleccionar el contenedor
        listaAmigos.innerHTML = "";

        // crea un <div> por cada amigo en el array
        amigos.forEach(function(amigo) {
            let divAmigo = document.createElement("div");
            divAmigo.textContent = amigo; //agrega el amigo al <div>
            listaAmigos.appendChild(divAmigo); //<div> en el contenedor
        });
    }
}

// funcion para el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de hacer el sorteo");
    } else {
        // random desde el array
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        // mostrar random
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`; // Mostrar el resultado en el HTML
    }
}