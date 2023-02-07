import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";
import {IProduct} from "../../services/products.interface";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductsService) {
  }

  bSub: Subscription
  basket: IProduct[]

  ngOnInit(): void {
    this.bSub = this.productService.getBasket()
      .subscribe(response => {
        console.log(this.basket)
        this.basket = response
      })
  }

  ngOnDestroy(): void {
    if (this.bSub) this.bSub.unsubscribe()
  }

  removeBasket(id: number) {
    this.productService.removeBasket(id).subscribe(() => {
      this.basket = this.basket.filter(b => b.id !== id)
    })
  }
}
