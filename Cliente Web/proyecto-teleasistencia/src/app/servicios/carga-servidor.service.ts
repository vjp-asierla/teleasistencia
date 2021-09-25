import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../interfaces/i-users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargaServidorService {

  private URL_SERVER = 'http://localhost:8000/api-rest/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.URL_SERVER + 'users');
  }

  getUser(idUser: number): Observable<IUsers> {
    return this.http.get<IUsers>(this.URL_SERVER + 'users/' + idUser);
  }

  modificarUser(user: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(user.url, user);
  }

  nuevoUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.URL_SERVER + 'users', user);
  }

}
