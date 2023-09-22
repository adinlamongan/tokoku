import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';


@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  constructor(private http: HttpClient) {}

  
  insertProduct(data: FormData): Observable<HttpEvent<any>> {
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
