import { Component, OnInit } from '@angular/core';
import { ModelService } from '../assets/services/model.service';
import { ViewService } from '../assets/services/view.service';
import { IListInterface } from '../assets/interfaces/list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public url: string = 'http://localhost:3000/comments/';
  public listElements: Array<IListInterface> = [];
  public counterInfo: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private modelService: ModelService,
    private viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.getItemsAndRender();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getItemsAndRender(): void {
    this.subscriptions.add(
      this.modelService.getAll(this.url).subscribe(
        (data) => {
          this.listElements = data;
          this.counterInfo = this.viewService.quantityItem(data);
        },
        (error) => {
          console.log(`Get items ERROR: ${error}`);
        }
      )
    );
  }

  public deteteItem(itemId: number): void {
    this.subscriptions.add(
      this.modelService.delete(this.url, itemId).subscribe(
        () => {
          this.getItemsAndRender();
        },
        (error) => {
          console.log(`Detete item ERROR: ${error}`);
        }
      )
    );
  }

  public changeItem(item: IListInterface): void {
    this.subscriptions.add(
      this.modelService.getOne(this.url, item.id).subscribe(
        (data) => {
          data.completed = !item.completed;
          this.subscriptions.add(
            this.modelService.update(this.url, data, item.id).subscribe(
              () => {
                this.getItemsAndRender();
              },
              (error) => {
                console.log(`Update item ERROR: ${error}`);
              }
            )
          );
        },
        (error) => {
          console.log(`Get one item ERROR: ${error}`);
        }
      )
    );
  }

  public addNewItem(newItemTitle: string): void {
    let newItem: IListInterface = {
      id: Math.floor(Math.random() * 10000),
      title: newItemTitle,
      completed: false,
    };

    this.subscriptions.add(
      this.modelService.create(this.url, newItem).subscribe(
        () => {
          this.getItemsAndRender();
        },
        (error) => {
          console.log(`Create item ERROR: ${error}`);
        }
      )
    );
  }
}
