import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import {  } from '@datorama/akita';
import { NewsPaperModule } from './newspaper/newspaper.module';
import { NewsDetailsComponent } from './news-details/news-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NewsPaperModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'category/all', pathMatch: 'full' },
       { path: 'category/:category', component: NewspaperComponent },
       { path: 'news/:newsId', component: NewsDetailsComponent },
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
