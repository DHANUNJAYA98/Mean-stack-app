import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderPizzaComponent } from './orderpizza/orderpizza.component';
import { SliceByTwoPipe } from './slice-by-two.pipe';
import { PizzaBuilderComponent } from './pizza-builder/pizza-builder.component';
import { FormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPizzaComponent,
    SliceByTwoPipe,
    PizzaBuilderComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
