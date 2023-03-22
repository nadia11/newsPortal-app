
import { NewspaperQuery } from './state/newspaper.query';
import { NewspaperService} from './state/newspaper.service';
import { NewspaperState} from './state/newspaper.store';
import { tap, switchMap, filter } from 'rxjs/operators';
import { Newspaper} from './state/newspaper.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit, OnDestroy{
  //courseToBeUpdated: Newspaper;

  // isUpdateActivated = false;

  listNewsPaperSub: Subscription;

  // deleteCourseSub: Subscription;

  // updateCourseSub: Subscription;

 // cstate: NewspaperState;

  newspaper$: Observable<Newspaper[]>;

  constructor(private newspaperService: NewspaperService, private newspaperQuery: NewspaperQuery ) {
  }

  ngOnInit() {
    this.newspaper$ = this.newspaperQuery.selectAll();

    this.listNewsPaperSub = this.newspaperQuery.selectAreNewsPaperLoaded$.pipe(
      filter(areNewsPaperLoaded => !areNewsPaperLoaded),
      switchMap(areNewsPaperLoaded => {
       
          return this.newspaperService.getAllCourses();
        
      })
    ).subscribe(result => {console.log(JSON.stringify(result.results))});
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
