import { NewspaperQuery } from '../newspaper-state/newspaper.query';
import { NewspaperService} from '../newspaper-state/newspaper.service';
import { NewspaperState} from '../newspaper-state/newspaper.store';
import { tap, switchMap, filter, map } from 'rxjs/operators';
import { Newspaper} from '../newspaper-state/newspaper.model';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit, OnDestroy{

 
  newspaper$: Observable<Newspaper[]>;
  listNewsPaperSub: Subscription;
  filteredNews: Newspaper[];
  term: string ="";
   categories:any;
  category:string;
  activeRoute:string|null;
  column:number;
  destroyed = new Subject<void>();
  searchTerm = '';
  getScreenWidth: number;
  getScreenHeight: number;
  widthRatio:string;
  heightRatio:string;

  search(){
    this.newspaper$ = this.newspaperQuery.selectAll(
      {filterBy: [
      (entity) => 
          entity.title.toLocaleLowerCase().includes(this.term.toLowerCase())
          ||  entity.abstract.toLocaleLowerCase().includes(this.term.toLowerCase())
          ||  entity.byline.toLocaleLowerCase().includes(this.term.toLowerCase()) ,
    
    ]});
  }

  currentScreenSize: string;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);



  constructor(private route: ActivatedRoute,private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery,breakpointObserver: BreakpointObserver ) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          if(this.currentScreenSize==="XLarge"){this.column=3;}
          if(this.currentScreenSize==="Medium"){this.column=2;}
          if(this.currentScreenSize===("XSmall"||"Small")){this.column=1;}
        }
      }
    },
    err => {throw new Error('Screen Size error', err)},
    );
  
  }

  ngOnInit() {

    this.route.params.subscribe((params) => this.category = params['category'],    err => {throw new Error('Screen Size error', err)},);
    this.route.paramMap.subscribe(params => {

      this.newspaper$ = this.newspaperQuery.selectAll(
        {filterBy: [
        (entity) => 
        entity.section === this.category ||this.category=="Home" ,
      
      ]});
   
    },
    );
    this.listNewsPaperSub = this.newspaperQuery.selectAreNewsPaperLoaded$.pipe(
      filter(areNewsPaperLoaded => !areNewsPaperLoaded),
      switchMap(areNewsPaperLoaded => {
       
          return this.newspaperService.getAllCourses();
        
      })
    ).subscribe(result => {console.log(JSON.stringify(result.results))},
    err => {throw new Error('Screen Size error', err)},
    );
  
    const x = this.newspaperQuery.selectAll().pipe(
      map(arr =>arr)
    );
    x.subscribe(y => {
     this.filteredNews=y;
    },
    
    err => {throw new Error('Screen Size error', err)},)

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

  }



  ngOnDestroy() {
 

    // if (this.deleteCourseSub) {
    //   this.deleteCourseSub.unsubscribe();
    // }

    // if (this.updateCourseSub) {
    //   this.updateCourseSub.unsubscribe();
    // }
  }
}
