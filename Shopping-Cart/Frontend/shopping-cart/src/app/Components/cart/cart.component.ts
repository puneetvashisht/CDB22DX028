import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userProducts: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCartProducts().subscribe((res) => {
      console.log(res);
      this.userProducts = res;
    });
  }
}
