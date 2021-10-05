class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  getIdPersona() {
    return this._idPersona;
  }

  getNombre() {
    return this._nombre;
  }
  setNombre(nombre) {
    this._nombre = nombre;
  }

  getApellido() {
    return this._apellido;
  }
  setApellido(apellido) {
    this._apellido = apellido;
  }

  getEdad() {
    return this._edad;
  }
  setEdad(edad) {
    this._edad = edad;
  }

  toString() {
    return `Id: ${this._idPersona}. ${this._nombre} ${this._apellido}, tiene ${this._edad} años`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._suedo = sueldo;
  }

  getIdEmpleado() {
    return this._idEmpleado;
  }

  getSueldo() {
    return this._suedo;
  }
  setSueldo(sueldo) {
    this._suedo = sueldo;
  }

  toString() {
    return `${super.toString()}. Id Empleado: ${
      this._idEmpleado
    }, tiene un sueldo de $${this._suedo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  getIdCliente() {
    return this._idCliente;
  }

  getFechaRegistro() {
    return this._fechaRegistro;
  }
  setFechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} Id Cliente: ${
      this._idCliente
    }, registrado en sistema desde el: ${this._fechaRegistro}.`;
  }
}

// Prueba clase Persona
let persona1 = new Persona("Gonzalo", "Bazzani", 31);
console.log(persona1.toString());
let persona2 = new Persona("María", "Maidana", 25);
console.log(persona2.toString());

// Prueba clase Empleado
let empleado1 = new Empleado("Santiago", "Gómez", 28, 10000);
console.log(empleado1.toString());
let empleado2 = new Empleado("Rosa", "Ortiz", 40, 50000);
console.log(empleado2.toString());

// Prueba clase Cliente
let cliente1 = new Cliente("Yohana", "Coronel", 55, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Matín", "Ocampo", 60, new Date());
console.log(cliente2.toString());
