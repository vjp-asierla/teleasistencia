import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoRecursoComunitario} from '../../../interfaces/i-tipo-recurso-comunitario';

@Injectable({
  providedIn: 'root'
})
export class CargaTipoRecursoComunitarioService {
  private URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS = 'http://localhost:8000/api-rest/tipo_recurso_comunitario';

  constructor(private http: HttpClient) {
  }

  getTiposRecursosComunitarios(): Observable<ITipoRecursoComunitario[]> {
    return this.http.get<ITipoRecursoComunitario[]>(this.URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS);
  }

  getTipoRecursoComunitario(idTipoRecursoComunitario: number): Observable<ITipoRecursoComunitario> {
    return this.http.get<ITipoRecursoComunitario>(this.URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS + '/' + idTipoRecursoComunitario);
  }

  modificarTipoRecursoComunitario(tipoRecursoComunitario: ITipoRecursoComunitario): Observable<ITipoRecursoComunitario> {
    return this.http.put<ITipoRecursoComunitario>(this.URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS + '/' + tipoRecursoComunitario.id, tipoRecursoComunitario);
  }

  nuevoTipoRecursoComunitario(tipoRecursoComunitario: ITipoRecursoComunitario): Observable<ITipoRecursoComunitario> {
    return this.http.post<ITipoRecursoComunitario>(this.URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS, tipoRecursoComunitario);
  }
  eliminarTipoRecursoComunitario(tipoRecursoComunitario: ITipoRecursoComunitario): Observable<ITipoRecursoComunitario>{
    return this.http.delete<ITipoRecursoComunitario>(this.URL_SERVER_TIPOS_RECURSOS_COMUNITARIOS + '/'+ tipoRecursoComunitario.id);
  }
}
