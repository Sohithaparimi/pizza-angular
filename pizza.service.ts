import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza/pizza';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  uri='http://localhost:4000/pizza';
  pizzas:Pizza[];
  constructor(public httpClient:HttpClient) { }
   getPizzas():Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/allPizza');
   
  }
  getPizzaById(pizzaId:any):Observable<Pizza> {
    return this.httpClient.get<Pizza>(`${this.uri}`+'/'+pizzaId);
   
  }
  public addToCart(pizza){
    this.pizzas.push(pizza);
    console.log(this.pizzas)
  }
  getCartPizzas(){
    console.log("Message"+this.pizzas);
    return this.pizzas;
  }
  addPizza(id:any,name:any,price:any){
    let pizza={
        pizzaId:id,
        pizzaName:name,
        price:price
    };
    
    return this.httpClient.post(`${this.uri}`+'/addPizza',pizza)
    .subscribe(res=>console.log("New Pizza added successfully "));
  }
  deletePizza(pizzaId:number)
  {
      return this.httpClient.delete(`${this.uri}`+'/delete/'+pizzaId)
      .subscribe(res=>console.log("Pizza deleted Successfully"));
  }
  updatePizza(pizzaId,price):any{
    return this.httpClient.put(`${this.uri}`+'/update/'+pizzaId+'/'+price,{})
    .subscribe(res=>console.log(pizzaId + "update from database "));
}
}