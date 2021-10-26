import {ICentroSanitario} from "../interfaces/i-centro-sanitario";
import {IDireccion} from "../interfaces/i-direccion";
import {ITipoCentroSanitario} from "../interfaces/i-tipo-centro-sanitario";

export class CentroSanitario implements ICentroSanitario {
  id: number;
  id_direccion: IDireccion;
  id_tipos_centro_sanitario: ITipoCentroSanitario;
  nombre: string;
  telefono: string;
}
