import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperService } from '././state/newspaper.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewspaperComponent } from '././newspaper.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { Component, ViewChild } from '@angular/core';;
@NgModule({
  declarations: [NewspaperComponent 
  ],
  imports: [
 CommonModule,
 FormsModule,
 HttpClientModule,MatToolbarModule,MatGridListModule
    ],
    providers: [NewspaperService],
    exports: [NewspaperComponent]
 
})
export class NewsPaperModule { }
