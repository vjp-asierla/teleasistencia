import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProfileUser} from "../interfaces/i-profile-user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private urlBase = environment.urlBase;
  private URL_SERVER_PROFILE = this.urlBase + 'profile';

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<IProfileUser[]> {
    return this.http.get<IProfileUser[]>(this.URL_SERVER_PROFILE);
  }

  modificarProfile(user: IProfileUser): Observable<IProfileUser> {
    return this.http.put<IProfileUser>(user.url, user);
  }
}
