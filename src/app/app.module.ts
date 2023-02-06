import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/UI/header/header.component';
import {FooterComponent} from './components/UI/footer/footer.component';
import {ProductsComponent} from './components/products/products.component';
import {BasketComponent} from './components/basket/basket.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {MainComponent} from './components/main/main.component';
import {DialogBoxComponent} from './components/UI/dialog-box/dialog-box.component';
import {AppRoutingModule} from "./app.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    BasketComponent,
    ProductDetailsComponent,
    MainComponent,
    DialogBoxComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
