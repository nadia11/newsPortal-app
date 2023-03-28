import { Component, OnInit, OnDestroy, } from '@angular/core';
import { NewspaperQuery } from './newspaper/state/newspaper.query';
import { NewspaperService} from './newspaper/state/newspaper.service';
import { Newspaper} from './newspaper//state/newspaper.model';
import { Observable, Subscription } from 'rxjs';
import { tap, switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newsPortal-app';
  newspaper$: Observable<Newspaper[]>;
  categories: Set<string> ;
  constructor(private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery){}
  ngOnInit() {
    const x = this.newspaperQuery.selectAll().pipe(
      map(arr =>arr)
    );
    x.subscribe(x => {
     this.categories=(new Set(x.map(y => y.section)));
    })
  }
}
