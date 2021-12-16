import {ITipoAlarma} from '../interfaces/i-tipo-alarma';
import {IClasificacionAlarma} from '../interfaces/i-clasificacion-alarma';

export class TipoAlarma implements ITipoAlarma {
  id: number;
  nombre: string;
  codigo: string;
  es_dispositivo: boolean;
  id_clasificacion_alarma: IClasificacionAlarma;
}
