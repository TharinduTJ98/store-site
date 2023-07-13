import { Component, OnInit } from '@angular/core';

const ROW_HEIGHT: { [id:number]:number } = {1:400, 3: 335, 4: 300}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cols = 3;
  category:string | undefined;
  rowHeight = ROW_HEIGHT[this.cols];

  constructor (){

  }

  ngOnInit(): void {

  }

  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];

  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
