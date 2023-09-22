import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    this.loadExternalScript('../../../assets/cozastore-master/vendor/jquery/jquery-3.2.1.min.js');
    this.loadExternalScript('../../../assets/cozastore-master/vendor/bootstrap/js/popper.js');
    this.loadExternalScript('../../../assets/cozastore-master/vendor/bootstrap/js/bootstrap.min.js');
    this.loadExternalScript('../../../assets/feather.min.js');
  }
  loadExternalScript(src: string): any {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.text = ``;
    s.defer = true;
    s.async = false;
    this.renderer2.appendChild(this._document.body, s);
  }
}

