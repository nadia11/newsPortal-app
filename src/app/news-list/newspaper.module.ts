import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperService } from '../newspaper-state/newspaper.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewspaperComponent } from './newspaper.component';
//import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { Component, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import {LayoutModule} from '@angular/cdk/layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [NewspaperComponent 
  ],
  imports: [
 CommonModule,
 FormsModule,
 HttpClientModule,MatGridListModule,MatTableModule,
 MatIconModule,MatFormFieldModule,MatCardModule,MatButtonModule,LayoutModule,
 RouterModule,
  Ng2SearchPipeModule],
    providers: [NewspaperService],
    exports: [NewspaperComponent]
 
})
export class NewsPaperModule {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 }
