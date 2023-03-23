import { ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { NewspaperStore, newspaperStore,NewspaperState } from './newspaper.store';
import { EntityStore, EntityState } from '@datorama/akita';
import { Newspaper } from './newspaper.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NewspaperService {
rootApi:string="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=noBemaJCjGOJxZakZAFvyjoih4UUQwvX"


  constructor(private newspaperStore: NewspaperStore, private http: HttpClient) {
    this.http = http;
    this.newspaperStore = newspaperStore;
  }

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.rootApi).pipe(
      tap(courses => {
        this.newspaperStore.loadNewspaper(courses.results, true);
        
      })
    );
  }

  // createCourse(course: Newspaper): Observable<Newspaper> {
  //   return this.http.post<Newspaper>(this.rootApi, course).pipe(
  //     tap(value => {
  //       this.newspaperStore.add([value?.results]);
  //     })
  //   );
  // }

  // deleteCourse(courseId: string): Observable<any> {
  //   return this.http.delete(this.rootApi + courseId).pipe(
  //     tap(result => {
  //       this.newspaperStore.remove(courseId);
  //     })
  //   );
  // }

  // updateCourse(courseId: string, course: Newspaper): Observable<any> {
  //   return this.http.put(this.rootApi + courseId, course).pipe(
  //     tap(result => {
  //       this.newspaperStore.update(courseId, course);
  //     })
  //   );
  }



//export const newspaperService = new NewspaperService(newspaperStore, http);
