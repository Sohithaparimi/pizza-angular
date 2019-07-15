import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { PizzaUpdateComponent } from './pizza/pizza-update/pizza-update.component';
import { PizzaAddtoCartComponent } from './pizza/pizza-addto-cart/pizza-addto-cart.component';



const routes: Routes = [
  
  {path:'pizza/addPizza',component:PizzaAddComponent},
  {path:'pizza/delete/:pizzaId',component:PizzaDeleteComponent},
  {path: 'pizza/allPizza',component :PizzaGetComponent},
  {path: 'pizza/update/:pizzaId/:price',component:PizzaUpdateComponent},
  {path: 'pizza/addtoCart/:pizzaId',component:PizzaAddtoCartComponent}
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
