import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  onColumnsChange(colsNum: number): void {
    console.log(colsNum)
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: product):void{
    this.cartService.addTocart({
      product: product.image,
      name: product.title,
      price:  product.price,
      quantity: 1,
      id: product.id
    })
  }
}
