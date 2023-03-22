import { QueryEntity } from '@datorama/akita';
import { NewspaperStore, NewspaperState, newspaperStore } from './newspaper.store';

export class NewspaperQuery extends QueryEntity<NewspaperState> {

  constructor(protected override store: NewspaperStore) {
    super(store);
  }

}

export const newspaperQuery = new NewspaperQuery(newspaperStore);
