import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getPoducts(params: any): Observable<any> {
    let param = '';
    for (const key in params) {
      if (params[key] !== '') {
        param += `${key}=${params[key]}&`;
      }
    }
    param = param.slice(0, -1);
    return this.http.get(API_URL + `product?${param}`, {
      responseType: 'json',
    });
  }

  getProductDetail(param: any): Observable<any> {
    return this.http.get(API_URL + `product/${param}`, {
      responseType: 'json',
    });
  }

  insertProduct(data: any): Observable<HttpEvent<any>> {

    const req = new HttpRequest(
      'POST',
      'http://localhost:8080/api/product',
      data,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }
}
