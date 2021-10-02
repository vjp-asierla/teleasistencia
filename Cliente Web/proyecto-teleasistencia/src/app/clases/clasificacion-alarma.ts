import {IClasificacionAlarma} from "../interfaces/i-clasificacion-alarma";

export class ClasificacionAlarma implements IClasificacionAlarma{
  codigo: string;
  id: number;
  nombre: string;
}
