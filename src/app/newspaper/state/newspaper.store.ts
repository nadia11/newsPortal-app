import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Newspaper } from './newspaper.model';

export interface NewspaperState extends EntityState<Newspaper> {}

@StoreConfig({
  name: 'newspaper',
  idKey: '_id'
})
export class NewspaperStore extends EntityStore<NewspaperState> {

  constructor() {
    super();
  }

}

export const newspaperStore = new NewspaperStore();
