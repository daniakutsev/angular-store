import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {BasketComponent} from "./components/basket/basket.component";
import {ProductResolver} from "./services/product.resolver";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent, resolve: {data: ProductResolver}},
  {path: 'basket', component: BasketComponent},

  {path: '**', redirectTo: '', component: MainComponent, pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
