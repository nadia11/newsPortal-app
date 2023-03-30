import { switchMap, filter, map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Newspaper,
  NewspaperQuery,
  NewspaperService,
} from 'src/app/states/newspaper-state';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css'],
})
export class NewspaperComponent implements OnInit {
  newspaper$: Observable<Newspaper[]>;
  listNewsPaperSub: Subscription;
  term: string = '';
  category: string | null;
  activeRoute: string | null;

  search() {
    this.newspaper$ = this.newspaperQuery.selectAll({
      filterBy: [
        (entity) =>
          entity.title.toLocaleLowerCase().includes(this.term.toLowerCase()) ||
          entity.abstract
            .toLocaleLowerCase()
            .includes(this.term.toLowerCase()) ||
          entity.byline.toLocaleLowerCase().includes(this.term.toLowerCase()),
      ],
    });
  }

  constructor(
    private route: ActivatedRoute,
    private newspaperService: NewspaperService,
    private newspaperQuery: NewspaperQuery,
    breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.category = params.get('category');
        this.newspaper$ = this.newspaperQuery.selectAll({
          filterBy: [
            (entity) =>
              entity.section === this.category || this.category == 'Home',
          ],
        });
      },
      (err) => {
        throw new Error('Routing error: ', err);
      }
    );

    //state variable updating operation
    this.listNewsPaperSub = this.newspaperQuery.selectAreNewsPaperLoaded$
      .pipe(
        filter((areNewsPaperLoaded) => !areNewsPaperLoaded),
        switchMap((areNewsPaperLoaded) => {
          return this.newspaperService.getAllCourses();
        })
      )
      .subscribe(
        (result) => {
          console.log(JSON.stringify(result.results));
        },
        (err) => {
          throw new Error('News loading error:', err);
        }
      );
  }
}
