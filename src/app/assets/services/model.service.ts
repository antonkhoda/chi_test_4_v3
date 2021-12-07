import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListInterface } from '../interfaces/list';

@Injectable()
export class ModelService {
  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<IListInterface[]> {
    return this.http.get<IListInterface[]>(url);
  }

  getOne(url: string, id: number): Observable<IListInterface> {
    return this.http.get<IListInterface>(`${url}/${id}`);
  }

  update(url: string, item: IListInterface, id: number): Observable<void> {
    return this.http.patch<void>(`${url}/${id}`, item);
  }

  delete(url: string, id: number): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }

  create(url: string, item: IListInterface): Observable<void> {
    return this.http.post<void>(url, item);
  }

}
