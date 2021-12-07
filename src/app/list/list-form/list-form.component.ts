import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  public newItemTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  @Output()
  addNewItem = new EventEmitter();

  public addNewItemClick(): void {
    this.addNewItem.emit(this.newItemTitle);
    this.newItemTitle = '';
  }
}
