let ingresos = [];

let egresos = [];

let form = document.querySelector(".btn_form");

window.addEventListener("load", () => {
  let ingresosStorage = JSON.parse(localStorage.getItem("ingresos"));
  let egresosStorage = JSON.parse(localStorage.getItem("egresos"));
  if (ingresosStorage) {
    ingresos = ingresosStorage;
  }
  if (egresosStorage) {
    egresos = egresosStorage;
  }
  cargarCabecera();
  cargarIngresos();
  cargarEgresos();
});

let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso._importe;
  }
  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso._importe;
  }
  return totalEgreso;
};

let cargarCabecera = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-AR", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
   <div class="elemento limpiarEstilos">
   <div class="elemento_descripcion">${ingreso._descripcion}</div>
   <div class="derecha limpiarEstilos">
       <div class="elemento_valor">+ ${formatoMoneda(ingreso._importe)}</div>
       <div class="elemento_eliminar">
           <button class='elemento_eliminar--btn'>
               <ion-icon name="close-circle-outline"
               onclick='eliminarIngreso(${ingreso._id})'></ion-icon>
           </button>
       </div>
   </div>
</div>
   `;
  return ingresoHTML;
};

const eliminarIngreso = (id) => {
  // Llamo al localStorage
  let ingresosStorage = JSON.parse(localStorage.getItem("ingresos"));
  // Obtengo el indice a eliminar
  let indiceEliminar = ingresos.findIndex(
    (ingreso) => ingreso._idIngresos === id
  );
  // Elimino el elemento desde la web principal
  ingresos.splice(indiceEliminar, 1);
  // Elimino el elemento en el localStorage
  ingresosStorage.splice(indiceEliminar, 1);
  // Actualizo el localStorage luego de eliminar el elemento
  localStorage.setItem("ingresos", JSON.stringify(ingresos));
  cargarCabecera();
  cargarIngresos();
};

const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
   <div class="elemento limpiarEstilos">
   <div class="elemento_descripcion">${egreso._descripcion}</div>
   <div class="derecha limpiarEstilos">
       <div class="elemento_valor">- ${formatoMoneda(egreso._importe)}</div>
       <div class="elemento_porcentaje">${formatoPorcentaje(
         egreso._importe / totalEgresos()
       )}</div>
       <div class="elemento_eliminar">
           <button class='elemento_eliminar--btn'>
               <ion-icon name="close-circle-outline"
               onclick='eliminarEgreso(${egreso._idEgresos})'></ion-icon>
           </button>
       </div>
   </div>
</div>
   `;

  return egresoHTML;
};

let eliminarEgreso = (id) => {
  let egresosStorage = JSON.parse(localStorage.getItem("egresos"));
  let indiceEliminar = egresos.findIndex((egreso) => egreso._idEgresos === id);

  egresos.splice(indiceEliminar, 1);
  egresosStorage.splice(indiceEliminar, 1);
  
  localStorage.setItem("egresos", JSON.stringify(egresos));
  cargarCabecera();
  cargarEgresos();
};

form.addEventListener("click", () => {
  let tipo = document.getElementById("tipo").value;
  let descripcion = document.getElementById("descripcion").value;
  let valor = document.getElementById("valor").value;

  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      ingresos.push(new Ingreso(descripcion, +valor));
      cargarCabecera();
      cargarIngresos();
      localStorage.setItem("ingresos", JSON.stringify(ingresos));
    } else if (tipo === "egreso") {
      egresos.push(new Egreso(descripcion, +valor));
      cargarCabecera();
      cargarEgresos();
      localStorage.setItem("egresos", JSON.stringify(egresos));
    }
  }
});
