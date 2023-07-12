import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit{
  sort ='decs';
  itemCount = 12;

  constructor () {

  }
  ngOnInit(): void {
  }

  onSortSubmit(newSort: string): void{
    this.sort = newSort;
  }

  onItemSubmit(count: number): void{
    this.itemCount = count;
  }
}
