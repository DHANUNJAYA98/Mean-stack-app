import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { OrderPizzaComponent } from './orderpizza/orderpizza.component';
import { PizzaBuilderComponent } from './pizza-builder/pizza-builder.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: "homescreen", component: HomescreenComponent },
  { path: "orderpizza", component: OrderPizzaComponent },
  { path: "pizza_builder", component: PizzaBuilderComponent },
  { path: "", redirectTo: "/homescreen", pathMatch: "full" },
  { path: 'cart', component: ShoppingcartComponent }, // Corrected component name
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
