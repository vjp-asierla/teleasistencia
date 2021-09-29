import {IClasificacionAlarma} from "./i-clasificacion-alarma";

export interface ITipoAlarma {
  id: number;
  nombre: string;
  codigo: string;
  es_dispositivo: boolean;
  id_clasificacion_alarma: IClasificacionAlarma;
}
