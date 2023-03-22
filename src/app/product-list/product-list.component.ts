import { Component, OnInit } from '@angular/core';
import { NewsPortalService } from '../news-portal.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  newsList:any={};

  constructor( private newsPortalService: NewsPortalService){}

  ngOnInit(): void {
    this.newsPortalService.getNewsList().subscribe({next:item => this.newsList = item});;
   
  }

display:string="ff";

}
