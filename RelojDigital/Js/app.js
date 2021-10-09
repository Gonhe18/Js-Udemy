window.addEventListener("load", (e) => {
  e.preventDefault();

  setInterval(() => {
   let d = new Date();
   let año = d.getFullYear();
   let mes = d.getMonth() + 1 <= 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
   let dia = d.getDate() <= 9 ? "0" + d.getDate() : d.getDate();
   let hora = d.getHours() <= 9 ? "0" + d.getHours() : d.getHours();
   let min = d.getMinutes() <= 9 ? "0" + d.getMinutes() : d.getMinutes();
   let seg = d.getSeconds() <= 9 ? "0" + d.getSeconds() : d.getSeconds();

   document.getElementById("hora").innerHTML = `${hora}:${min}:${seg}`;
   document.getElementById("fecha").innerHTML = `${dia}/${mes}/${año}`;
   document.getElementById("contenedor").classList.toggle("animar");
  }, 1000);
});
