import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  result: any;
  errorMessage: any;
  suggestionUser: any;
  currentPage = 1;
  totalPage: any;
  userInfo: any;
  q!: string;
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

  sortBy: any = {
    default: true,
    popularity: false,
    averageRating: false,
    newness: false,
    priceLowToHigh: false,
    priceHighToLow: false,
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.q = params['q'];
    });

    if (this.q) {
      this.params['nama'] = this.q;
    }
    this.productService.getPoducts(this.params).subscribe((res) => {
      this.result = res.result;
      this.totalPage = res.total_pages;
    });
  }

  getMoreProduct() {
    this.params['pages'] = this.params['pages'] + 1;
    this.productService.getPoducts(this.params).subscribe((res) => {
      for (let index = 0; index < res.result.length; index++) {
        this.result.push(res.result[index]);
      }
    });
  }

  searchProduct(value: any) {
    this.params['nama'] = value;
    this.productService.getPoducts(this.params).subscribe((res) => {
      this.result = res.result;
    });
  }

  sortProduct(value: any) {}
}
