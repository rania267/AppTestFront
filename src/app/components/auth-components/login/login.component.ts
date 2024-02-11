import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;
  message: string | null = null;

  csrf: { parameterName: string; token: string } = { parameterName: '', token: '' };
  contextPath: string = '';

  constructor(private authService: AuthService,    private router: Router,
    ) {}

  ngOnInit(): void {}
  login(): void {
    const credentials = { username: this.username, password: this.password };

    this.authService.loginUser(credentials).subscribe(
      (response: any) => {
        console.log('Login successful');
        
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        this.error = error.error;
        console.error('Login failed', error);
      }
    );
  }
}
