let personas = [];

// Evento que permite cargar automáticamente los nombres de la lista
window.addEventListener("load", (e) => {
  e.preventDefault();

  let storage = JSON.parse(localStorage.getItem("personas"));
  if (storage) {
    personas = storage;
  }
  let texto = "";
  for (let persona of storage) {
    texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
});

// Evento que permite ingresar nuevos elementos a la lista
const $btn = document.querySelector("button");

$btn.addEventListener("click", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  if (nombre === "" || apellido === "") {
    alert("Error, ingrese su nombre y apellido correctamente");
  } else {
    let texto = "";

    personas.push(new Persona(nombre, apellido));

    for (let persona of personas) {
      texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;

    localStorage.setItem("personas", JSON.stringify(personas));
  }
});
