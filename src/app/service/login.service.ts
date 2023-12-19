import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../model/login';
import { Usuario } from '../model/usuario';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'localhost:8080/usuario/login'; 

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.loginUrl, credentials)
      .pipe(
        catchError((err: any) => {
          console.error('Error en el inicio de sesión:', err);
          return of({} as Usuario);
        })
      );
  }
}

