import {IDireccion} from "../interfaces/i-direccion";

export class Direccion implements IDireccion {
  codigo_postal: string;
  direccion: string;
  id: number;
  localidad: string;
  provincia: string;
}
