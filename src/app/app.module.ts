import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import {  } from '@datorama/akita';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewspaperComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
