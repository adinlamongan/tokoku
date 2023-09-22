import { Component, OnInit, Pipe } from '@angular/core';
import { AdminProductService } from 'src/app/_services/adminproduct.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css'],
})
export class ProductInsertComponent implements OnInit {
  constructor(private adminProductService: AdminProductService) {}

  form: any = {
    nama: '',
    deskripsi: '',
    men: false,
    women: false,
    harga: 0,
    kategori_id: 0,
    weight: 0,
    panjang: 0,
    lebar: 0,
    pl: 0,
    materials: '',
    color1: [
      { Black: false },
      { Blue: false },
      { Grey: false },
      { Purple: false },
      { Red: false },
      { Green: false },
      { White: false },
      { Maroon: false },
    ],
    size1: [{ S: false }, { M: false }, { L: false }, { XL: false }],
    size: [],
    color: [],
  };

  // form: any = {
  //   nama: 'Mini Silver Mesh Watch',
  //   deskripsi:'Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc',
  //   men: true,
  //   women: false,
  //   harga: 1768888,
  //   kategoriId: 1,
  //   weight: 500,
  //   panjang: 132,
  //   lebar: 62,
  //   pl: 101,
  //   materials: '70% cotton',
  //   color: [
  //     { Black: true },
  //     { Blue: false },
  //     { Grey: true },
  //     { Purple: true },
  //     { Red: false },
  //     { Green: true },
  //     { White: true },
  //     { Maroon: false },
  //   ],
  //   size: [{ S: false }, { M: false }, { L: false }, { XL: false }],
  //   image: [],
  // };

  dataPost: any;

  message = '';
  preview = './assets/logo192.png';
  listImage: any = [];
  currentFile?: File;
  progress = 0;
  selectedFiles?: FileList;
  mulitpleImage = new Array();

  ngOnInit(): void {}

  onValueChangeDeskripsi(event: Event): void {
    const value = (event.target as any).value;
    this.form.deskripsi = value;
  }

  removeImage(i: any) {

    for (let index = 0; index < this.listImage.length; index++) {
      if (index == i) {
        this.listImage.splice(index, 1);
      }
    }

    for (let index = 0; index < this.mulitpleImage.length; index++) {
      if (index == i) {
        this.mulitpleImage.splice(index, 1);
      }
    }
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = './assets/logo192.png';

    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      //const file: File | null = this.selectedFiles.item(0);
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.listImage.push(e.target.result);
        };

        this.mulitpleImage.push(this.selectedFiles[i]);
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  saveData(): void {
    this.progress = 0;
    //conver array list object to array list(only key)
    let arrayList: any = [];
    this.form.size1.map((x: any) => {
      if (Object.values(x)[0]) {
        arrayList.push(Object.keys(x)[0]);
      }
    });
    this.form.size = arrayList;

    arrayList = [];
    this.form.color1.map((y: any) => {
      if (Object.values(y)[0]) {
        arrayList.push(Object.keys(y)[0]);
      }
    });

    this.form.color = arrayList;
    // end

    // conver object to form data
    const formData = new FormData();
    Object.keys(this.form).forEach((key) =>
      formData.append(key, this.form[key])
    );
    if (this.selectedFiles) {
      for (let i = 0; i < this.mulitpleImage.length; i++) {
        if (this.mulitpleImage[i]){
          formData.append('image', this.mulitpleImage[i]);
        }
      }
    }
    ///end

    this.adminProductService.insertProduct(formData).subscribe({
      next: (event: any) => {
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progress = Math.round((100 * event.loaded) / event.total);
        // } else if (event instanceof HttpResponse) {
        //   this.message = event.body.message;
        //   this.imageInfos = this.uploadService.getFiles();
        // }
      },
      error: (err: any) => {
        console.log(err);
        this.progress = 0;

        if (err.error && err.error.message) {
          this.message = err.error.message;
        } else {
          this.message = 'Could not upload the image!';
        }

        this.currentFile = undefined;
      },
    });

    this.selectedFiles = undefined;
  }
}
