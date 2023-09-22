import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  currentPage = 2;
  totalPage: any;
  buttonArray = new Array();

  params: any = {
    pages: 1,
    limit: 3,
    sortBy: 'nama',
    direction: 'asc',
    nama: '',
    harga_awal: 0,
    harga_akhir: 0,
    warna: '',
  };

  result: any;

  ngOnInit(): void {
    this.getProduct(1);
  }

  getProduct(page: any) {
    this.params.pages = page;
    this.productService.getPoducts(this.params).subscribe((res) => {
      this.result = res.result;
      this.totalPage = res.total_pages;
      this.buttonArray = new Array();
      this.paginate();
    });
  }

  searchProduct(event: Event): void {
    const value = (event.target as any).value;
    this.params.pages =1;
    this.params.nama = value;
    this.productService.getPoducts(this.params).subscribe((res) => {
      this.result = res.result;
      this.totalPage = res.total_pages;
      this.buttonArray = new Array();
      this.paginate();
    });
  }

  paginate() {
    if (this.totalPage <= 5) {
      for (let index = 1; index <= this.totalPage; index++) {
        this.buttonArray.push(index);
      }
    } else {
      let interval = 2;
      let intervalBawah = 2;
      if (this.params.pages > intervalBawah) {
        let a = this.totalPage - this.params.pages;
        if (a < 3) {
          intervalBawah = intervalBawah - a + interval;
        }
        let i = this.params.pages - intervalBawah;
        for (let index = 1; index <= 5; index++) {
          this.buttonArray.push(i++);
        }
      } else {
        for (let index = 1; index <= 5; index++) {
          this.buttonArray.push(index);
        }
      }
    }
  }
}
