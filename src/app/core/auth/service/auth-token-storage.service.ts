import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../tokens/local-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenStorageService {

  injectedLocalStorage = inject(LOCAL_STORAGE);
  private readonly TOKEN_KEY = 'auth_token';

  setToken(token: string): void {
    this.injectedLocalStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.injectedLocalStorage.getItem(this.TOKEN_KEY);
  }

  clearToken(): void {
    this.injectedLocalStorage.removeItem(this.TOKEN_KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

}
