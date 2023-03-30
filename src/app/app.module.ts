import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewsPaperModule } from './pages/news-list/newspaper.module';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { NewspaperComponent } from './pages/news-list/newspaper.component';
import { LayoutModule } from './layout/layout.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, NewsDetailsComponent, SearchComponent],
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
export class AppModule {}
