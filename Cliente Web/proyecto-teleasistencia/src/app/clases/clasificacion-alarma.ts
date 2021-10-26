import {IClasificacionAlarma} from "../interfaces/i-clasificacion-alarma";

export class ClasificacionAlarma implements IClasificacionAlarma {
  id: number;
  nombre: string;
  codigo: string;
}
