import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperService } from '././state/newspaper.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewspaperComponent } from '././newspaper.component';
@NgModule({
  declarations: [NewspaperComponent 
  ],
  imports: [
 CommonModule,
 FormsModule,
 HttpClientModule
    ],
    providers: [NewspaperService],
    exports: [NewspaperComponent]
 
})
export class NewsPaperModule { }
