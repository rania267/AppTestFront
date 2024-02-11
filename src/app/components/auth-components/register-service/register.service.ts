import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080'; 

  resetPassword(email: string) {
    const formData = new FormData();
    formData.append('email', email);

    return this.httpClient.post('/your-server-endpoint/forget-password', formData);
  }

  constructor(private httpClient: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.httpClient.post(url, user);
  }
}
