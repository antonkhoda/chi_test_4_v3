import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  public newItemTitle: string = '';

  @Output() addNewItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public addNewItemClick(): void {
    this.addNewItem.emit(this.newItemTitle);
    this.newItemTitle = '';
  }
}
