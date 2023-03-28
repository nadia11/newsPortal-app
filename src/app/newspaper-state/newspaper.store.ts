import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Newspaper } from './newspaper.model';
import { v4 as uuidv4 } from 'uuid';

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
    idKey: '_id'
})

export class NewspaperStore extends EntityStore<NewspaperState> {

  constructor() {
    super(createInitialState());
  }
  override akitaPreAddEntity(newEntity: Newspaper): Newspaper & { _id: string; } {
    return {
      ...newEntity,
      _id: uuidv4(),
    };
  }
  loadNewspaper(newspaper: Newspaper[], areNewsPaperLoaded: boolean) {

    this.set(newspaper);
    this.update(state => ({
      ...state,
      areNewsPaperLoaded
    }));
  }
}

export const newspaperStore = new NewspaperStore();
