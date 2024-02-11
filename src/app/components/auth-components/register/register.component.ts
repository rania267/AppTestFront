import { Component } from '@angular/core';
import { RegisterService } from '../register-service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private userService: RegisterService) { }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }

}
