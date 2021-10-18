class Presupuesto {
  constructor(descripcion, importe) {
    this._descripcion = descripcion;
    this._importe = importe;
  }

  get descripcion() {
    return this._descripcion;
  }
  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }

  get importe() {
    return this._importe;
  }
  set importe(importe) {
    this._importe = importe;
  }
}
