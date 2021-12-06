import { Injectable } from '@angular/core';
import { IListInterface } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  public quantityItem(arr: Array<IListInterface>): string {
    if (!arr.length) {
      return "";
    }

    let quantity = 0;

    arr.forEach(element => {
      if(!element.completed){
        quantity++;
      }
    });
  
    if (quantity === 1) {
      return `${quantity} item left`;
    }
  
    return `${quantity} items left`; 
  }
}
