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
      return of({ token: this.generateJwtToken() });
    }

    return throwError(() => new HttpErrorResponse(
      {
        status: 401,
        statusText: 'Unauthorized',
      }
    ));
  }

  refreshToken(token: string) {
    return of({ token: this.generateJwtToken() });
  }

  getCurrentUser(token: string): Observable<User> {
    return of({ username: 'admin' });
  }

  private generateJwtToken(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const array = new Uint8Array(20);
    window.crypto.getRandomValues(array);
    return Array.from(array)
      .map((value) => chars[value % chars.length])
      .join('');
  }

}
