import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IListInterface } from 'src/app/assets/interfaces/list';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss'],
})
export class ListBlockComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}

  @Input()
  list: Array<IListInterface> = [];
  
  @Input()
  counter: string = '';

  @Output()
  deteteItem = new EventEmitter();

  deteteItemClick(itemId: number): void{
    this.deteteItem.emit(itemId);
  }

  @Output()
  changeItem = new EventEmitter();

  changeItemClick(item: IListInterface){
    this.changeItem.emit(item);
  }
}
