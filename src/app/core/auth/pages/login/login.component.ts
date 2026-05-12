import { Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth.service';
import { UserCredentials } from '../../interface/user-credentials';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthTokenStorageService } from '../../service/auth-token-storage.service';
import { LoggedInUserStoreService } from '../../stores/logged-in-user-store.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginService = inject(AuthService);
  router = inject(Router);
  authTokenStorage = inject(AuthTokenStorageService);
  loggedInUserStore = inject(LoggedInUserStoreService);

  form = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const userDetails = this.form.value as UserCredentials;

    this.loginService.login(userDetails).pipe(
      tap((token) => this.authTokenStorage.setToken(token.token)),
      switchMap((token) => this.loginService.getCurrentUser(token.token)),
      tap((user) => this.loggedInUserStore.setUser(user))
    ).subscribe({
      next: (user) => {
        this.router.navigate(['/']);
      },
      error: (response: HttpErrorResponse) => {
        if (response.status === 401) {
          this.form.setErrors({ invalidCredentials: true });
        }
      }
    });
  }
}
