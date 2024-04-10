import { Component, OnInit } from '@angular/core';
import { cart, cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {
  cart: cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 100,
      quantity: 1,
      id: 2,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 400,
      quantity: 1,
      id: 3,
    }]
  }

  dataSource: Array<cartItem> = [];

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'Total',
    'action'
  ]
  constructor(private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items:Array<cartItem>): number{
   return this._cartService.getTotal(items);
  }

}
