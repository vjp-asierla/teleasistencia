import {IDireccion} from "./i-direccion";
import {ITipoRecursoComunitario} from "./i-tipo-recurso-comunitario";

export interface IRecursoComunitario {
  id: number;
  nombre: string;
  telefono: string;
  id_tipos_recurso_comunitario: ITipoRecursoComunitario;
  id_direccion: IDireccion;
}
