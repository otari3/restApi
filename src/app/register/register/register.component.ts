import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userInfo: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  register() {}
}
