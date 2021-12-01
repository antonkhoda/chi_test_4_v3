import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/services/model.service';
import { IListInterface } from '../shared/interfaces/list';
import { ViewService } from '../shared/services/view.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public url: string = 'http://localhost:3000/comments';
  public list: Array<IListInterface> = [];
  public counter: string = '';
  public newItemTitle: string = '';

  constructor(private _modelService: ModelService, private _viewService: ViewService) {}

  ngOnInit() :void {
    this.getItemsAndRender();
  }

  getItemsAndRender () :void {
    this._modelService.getItems(this.url)
      .then((json: Array<IListInterface>) => {
        this.list = json;
        this.counter = this._viewService.quantityItem(json);
      });
  }

  deteteItemBtn (event :any ) :void {
    this._modelService.deteteItem(this.url, event.target.getAttribute("data-id"))
      .then(() :void => {
        this.getItemsAndRender();
      });
  }

  changeItemBtn (event :any ) :void {
    this._modelService.changeItem(this.url, event.target.getAttribute("data-id"), event.target.checked)
      .then(() :void => {
        this.getItemsAndRender();
      });
  }

  addNewItem () :void {
    this._modelService.addItem(this.url, this.newItemTitle)
      .then(() :void => {
        this.getItemsAndRender();
      });
    this.newItemTitle = '';
  }
}
