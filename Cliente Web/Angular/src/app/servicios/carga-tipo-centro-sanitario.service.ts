import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoCentroSanitario} from '../interfaces/i-tipo-centro-sanitario';
import {IUsers} from "../interfaces/i-users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CargaTipoCentroSanitarioService {
  private urlBase = environment.urlBase;
  private URL_SERVER_TIPOS_CENTROS_SANITARIOS = this.urlBase + 'tipo_centro_sanitario';

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

  eliminarTipoCentroSanitario(tipoCentroSanitario:ITipoCentroSanitario): Observable<ITipoCentroSanitario> {
    return this.http.delete<ITipoCentroSanitario>(this.URL_SERVER_TIPOS_CENTROS_SANITARIOS + '/' +tipoCentroSanitario.id);
  }
}
