import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthTokenResponse } from '../interface/auth-token-response';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCredentials } from '../interface/user-credentials';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login(payload: UserCredentials): Observable<AuthTokenResponse> {

    if (payload.user === 'admin' && payload.password === '123') {
      return of({ token: 'sample-token' });
    }

    return throwError(() => new HttpErrorResponse(
      {
        status: 401,
        statusText: 'Unauthorized',
      }
    ));
  }

  getCurrentUser(token: string): Observable<User> {
    return of({ username: 'admin' });
  }

}
