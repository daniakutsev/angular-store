import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./products.interface";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: "root"
})
export class ProductsService {


  url: string = 'http://localhost:3000/products'
  urlBasket: string = 'http://localhost:3000/basket'

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<IProduct[]>(this.url)
  }

  getProductById(id: number) {
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }

  createProduct(product: IProduct) {
    return this.http.post<IProduct>(this.url, product)
  }

  removeProduct(id: number) {
    return this.http.delete<IProduct>(`${this.url}/${id}`)
  }

  updateProduct(product: IProduct) {
    return this.http.put<IProduct>(`${this.url}/${product.id}`, product)
  }

  addToBasket(product: IProduct) {
    return this.http.post<IProduct>(this.urlBasket, product)
  }

  getBasket() {
    return this.http.get<IProduct[]>(this.urlBasket)
  }

  removeBasket(id: number) {
    return this.http.delete<IProduct>(`${this.urlBasket}/${id}`)
  }
}
