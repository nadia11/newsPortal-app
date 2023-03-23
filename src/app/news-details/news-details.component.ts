import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Newspaper } from '../newspaper/state/newspaper.model';

import { Observable, Subscription } from 'rxjs';
import { NewspaperQuery } from '../newspaper/state/newspaper.query';
import { NewspaperService} from '../newspaper/state/newspaper.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  newspaper$: Observable<Newspaper[]>;
  news: Newspaper | undefined;
  constructor(private route: ActivatedRoute, private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery) { }

  ngOnInit() {
    // First get the product id from the current route.
    this.newspaper$ = this.newspaperQuery.selectAll();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('newsId');
   this.newspaper$.subscribe(x=> this.news = x.find(item => item._id === productIdFromRoute));
    
  }
  

}
