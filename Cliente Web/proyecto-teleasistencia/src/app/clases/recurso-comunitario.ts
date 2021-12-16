import {IRecursoComunitario} from '../interfaces/i-recurso-comunitario';
import {IDireccion} from '../interfaces/i-direccion';
import {ITipoRecursoComunitario} from '../interfaces/i-tipo-recurso-comunitario';

export class RecursoComunitario implements IRecursoComunitario {
  id: number;
  nombre: string;
  telefono: string;
  id_tipos_recurso_comunitario: ITipoRecursoComunitario;
  id_direccion: IDireccion;
}
