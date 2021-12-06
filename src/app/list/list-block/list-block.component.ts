import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/assets/services/model.service';
import { IListInterface } from 'src/app/assets/interfaces/list';
import { ViewService } from 'src/app/assets/services/view.service';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss']
})
export class ListBlockComponent implements OnInit {

  public url: string = 'http://localhost:3000/comments/';
  public list: Array<IListInterface> = [];
  public counter: string = '';
  public newItemTitle: string = '';

  constructor(
    private modelService: ModelService,
    private viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.getItemsAndRender();
  }

  public getItemsAndRender(): void {
    this.modelService.getAll(this.url).subscribe(
      (data) => {
        this.list = data;
        this.counter = this.viewService.quantityItem(data);
      },
      (error) => {
        console.log(`Get items ERROR: ${error}`);
      }
    );
  }

  public deteteItemBtn(itemId: number): void {
    this.modelService.delete(this.url, itemId).subscribe(
      () => {
        this.getItemsAndRender();
      },
      (error) => {
        console.log(`Detete item ERROR: ${error}`);
      }
    );
  }

  public changeItemBtn(itemId: number, itemStatus: boolean): void {
    this.modelService.getOne(this.url, itemId).subscribe(
      (data) => {
        data.completed = !itemStatus;
        this.modelService.update(this.url, data, itemId).subscribe(
          () => {
            this.getItemsAndRender();
          },
          (error) => {
            console.log(`Update item ERROR: ${error}`);
          }
        );
      },
      (error) => {
        console.log(`Get one item ERROR: ${error}`);
      }
    );
  }

}
