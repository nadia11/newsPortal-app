import { Component, OnInit } from '@angular/core';
import { NewspaperQuery } from '../../newspaper-state/newspaper.query'
import { NewspaperService} from '../../newspaper-state/newspaper.service'
import { Newspaper} from '../../newspaper-state/newspaper.model'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

 
  tabContent: string;
  categories: string[];
  category: string;

  selectTab(e:any) {debugger;
    console.log(e);
    this.category = e.itemData;
  }

  constructor(private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery){}

  ngOnInit() {
    const newspapers$ = this.newspaperQuery.selectAll().pipe(
      map(arr =>arr)
    );
    newspapers$.subscribe(item => {
      this.categories=["Home"];
      this.categories=this.categories.concat(Array.from(new Set(item.map(y => y.section))));
      console.log(this.categories);
     
    })
  }

}
