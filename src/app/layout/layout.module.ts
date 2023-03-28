import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NewspaperService } from '../newspaper-state/newspaper.service';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule, MatToolbarModule, RouterModule
  ],
  exports: [NavbarComponent,FooterComponent],
  
  providers: [NewspaperService],
})
export class LayoutModule { }
