import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    this.loadExternalScript('../../assets/cozastore-master/vendor/jquery/jquery-3.2.1.min.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/animsition/js/animsition.min.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/bootstrap/js/popper.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/bootstrap/js/bootstrap.min.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/select2/select2.min.js');
    //this.loadExternalScript('../../assets/cozastore-master/vendor/daterangepicker/moment.min.js');
    //this.loadExternalScript('../../assets/cozastore-master/vendor/daterangepicker/daterangepicker.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/slick/slick.min.js');
    this.loadExternalScript('../../assets/cozastore-master/js/slick-custom.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/parallax100/parallax100.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/MagnificPopup/jquery.magnific-popup.min.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/isotope/isotope.pkgd.min.js');
    //this.loadExternalScript('../../assets/cozastore-master/vendor/sweetalert/sweetalert.min.js');
    this.loadExternalScript('../../assets/cozastore-master/vendor/perfect-scrollbar/perfect-scrollbar.min.js');
    this.loadExternalScript('../../assets/custom.js');
    this.loadExternalScript('../../assets/cozastore-master/js/main.js');
  }

  loadExternalScript(src: string): any {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.text = ``;
    s.defer = true;
    s.async =false;
    this.renderer2.appendChild(this._document.body, s);
  }
}
