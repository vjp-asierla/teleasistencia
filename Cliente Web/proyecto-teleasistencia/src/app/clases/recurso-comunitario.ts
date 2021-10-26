import {IRecursoComunitario} from "../interfaces/i-recurso-comunitario";
import {IDireccion} from "../interfaces/i-direccion";
import {ITipoRecursoComunitario} from "../interfaces/i-tipo-recurso-comunitario";

export class RecursoComunitario implements IRecursoComunitario {
  id: number;
  id_direccion: IDireccion;
  id_tipos_recurso_comunitario: ITipoRecursoComunitario;
  nombre: string;
  telefono: string;
}
