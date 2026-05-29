import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LoginFacadeService } from '../../facades/login-facade.service';
import { UserCredentials } from '../../interface/user-credentials';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  loginFacadeService = inject(LoginFacadeService);
  router = inject(Router);

  form = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const userDetails = this.form.value as UserCredentials;

    this.loginFacadeService.login(userDetails).subscribe({
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
