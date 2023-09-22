import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductInsertComponent } from './admin/product-insert/product-insert.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    WishlistComponent,
    NotFoundComponent,
    DashboardComponent,
    ProductInsertComponent,
    ProductEditComponent,
    SidebarComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
