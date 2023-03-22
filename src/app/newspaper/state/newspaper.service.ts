import { ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewspaperStore, newspaperStore } from './newspaper.store';
@Injectable({ providedIn: 'root' })
export class NewspaperService {

  constructor(private newspaperStore: NewspaperStore, private http: HttpClient) {
  }

}

export const newspaperService = new NewspaperService(newspaperStore);
