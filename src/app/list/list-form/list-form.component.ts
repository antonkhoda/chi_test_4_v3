import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/assets/services/model.service';
import { IListInterface } from 'src/app/assets/interfaces/list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  public url: string = 'http://localhost:3000/comments/';
  public newItemTitle: string = '';

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {}

  public addNewItem(): void {
    let newItem: IListInterface = {
      id: Math.floor(Math.random() * 10000),
      title: this.newItemTitle,
      completed: false,
    };
    this.modelService.create(this.url, newItem).subscribe(
      () => {
        this.newItemTitle = '';
      },
      (error) => {
        console.log(`Create item ERROR: ${error}`);
      }
    );
  }
}
