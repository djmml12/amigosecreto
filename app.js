let amigos = [] // El array que almacenara a los participantes en el concurso del amigo secreto 

function agregarNombre() {
    let input = document.getElementById("amigo")
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre para continuar");
    } else{
        amigo.push(nombre); //Agrega el nombre al Array
    }
}

function crearLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
  }