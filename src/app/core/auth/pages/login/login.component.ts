import { Component, computed } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {

  }
}
