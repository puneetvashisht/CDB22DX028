import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/Product/products/products.component';
import { ProductDetailComponent } from './Components/Product/product-detail/product-detail.component';
import { ProductContainerComponent } from './Components/Product/product-container/product-container.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthInterceptor } from './Services/auth.interceptor';
import { CartComponent } from './Components/cart/cart.component';
import { AuthGuard } from './Services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductContainerComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
