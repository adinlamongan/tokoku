import { Component, OnInit, Output } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { CartService } from '../_services/cart.service';
import { CartWishlist } from '../model/cart-wishlist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  ttlQty :any;
  constructor(
    private storageService: StorageService,
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLogin = true;
      this.cartService.setCartQty();
    }
  }
  
  logout(): void {
    this.storageService.clean();
    window.location.href = '/login';
  }
  
}
