import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductContainerComponent } from './Components/Product/product-container/product-container.component';
import { ProductDetailComponent } from './Components/Product/product-detail/product-detail.component';
import { ProductsComponent } from './Components/Product/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductContainerComponent,
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
