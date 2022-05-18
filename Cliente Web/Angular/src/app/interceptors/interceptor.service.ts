import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable, of, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      Swal.fire( {
        icon:'error',
        title:'Error',
        text:'Tu sesión ha caducado',
        footer:'Vuelve a iniciar sesión'
      })
      localStorage.clear();
      this.router.navigate(['/login']);
      return of(err.message);
    }

    if(err.status==404){
      Swal.fire( {
        icon:'error',
        title:'Error',
        text:'404 not found',
      })
      return of(err.message);
    }
    if(err.status==400){
      Swal.fire( {
        icon:'error',
        title:'Error',
        text:'Se ha producido un error',
      })
      return of(err.message);
    }
    return throwError(err);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string=localStorage.getItem('token')
    if(token){
      req=req.clone({
        setHeaders:{
          authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
  }
}
