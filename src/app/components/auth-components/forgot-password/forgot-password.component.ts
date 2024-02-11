import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  message: string;
  email: string;

  constructor(private http: HttpClient) {}

  resetPassword() {
    const formData = new FormData();
    formData.append('email', this.email);

    this.http.post('/your-server-endpoint/forget-password', formData)
      .subscribe((response: any) => {
        this.message = response.message;
      });
  }
}