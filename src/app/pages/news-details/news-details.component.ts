import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
  Newspaper,
  NewspaperQuery,
  NewspaperService,
} from 'src/app/states/newspaper-state';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent implements OnInit {
  newspaper$: Observable<Newspaper[]>;
  news$: Observable<Newspaper | undefined>;
  constructor(
    private route: ActivatedRoute,
    private newspaperService: NewspaperService,
    private newspaperQuery: NewspaperQuery
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.route.paramMap.subscribe((params) => {
      this.newspaper$ = this.newspaperQuery.selectAll({
        limitTo: 5,
        filterBy: [(entity) => entity._id != params.get('newsId')],
      });
      let newsId = params.get('newsId');
      this.news$ = this.newspaperQuery.selectEntity(newsId);
    });
  }
}
