import {Injectable} from "@angular/core";
import {IProduct} from "./products.interface";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, EMPTY, Observable} from "rxjs";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private ProductsService: ProductsService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {

    // @ts-ignore
    return this.ProductsService.getAllProducts(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    )
  }
}
