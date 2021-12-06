import { Component, OnInit } from '@angular/core';
// import { ModelService } from '../assets/services/model.service';
// import { IListInterface } from '../assets/interfaces/list';
// import { ViewService } from '../assets/services/view.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  // public url: string = 'http://localhost:3000/comments/';
  // public list: Array<IListInterface> = [];
  // public counter: string = '';

  constructor(
    // private modelService: ModelService,
    // private viewService: ViewService
  ) {}

  ngOnInit(): void {}

  // public getItemsAndRender(): void {
  //   this.modelService.getAll(this.url).subscribe(
  //     (data) => {
  //       this.list = data;
  //       this.counter = this.viewService.quantityItem(data);
  //     },
  //     (error) => {
  //       console.log(`Get items ERROR: ${error}`);
  //     }
  //   );
  // }

  // public deteteItemBtn(itemId: number): void {
  //   this.modelService.delete(this.url, itemId).subscribe(
  //     () => {
  //       this.getItemsAndRender();
  //     },
  //     (error) => {
  //       console.log(`Detete item ERROR: ${error}`);
  //     }
  //   );
  // }

  // public changeItemBtn(itemId: number, itemStatus: boolean): void {
  //   this.modelService.getOne(this.url, itemId).subscribe(
  //     (data) => {
  //       data.completed = !itemStatus;
  //       this.modelService.update(this.url, data, itemId).subscribe(
  //         () => {
  //           this.getItemsAndRender();
  //         },
  //         (error) => {
  //           console.log(`Update item ERROR: ${error}`);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.log(`Get one item ERROR: ${error}`);
  //     }
  //   );
  // }

  // public addNewItem(newItemTitle: string): void {
  //   let newItem: IListInterface = {
  //     id: Math.floor(Math.random() * 10000),
  //     title: newItemTitle,
  //     completed: false,
  //   };
  //   this.modelService.create(this.url, newItem).subscribe(
  //     () => {
  //       this.getItemsAndRender();
  //     },
  //     (error) => {
  //       console.log(`Create item ERROR: ${error}`);
  //     }
  //   );
  // }
}
