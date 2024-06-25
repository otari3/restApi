import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpMethodsService } from '../../shared/http-methods.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private http: HttpMethodsService) {}
  userInfo: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  register() {
    this.http
      .signup({
        email: this.userInfo.get('email')?.value,
        name: this.userInfo.get('userName')?.value,
        password: this.userInfo.get('password')?.value,
      })
      .subscribe(() => {
        alert('succses');
      });
  }
}
