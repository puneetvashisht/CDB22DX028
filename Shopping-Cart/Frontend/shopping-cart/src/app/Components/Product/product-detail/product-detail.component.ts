import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any = { name: '', description: '', price: 0 };
  id: any;
  constructor(
    public router: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.id = params.id;
      this.productService.getSingleProducts(params.id).subscribe((res: any) => {
        console.log(res);

        this.product = res.product;
      });
    });
  }

  addProduct() {
    console.log('Add to cart called');

    this.productService.addToCart(this.id).subscribe((res) => {
      console.log('Added To Cart', res);
    });
  }
}
