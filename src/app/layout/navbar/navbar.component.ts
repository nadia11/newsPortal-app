import { Component, OnInit } from '@angular/core';
import { NewspaperQuery } from '../../newspaper-state/newspaper.query'
import { NewspaperService} from '../../newspaper-state/newspaper.service'
import { Newspaper} from '../../newspaper-state/newspaper.model'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
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
