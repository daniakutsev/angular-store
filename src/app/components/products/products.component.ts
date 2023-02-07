import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../services/products.interface";
import { Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../UI/dialog-box/dialog-box.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductsService,
              public dialog: MatDialog) {
  }

  bSub: Subscription
  basket: IProduct[]

  products: IProduct[]
  pSub: Subscription

  ngOnInit(): void {
    this.pSub = this.productService.getAllProducts()
      .subscribe((response) => {
        this.products = response
      })

    this.bSub = this.productService.getBasket()
      .subscribe((response) => {
        this.basket = response
      })
  }

  addToBasket(product: IProduct) {
    this.bSub = this.productService.addToBasket(product)
      .subscribe((response) => {
        this.basket.push(response)
      },()=>{
          console.error('item already added')
      })
  }

  openDialog(product?: IProduct): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      disableClose: true,
      data: product
    })
    dialogRef.afterClosed().subscribe((data) => {
      if (data && data.id)
        this.updateProduct(data)
      else if (data) {
        this.createProduct(data)
      }
    })
  }

  createProduct(data: IProduct) {
    this.productService.createProduct(data)
      .subscribe((data) => {
        this.products.push(data)
      })
  }

  ngOnDestroy(): void {
    if (this.pSub) this.pSub.unsubscribe()
  }

  deleteProduct(id: any) {
    this.productService.removeProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(p => p.id !== id)
      })
  }

  updateProduct(product: IProduct) {
    this.productService.updateProduct(product)
      .subscribe((data) => {
        this.products = this.products.map((product) => {
            if (product.id === data.id) {
              return data
            } else {
              return product
            }
          }
        )
      })
  }

}
