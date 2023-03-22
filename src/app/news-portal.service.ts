import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsPortalService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-02-20&sortBy=publishedAt&apiKey=672db0f9ceec401cb34896f4b9b4022f';

  getNewsList():Observable<any> {
    return this.http.get<any>(this.rootURL).pipe(tap(data=>console.log(JSON.stringify(data))));
   
  }

  // addUser(user: any) {
  //   return this.http.post(this.rootURL + '/user', {user});
  // }
}
