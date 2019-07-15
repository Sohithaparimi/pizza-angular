import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from 'src/app/pizza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit {
  pizzas:Pizza[]=[];
  selectedPizza: Pizza;
  constructor(private route:ActivatedRoute,
    private service:PizzaService){ }

  ngOnInit(){
    this.service.getPizzas()
    .subscribe(pizzaList=>this.pizzas=pizzaList);
  }
  onSelection(pizza:Pizza){
    this.selectedPizza=pizza;
  }
  addToCart(pizza:Pizza){

    window.alert("Your Pizza is added to cart");
    
    this.service.addToCart(pizza);
  }
}
