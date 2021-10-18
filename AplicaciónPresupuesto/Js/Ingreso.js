class Ingreso extends Presupuesto {
   static contadorIngresos = 0;
 
   constructor(descripcion, importe) {
     super(descripcion, importe);
     this._idIngresos = ++Ingreso.contadorIngresos;
   }
 
   get idIngresos() {
     return this._idIngresos;
   }
 }