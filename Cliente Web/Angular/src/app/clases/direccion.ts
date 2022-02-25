import {IDireccion} from '../interfaces/i-direccion';

export class Direccion implements IDireccion {
  id: number;
  localidad: string;
  provincia: string;
  direccion: string;
  codigo_postal: string;
}
