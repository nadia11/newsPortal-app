import { QueryEntity } from '@datorama/akita';
import {
  NewspaperStore,
  NewspaperState,
  newspaperStore,
} from './newspaper.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewspaperQuery extends QueryEntity<NewspaperState> {
  constructor(protected override store: NewspaperStore) {
    super(store);
  }

  selectAreNewsPaperLoaded$ = this.select((state) => {
    return state.areNewsPaperLoaded;
  });
}

export const newspaperQuery = new NewspaperQuery(newspaperStore);
