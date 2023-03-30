import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  NewspaperQuery,
  NewspaperService,
} from 'src/app/states/newspaper-state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  tabContent: string;
  categories: string[];
  category: string;

  selectTab(event:any) {
    this.category = event.itemData;
  }

  constructor(
    private newspaperService: NewspaperService,
    private newspaperQuery: NewspaperQuery
  ) {}

  ngOnInit() {
    const newspapers$ = this.newspaperQuery.selectAll().pipe(map((arr) => arr));
    newspapers$.subscribe((item) => {
      this.categories = ['Home'];
      this.categories = this.categories.concat(
        Array.from(new Set(item.map((y) => y.section)))
      );
    });
  }
}
