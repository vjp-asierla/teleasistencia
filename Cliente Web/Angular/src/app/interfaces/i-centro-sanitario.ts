import {IDireccion} from './i-direccion';
import {ITipoCentroSanitario} from './i-tipo-centro-sanitario';

export interface ICentroSanitario {
  id: number;
  nombre: string;
  telefono: string;
  id_tipos_centro_sanitario: any;
  id_direccion: IDireccion;
}




