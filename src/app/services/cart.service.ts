import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart, cartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<cart>({items: []});
  constructor(private _snackBar: MatSnackBar) { }

  addTocart(item : cartItem): void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1; 
    }else{
      items.push(item);
    }

    this.cart.next({items});
    this._snackBar.open('1 articulo agregado al carrito','esta bien',{duration:3000})
    console.log(this.cart.value)
  }

  getTotal(items:Array<cartItem>): number{
    return items.map((item)=> item.price * item.quantity)
    .reduce((prev, current)=> prev + current, 0)
   }
   clearCart():void{
      this.cart.next({items: []})
      this._snackBar.open('El carrito esta limpio', "ok", {duration: 3000})
   }
}
