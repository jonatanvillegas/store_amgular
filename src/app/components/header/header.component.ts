import { Component, Input, OnInit } from '@angular/core';
import { cart, cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html' ,
  styles: [
  ]
})
export class HeaderComponent  {
  private _cart: cart = {items:[]}
  itemsQuantity = 0;
  constructor(private _cartService:CartService) { }

  @Input()
  get cart(): cart {
    return this._cart
  }
  set cart(cart: cart){
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item)=> item.quantity)
      .reduce((prev, current)=> prev+current, 0);
  }
  getTotal(items: Array<cartItem>): number{
return this._cartService.getTotal(items);
  }

  onclearCart(){
    this._cartService.clearCart()
  }
}
