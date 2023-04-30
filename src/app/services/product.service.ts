import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addProduct(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/addProduct`, formData);
  }
  getProducts(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/AllProduct`);
  }

  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateProduct/${productId}`, product);
  }
}
