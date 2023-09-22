import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  result: any = [];
  totalHarga = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart().subscribe((res) => {
      this.result = res;
      this.result.forEach((e: any) => {
        this.totalHarga += e.total;
      });
    });
  }
  

  onIncrementQy(i: any) {
    let data = this.result[i]
    if(data.qty < data.stock){
      data.qty = data.qty + 1;
      data.total = data.qty * data.harga;
    }

  }

  onDecrementQy(i: any) {
    let data = this.result[i]
    if(data.qty > 0){
      data.qty = data.qty - 1;
      data.total = data.qty * data.harga
    }
  }

  onUpdateChart(){
    this.result.forEach((e: any) => {
      this.totalHarga += e.total;
    });
  }
}
