import { Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth.service';
import { UserCredentials } from '../../interface/user-credentials';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginService = inject(AuthService);

  form = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const userDetails = this.form.value as UserCredentials;

    this.loginService.login(userDetails).subscribe({
      next: (token) => {
        console.log(token);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
