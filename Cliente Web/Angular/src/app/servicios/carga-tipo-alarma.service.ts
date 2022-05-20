import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoAlarma} from '../interfaces/i-tipo-alarma';
import {IUsers} from "../interfaces/i-users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CargaTipoAlarmaService {
  private urlBase = environment.urlBase;
  private URL_SERVER_TIPOS_ALARMAS = this.urlBase + 'tipo_alarma';

  constructor(private http: HttpClient) {
  }

  getTiposAlarmas(): Observable<ITipoAlarma[]> {
    return this.http.get<ITipoAlarma[]>(this.URL_SERVER_TIPOS_ALARMAS);
  }

  getTipoAlarma(idTipoAlarma: number): Observable<ITipoAlarma> {
    return this.http.get<ITipoAlarma>(this.URL_SERVER_TIPOS_ALARMAS + '/' + idTipoAlarma);
  }

  modificarTipoAlarma(tipoAlarma: ITipoAlarma): Observable<ITipoAlarma> {
    return this.http.put<ITipoAlarma>(this.URL_SERVER_TIPOS_ALARMAS + '/' + tipoAlarma.id, tipoAlarma);
  }

  nuevoTipoAlarma(tipoAlarma: ITipoAlarma): Observable<ITipoAlarma> {
    return this.http.post<ITipoAlarma>(this.URL_SERVER_TIPOS_ALARMAS, tipoAlarma);
  }
  eliminarTipoAlarma(tipoAlarma:ITipoAlarma): Observable<IUsers> {
    console.log("servicio");
    console.log(tipoAlarma);
    console.log(tipoAlarma.id);
    return this.http.delete<IUsers>(this.URL_SERVER_TIPOS_ALARMAS + '/' + tipoAlarma.id);
  }
}
