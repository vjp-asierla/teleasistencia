export interface ITipoAlarma {
  id: number;
  nombre: string;
  codigo: string;
  es_dispositivo: boolean;
  id_clasificacion_alarma: {
    id: number;
    nombre: string;
    codigo: string;
  };
}
