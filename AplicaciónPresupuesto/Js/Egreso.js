class Egreso extends Presupuesto {
  static contadorEgresos = 0;

  constructor(descripcion, importe) {
     super(descripcion, importe);
     this._idEgresos = ++Egreso.contadorEgresos;
  }

  get idEgresos() {
    return this._idEgresos;
  }
}

