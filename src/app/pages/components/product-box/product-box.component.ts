import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {

  @Input() fullwidthMode: boolean = false;

  product: product | undefined = {
    id:1,
    title: 'snickers',
    price:150,
    category: 'sport',
    description: 'news',
    image: 'https://via.placeholder.com/150',
  }
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }

}
