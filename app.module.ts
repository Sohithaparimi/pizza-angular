import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaUpdateComponent } from './pizza/pizza-update/pizza-update.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PizzaAddtoCartComponent } from './pizza/pizza-addto-cart/pizza-addto-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaAddComponent,
    PizzaGetComponent,
    PizzaDeleteComponent,
    PizzaUpdateComponent,
    PizzaAddtoCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
