import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NewspaperService } from '../states/newspaper-state/newspaper.service';
import { RouterModule } from '@angular/router'; 
import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule, MatToolbarModule, RouterModule, DxTabsModule,
    DxSelectBoxModule
  ],
  exports: [NavbarComponent,FooterComponent],
  
  providers: [NewspaperService],
})
export class LayoutModule { }
