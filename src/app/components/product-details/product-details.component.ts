import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../services/products.interface";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct
  pSub: Subscription

  constructor(private route: ActivatedRoute,
              private productService: ProductsService
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.pSub = this.productService.getProductById(this.route.url.value['1'].path)
      .subscribe((response) => {

        this.product = response
        console.log(this.product)
      })
  }

}
