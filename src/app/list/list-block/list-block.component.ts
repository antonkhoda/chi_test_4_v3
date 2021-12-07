import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IListInterface } from 'src/app/assets/interfaces/list';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss'],
})
export class ListBlockComponent implements OnInit {

  @Input() list: Array<IListInterface> = [];
  @Input() counter: string = '';

  @Output() deteteItem = new EventEmitter<number>();
  @Output() changeItem = new EventEmitter<IListInterface>();

  constructor(){}

  ngOnInit(): void {}

  public deteteItemClick(itemId: number): void{
    this.deteteItem.emit(itemId);
  }

  public changeItemClick(item: IListInterface){
    this.changeItem.emit(item);
  }
}
