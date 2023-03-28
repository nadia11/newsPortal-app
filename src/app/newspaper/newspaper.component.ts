
import { NewspaperQuery } from './state/newspaper.query';
import { NewspaperService} from './state/newspaper.service';
import { NewspaperState} from './state/newspaper.store';
import { tap, switchMap, filter, map } from 'rxjs/operators';
import { Newspaper} from './state/newspaper.model';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit, OnDestroy{

 
  newspaper$: Observable<Newspaper[]>;
  listNewsPaperSub: Subscription;
  filteredNews: Newspaper[];
  term!: string;
   categories:any;
  category:string;
  activeRoute:string|null;
  column:number;
  destroyed = new Subject<void>();
  searchTerm = '';
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
          this.column=(this.currentScreenSize==="XSmall")?1:4;
        }
      }
    });
  
  }

  ngOnInit() {

    this.route.params.subscribe((params) => this.category = params['category']);
    this.route.paramMap.subscribe(params => {

      this.newspaper$ = this.newspaperQuery.selectAll(
        {filterBy: [
        (entity) => 
          entity.section === this.category ||this.category=="all"
      ]});
   
    });
    this.listNewsPaperSub = this.newspaperQuery.selectAreNewsPaperLoaded$.pipe(
      filter(areNewsPaperLoaded => !areNewsPaperLoaded),
      switchMap(areNewsPaperLoaded => {
       
          return this.newspaperService.getAllCourses();
        
      })
    ).subscribe(result => {console.log(JSON.stringify(result.results))});
  
    const x = this.newspaperQuery.selectAll().pipe(
      map(arr =>arr)
    );
    x.subscribe(y => {
     this.filteredNews=y;
    })
    // this.newspaper$.subscribe(v=>console.log(v))
    // const x = this.newspaperQuery.selectAll().pipe(
    //   map(arr => Array.from(new Set(arr.map(x => x.section))))
     
    // );
    // x.subscribe(x => {
    //  this.categories=x;
    // })


  }


  // deleteCourse(courseId: string) {
  //   this.deleteCourseSub = this.courseService.deleteCourse(courseId).subscribe(result => {
  //     console.log(result);
  //   });
  // }

  // showUpdateForm(course: Course) {
  //   this.courseToBeUpdated = {...course};
  //   this.isUpdateActivated = true;
  // }

  // updateCourse(updateForm) {
  //   this.updateCourseSub = this.courseService.updateCourse(
  //     this.courseToBeUpdated.id, updateForm.value).subscribe(result => console.log(result)
  //   );
  //   this.isUpdateActivated = false;
  //   this.courseToBeUpdated = null;
  // }

  ngOnDestroy() {
 

    // if (this.deleteCourseSub) {
    //   this.deleteCourseSub.unsubscribe();
    // }

    // if (this.updateCourseSub) {
    //   this.updateCourseSub.unsubscribe();
    // }
  }
}
