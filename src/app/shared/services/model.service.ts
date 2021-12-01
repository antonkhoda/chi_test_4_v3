import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  getItems(url :string) :any {
    return fetch(url)
      .then((response) => response.json());
  }

  deteteItem(url :string, itemId :number) :any {
    return fetch(url + "/" + itemId, {
      method: "DELETE",
    })
  }

  changeItem(url :string, itemId :number, itemCompletedStatus :boolean) :any {
    return fetch(url + "/" + itemId, {
        method: "PATCH",
        body: JSON.stringify({
          completed: itemCompletedStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .catch((error) => {
        alert("ERROR: " + error);
      });
  }

  addItem(url :string, itemTitle :string) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title: itemTitle,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .catch((error) => {
        alert("ERROR: " + error);
      });
  }
}
