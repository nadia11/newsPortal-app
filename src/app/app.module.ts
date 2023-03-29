import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { LayoutModule } from './layout/layout.module';

import { NewsPaperModule } from './news-list/newspaper.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewspaperComponent } from './news-list/newspaper.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NewsPaperModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'category/Home', pathMatch: 'full' },
       { path: 'category/:category', component: NewspaperComponent },
       { path: 'news/:newsId', component: NewsDetailsComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
