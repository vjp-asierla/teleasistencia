import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoVivienda} from "../interfaces/i-tipo-vivienda";

@Injectable({
  providedIn: 'root'
})

export class CargaViviendaService {
  private URL_SERVER_VIVIENDAS = 'http://localhost:8000/api-rest/tipo_vivienda';

  constructor(private http: HttpClient) { }

  getViviendas(): Observable<ITipoVivienda[]> {
    return this.http.get<ITipoVivienda[]>(this.URL_SERVER_VIVIENDAS);
  }

  getVivienda(idVivienda: number): Observable<ITipoVivienda> {
    return this.http.get<ITipoVivienda>(this.URL_SERVER_VIVIENDAS + '/' + idVivienda);
  }


  modificarTipoVivienda(tipoVivienda: ITipoVivienda): Observable<ITipoVivienda> {
    return this.http.put<ITipoVivienda>(this.URL_SERVER_VIVIENDAS + '/' + tipoVivienda.id, tipoVivienda);
  }

  nuevaVivienda(vivienda: ITipoVivienda): Observable<ITipoVivienda> {
    return this.http.post<ITipoVivienda>(this.URL_SERVER_VIVIENDAS, vivienda);
  }
}
