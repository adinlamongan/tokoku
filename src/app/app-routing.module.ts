import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductInsertComponent } from './admin/product-insert/product-insert.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { loginPageGuard } from './shared/login_page.guard';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    //canActivate: [loginPageGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    //canActivate: [loginPageGuard],
    component: RegisterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    component: CartComponent,
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin/product/list',
    component: ProductListComponent,
  },
  {
    path: 'admin/product/insert',
    component: ProductInsertComponent,
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
