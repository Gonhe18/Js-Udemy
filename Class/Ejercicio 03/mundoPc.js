class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  getTipoEntrada() {
    return this._tipoEntrada;
  }
  setTipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  getMarca() {
    return this._marca;
  }
  setMarca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  getIdRaton() {
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

  getIdTeclado() {
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

  getIdMonitor() {
    return this._idMonitor;
  }

  getMarca() {
    return this._marca;
  }
  setMarca(marca) {
    this._marca = marca;
  }

  getPulgadas() {
    return this._pulgadas;
  }
  setPulgadas(pulgadas) {
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

  getIdComputadora() {
    return this._idComputadora;
  }

  getNombre() {
    return this._nombre;
  }
  setNombre(nombre) {
    this._nombre = nombre;
  }

  getMonitor() {
    return this._monitor;
  }
  setMonitor(monitor) {
    this._monitor = monitor;
  }

  getTeclado() {
    return this._teclado;
  }
  setTeclado(teclado) {
    this._teclado = teclado;
  }

  getRaton() {
    return this._raton;
  }
  setRaton(raton) {
    this._raton = raton;
  }

  toString() {
    return `Computadora id: ${this._idComputadora} - Nombre: ${this._nombre}\n${this._monitor}\n${this._raton}\n${this._teclado}`;
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
console.log(pc2.toString());
