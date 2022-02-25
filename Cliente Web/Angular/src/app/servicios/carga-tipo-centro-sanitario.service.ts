import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoCentroSanitario} from '../interfaces/i-tipo-centro-sanitario';

@Injectable({
  providedIn: 'root'
})

export class CargaTipoCentroSanitarioService {
  private URL_SERVER_TIPOS_CENTROS_SANITARIOS = 'http://localhost:8000/api-rest/tipo_centro_sanitario';

  constructor(private http: HttpClient) {
  }

  getTiposCentrosSanitarios(): Observable<ITipoCentroSanitario[]> {
    return this.http.get<ITipoCentroSanitario[]>(this.URL_SERVER_TIPOS_CENTROS_SANITARIOS);
  }

  getTipoCentroSanitario(idTipoCentroSanitario: number): Observable<ITipoCentroSanitario> {
    return this.http.get<ITipoCentroSanitario>(this.URL_SERVER_TIPOS_CENTROS_SANITARIOS + '/' + idTipoCentroSanitario);
  }

  modificarTipoCentroSanitario(tipoCentroSanitario: ITipoCentroSanitario): Observable<ITipoCentroSanitario> {
    return this.http.put<ITipoCentroSanitario>(this.URL_SERVER_TIPOS_CENTROS_SANITARIOS + '/' + tipoCentroSanitario.id, tipoCentroSanitario);
  }

  nuevoTipoCentroSanitario(tipoCentroSanitario: ITipoCentroSanitario): Observable<ITipoCentroSanitario> {
    return this.http.post<ITipoCentroSanitario>(this.URL_SERVER_TIPOS_CENTROS_SANITARIOS, tipoCentroSanitario);
  }
}
