import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICentroSanitario} from '../interfaces/i-centro-sanitario';

@Injectable({
  providedIn: 'root'
})

export class CargaCentroSanitarioService {
  private URL_SERVER_CENTROS_SANITARIOS = 'http://localhost:8000/api-rest/centro_sanitario';

  constructor(private http: HttpClient) {
  }

  getCentrosSanitarios(): Observable<ICentroSanitario[]> {
    return this.http.get<ICentroSanitario[]>(this.URL_SERVER_CENTROS_SANITARIOS);
  }

  getCentroSanitario(idCentroSanitario: number): Observable<ICentroSanitario> {
    return this.http.get<ICentroSanitario>(this.URL_SERVER_CENTROS_SANITARIOS + '/' + idCentroSanitario);
  }

  modificarCentroSanitario(centroSanitario: ICentroSanitario): Observable<ICentroSanitario> {
    return this.http.put<ICentroSanitario>(this.URL_SERVER_CENTROS_SANITARIOS + '/' + centroSanitario.id, centroSanitario);
  }

  nuevoCentroSanitario(centroSanitario: ICentroSanitario): Observable<ICentroSanitario> {
    return this.http.post<ICentroSanitario>(this.URL_SERVER_CENTROS_SANITARIOS, centroSanitario);
  }
}
