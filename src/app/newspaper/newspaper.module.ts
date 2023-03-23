import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperService } from '././state/newspaper.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewspaperComponent } from '././newspaper.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { Component, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@NgModule({
  declarations: [NewspaperComponent 
  ],
  imports: [
 CommonModule,
 FormsModule,
 HttpClientModule,MatToolbarModule,MatGridListModule,MatTableModule,
 MatIconModule,MatFormFieldModule,MatCardModule,MatButtonModule,
 RouterModule

    ],
    providers: [NewspaperService],
    exports: [NewspaperComponent]
 
})
export class NewsPaperModule {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 }
