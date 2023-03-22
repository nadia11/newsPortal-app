import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Newspaper } from './newspaper.model';

export interface NewspaperState extends EntityState<Newspaper> {
  areNewsPaperLoaded: boolean;
}
export function createInitialState(): NewspaperState {
  return {
    areNewsPaperLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({
  name: 'newspaper',
    idKey: 'title'
})
export class NewspaperStore extends EntityStore<NewspaperState> {

  constructor() {
    super(createInitialState());
  }
  loadNewspaper(newspaper: Newspaper[], areNewsPaperLoaded: boolean) {

    this.set(newspaper);
        debugger;
    this.update(state => ({
      ...state,
      areNewsPaperLoaded
    }));
  }
}

export const newspaperStore = new NewspaperStore();
