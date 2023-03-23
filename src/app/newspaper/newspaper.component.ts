
import { NewspaperQuery } from './state/newspaper.query';
import { NewspaperService} from './state/newspaper.service';
import { NewspaperState} from './state/newspaper.store';
import { tap, switchMap, filter, map } from 'rxjs/operators';
import { Newspaper} from './state/newspaper.model';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit, OnDestroy, DoCheck{

  listNewsPaperSub: Subscription;
  newspaper$: Observable<Newspaper[]>;
  search : String ="";
  categories:any;
  category:string;
  filteredNews:Newspaper[];
  activeRoute:string|null;

  constructor(private route: ActivatedRoute,private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery ) {
  }

  ngOnInit() {

    this.route.params.subscribe((params) => this.category = params['category']);
    this.route.paramMap.subscribe(params => {
      
      this.newspaper$ = this.newspaperQuery.selectAll({filterBy: [
        (entity) => 
          entity.section === this.category ||this.category=="all"
      ]});
    });
   
  
    const x = this.newspaperQuery.selectAll().pipe(
      map(arr => Array.from(new Set(arr.map(x => x.section))))
    );
    x.subscribe(x => {
     this.categories=x;
    })
   

    this.listNewsPaperSub = this.newspaperQuery.selectAreNewsPaperLoaded$.pipe(
      filter(areNewsPaperLoaded => !areNewsPaperLoaded),
      switchMap(areNewsPaperLoaded => {
       
          return this.newspaperService.getAllCourses();
        
      })
    ).subscribe(result => {});

  }
  ngDoCheck() {
    
    const routeParams = this.route.snapshot.paramMap;
    const nextRoute = routeParams.get('category');
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
    if (this.listNewsPaperSub) {
      this.listNewsPaperSub.unsubscribe();
    }

    // if (this.deleteCourseSub) {
    //   this.deleteCourseSub.unsubscribe();
    // }

    // if (this.updateCourseSub) {
    //   this.updateCourseSub.unsubscribe();
    // }
  }
}
