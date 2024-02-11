import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { User } from '../../class/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:6060'; 

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registration`, user);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/login`, credentials);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forgotPassword?email=${email}`);
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password?token=${token}`, { password: newPassword });
  }
}
