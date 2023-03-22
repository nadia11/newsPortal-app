import { QueryEntity } from '@datorama/akita';
import { NewspaperStore, NewspaperState, newspaperStore } from './newspaper.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewspaperQuery extends QueryEntity<NewspaperState> {

  selectAreNewsPaperLoaded$ = this.select(state => {
    return state.areNewsPaperLoaded;
  });
  constructor(protected override store: NewspaperStore) {

    super(store);
  }

}

export const newspaperQuery = new NewspaperQuery(newspaperStore);
