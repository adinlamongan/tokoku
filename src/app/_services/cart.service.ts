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
export class CartService {

  private cartQty = 0

  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    return this.http.get(API_URL + `cart`, {
      responseType: 'json',
    });
  }

  inserUpdatetCart(data: any): Observable<HttpEvent<any>> {
    const req = new HttpRequest(
      'POST',
      API_URL + 'cart',
      data,
      {
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }

  getTotalQtyCart(): Observable<any> {
    return this.http.get(API_URL +  'cart/qty', {
      responseType: 'json',
    });
  }

  setCartQty(){
    this.getTotalQtyCart().subscribe((res) => {
      this.cartQty = res.qty
    })
  }

  getCartQty(){
    return this.cartQty;
  }

}
