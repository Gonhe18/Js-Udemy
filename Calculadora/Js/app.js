// Suma
const btn_suma = document.querySelector(".sumar");
let sumar = btn_suma.addEventListener("click", (e) => {
  e.preventDefault();
  let opA = document.getElementById("op1").value;
  let opB = document.getElementById("op2").value;
  let resultado = parseInt(opA) + parseInt(opB);
  if (Number.isNaN(resultado)) {
    resultado = "Error, debe ingresar solo números";
  }
  document.querySelector(
    ".resultado"
  ).innerHTML = `Resultado: ${resultado}`;
});

// Resta
const btn_resta = document.querySelector(".restar");
let resta = btn_resta.addEventListener("click", (e) => {
  e.preventDefault();
  let opA = document.getElementById("op1").value;
  let opB = document.getElementById("op2").value;
  let resultado = parseInt(opA) - parseInt(opB);
  if (Number.isNaN(resultado)) {
    resultado = "Error, debe ingresar solo números";
  }
  document.querySelector(
    ".resultado"
  ).innerHTML = `Resultado: ${resultado}`;
});

// Múltiplicar
const btn_multiplicar = document.querySelector(".multiplicar");
let multiplicar = btn_multiplicar.addEventListener("click", (e) => {
  e.preventDefault();
  let opA = document.getElementById("op1").value;
  let opB = document.getElementById("op2").value;
  let resultado = parseInt(opA) * parseInt(opB);
  if (Number.isNaN(resultado)) {
    resultado = "Error, debe ingresar solo números";
  }
  document.querySelector(
    ".resultado"
  ).innerHTML = `Resultado: ${resultado}`;
});

const btn_dividir = document.querySelector(".dividir");

let dividir = btn_dividir.addEventListener("click", (e) => {
  e.preventDefault();
  let opA = document.getElementById("op1").value;
  let opB = document.getElementById("op2").value;
  let resultado = parseInt(opA) / parseInt(opB);
  if (Number.isNaN(resultado)) {
    resultado = "Error, debe ingresar solo números";
  }
  document.querySelector(
    ".resultado"
  ).innerHTML = `Resultado: ${resultado}`;
});