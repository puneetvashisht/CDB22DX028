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
  constructor(
    public router: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.productService.getSingleProducts(params.id).subscribe((res: any) => {
        console.log(res);

        this.product = res.product;
      });
    });
  }
}
