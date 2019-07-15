import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-update',
  templateUrl: './pizza-update.component.html',
  styleUrls: ['./pizza-update.component.css']
})
export class PizzaUpdateComponent implements OnInit {

  @Input()
  pizza: any;

  
  constructor(private route:ActivatedRoute, private service:PizzaService) { }
  

  ngOnInit() {
  }
  updatePizza(pizzaId:any, price:any) {
    this.service.updatePizza(pizzaId, price);
  }
}

