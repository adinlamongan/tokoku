import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CartService } from '../_services/cart.service';
import Swal from 'sweetalert2';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  search: any;
  result: any;

  color: any;
  size: any;
  productId: any;
  qty = 1;
  errorMessage: any;

  @ViewChild('color') elColor!: ElementRef;
  @ViewChild('size') elSize!: ElementRef;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private _router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductDetail(this.productId).subscribe((res) => {
      this.result = res;
    });
  }

  addToChart() {
    if (this.storageService.isLoggedIn()) {
      this.color = this.elColor.nativeElement.value;
      this.size = this.elSize.nativeElement.value;
      if (this.color.length == 0 || this.size.length == 0) {
        Swal.fire('Info!', 'Pilih size dan warna produk dulu', 'info');
      } else {
        let data = {
          product_id: this.productId,
          size: this.size,
          color: this.color,
          qty: this.qty,
        };
        this.cartService.inserUpdatetCart(data).subscribe({
          next: (data) => {
            Swal.fire(
              'Info!',
              'Produk berhasil ditambakan di chart',
              'success'
            );
            this.cartService.setCartQty();
          },
          error: (err) => {
            
            Swal.fire('Info!', err.error.message, 'error');
          },
        });
      }
    } else {
      Swal.fire('Info!', 'Belum login.', 'info');
      this._router.navigate(['/login']);
    }
  }

  onIncrementQy() {
    this.qty = this.qty + 1;
  }

  onDecrementQy() {
    if (this.qty > 1) {
      this.qty = this.qty - 1;
    }
  }
}
