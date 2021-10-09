class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Ratón id: ${this._idRaton} - Marca: ${this._marca} - Conexión: ${this._tipoEntrada}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado id: ${this._idTeclado} - Marca: ${this._marca} - Conexión: ${this._tipoEntrada}`;
  }
}

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, pulgadas) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._pulgadas = pulgadas;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }

  get pulgadas() {
    return this._pulgadas;
  }
  set pulgadas(pulgadas) {
    this._pulgadas = pulgadas;
  }

  toString() {
    return `Monitor id: ${this._idMonitor} - Marca: ${this._marca} - Pulgadas: ${this._pulgadas}"`;
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get monitor() {
    return this._monitor;
  }
  set monitor(monitor) {
    this._monitor = monitor;
  }

  get teclado() {
    return this._teclado;
  }
  set teclado(teclado) {
    this._teclado = teclado;
  }

  get raton() {
    return this._raton;
  }
  set raton(raton) {
    this._raton = raton;
  }

  toString() {
    return `Id Computadora: ${this._idComputadora} - ${this._nombre}\n${this._monitor}\n${this._raton}\n${this._teclado}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let productosOrden = "";
    for (let pc of this._computadoras) {
      productosOrden += `${pc.toString()}\n`;
    }
    console.log(`Orden n°: ${this._idOrden}\n${productosOrden}`);
  }
}

// Clase Ratón
let raton1 = new Raton("Bluetooth", "HP");
let raton2 = new Raton("USB", "HyperX");
// Clase Teclado
let teclado1 = new Teclado("USB", "Trust");
let teclado2 = new Teclado("Bluetooth", "Corsair");
// Clase Monitor
let monitor1 = new Monitor("Sanyo", "32");
let monitor2 = new Monitor("BGH", "24");
// Clase Computadora
let pc1 = new Computadora("AMD", monitor1, raton1, teclado2);
let pc2 = new Computadora("Intel", monitor2, raton2, teclado1);
// Clase Orden
let orden1 = new Orden();
orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarComputadora(pc2);
orden2.mostrarOrden();