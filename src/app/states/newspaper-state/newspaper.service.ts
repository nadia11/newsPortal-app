import { ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { NewspaperStore, newspaperStore,NewspaperState } from './newspaper.store';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NewspaperService {
rootApi:string="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=noBemaJCjGOJxZakZAFvyjoih4UUQwvX"


  constructor( private newspaperStore: NewspaperStore, private http: HttpClient) {

    this.http = http;
    this.newspaperStore = newspaperStore;

  }

  getAllCourses(): Observable<any> {

    return this.http.get<any>(this.rootApi).pipe(

      tap(courses => {
        this.newspaperStore.loadNewspaper(courses.results, true);    
      }),

      retry(1),

     catchError(err => {
      throw 'error in source. Details: ' + err;
    })
    );
  }
}
