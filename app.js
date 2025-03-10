const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = []; 

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }
       console.log (nombre);
       amigos.push(nombre);

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    listaAmigos.innerHTML = "";


        // Crear un nuevo <li> para cada amigo en el arreglo
        for (let i = 0; i < amigos.length; i++) {
            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = amigos[i];
            listaAmigos.appendChild(nuevoElemento);
        }

    resultado.innerHTML = `<li> Amigo secreto sorteado: <strong>${amigoSeleccionado}</strong></li>`;
    listaAmigos.innerHTML = "";
}