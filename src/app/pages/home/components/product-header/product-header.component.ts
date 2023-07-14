import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit{
  @Output() columnCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort ='decs';
  itemCount = 12;

  constructor () {

  }
  ngOnInit(): void {
  }

  onSortSubmit(newSort: string): void{
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemSubmit(count: number): void{
    this.itemCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnUpdated(colsNum: number): void{
    this.columnCountChange.emit(colsNum);
  }
}
