import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>();
  sort: string = 'desc'
  itemsShoCount: number = 2


  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdate(newsort: string): void {
    this.sort = newsort;
  }

  onItemUpdate(count: number): void {
    this.itemsShoCount = count;
  }

  onColumnsUpdated(columns: number): void{
    console.log(columns)
    this.columnsCountChange.emit(columns)
  }

}
