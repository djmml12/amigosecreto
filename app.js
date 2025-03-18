
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
        let listaAmigos = document.querySelector("#listaAmigos"); // selecciona el contenedor

        // crea un <div> por cada amigo en el array
        amigos.forEach(function(amigo){
            let divAmigo = document.createElement("div");
            divAmigo.textContent = amigo; //agrega el amigo al <div>
            listaAmigos.appendChild(divAmigo); //<div> en el contenedor
        });
    }
}

