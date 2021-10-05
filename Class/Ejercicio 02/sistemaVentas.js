class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  getIdProducto() {
    return this._idProducto;
  }

  getNombre() {
    return this._nombre;
  }
  setNombre() {
    this._nombre = nombre;
  }

  getPrecio() {
    return this._precio;
  }
  setPrecio() {
    this._precio = precio;
  }

  toString() {
    return `Id: ${this._idProducto} - Producto: ${this._nombre} - Precio: $${this._precio}`;
  }
}

class Orden {
  static contadorOrden = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrden;
    this._productos = [];
  }

  getIdOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("Máximo superado, no se pueden agregar más productos.");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (let prod of this._productos) {
      totalVenta += prod._precio;
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productosOrden = "";
    for (let prod of this._productos) {
      productosOrden += `${prod.toString()}\n`;
    }
    console.log(
      `Orden n°: ${
        this._idOrden
      } - Total a pagar: $${this.calcularTotal()}\nDetalle:\n${productosOrden}`
    );
  }
}

// Prueba Productos (Creo 6 objetos ya que en la orden existe un límite de 5 productos para agregar)
let producto1 = new Producto("Camisa", 2000);
let producto2 = new Producto("Pantalón", 2500);
let producto3 = new Producto("Saco", 20000);
let producto4 = new Producto("Zapatos", 15000);
let producto5 = new Producto("Remera", 1000);
let producto6 = new Producto("Cinto", 1500);
// Prueba Orden
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);
orden2.mostrarOrden();
// En orden 2 agregamos 6 productos, pero en el detalle solo nos muestra 5, que es el máximo permitido.
