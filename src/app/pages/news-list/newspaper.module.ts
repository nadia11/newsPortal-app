import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperService } from './../../states/newspaper-state'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { Component, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import { DxTileViewModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NewspaperComponent } from './newspaper.component';
@NgModule({

  declarations: [
     NewspaperComponent
  ],

imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,MatGridListModule,MatTableModule,
      MatIconModule,MatFormFieldModule,MatCardModule,MatButtonModule,LayoutModule,
      RouterModule,
      DxTileViewModule,
    ],

 providers: [NewspaperService],

 exports: [NewspaperComponent]
 })
export class NewsPaperModule {


 }
