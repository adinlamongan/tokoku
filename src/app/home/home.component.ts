import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  result: any;
  errorMessage: any;
  suggestionUser: any;
  currentPage = 1;
  totalPage: any;
  userInfo: any;
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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
   
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
    // this.params['nama'] = value;
    // this.productService.getPoducts(this.params).subscribe((res) => {
    //   this.result = res.result;
    // });
    window.location.href = '/product?q='+value;

  }
}
