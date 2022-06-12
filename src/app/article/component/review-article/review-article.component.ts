import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Article } from 'src/app/common/model/article.model';
import { ArticleService } from 'src/app/common/service/article.service';

@Component({
  selector: 'app-review-article',
  templateUrl: './review-article.component.html',
  styleUrls: ['./review-article.component.scss']
})
export class ReviewArticleComponent implements OnInit {


  public articles: Article[] = [];

  public columnDefs: ColDef[] = [
    { field: 'title', unSortIcon: true},
    { field: 'content', unSortIcon: true},
    { field: 'author', unSortIcon: true },
    { field: 'createdDt', unSortIcon: true, sort: 'desc'},
    { field: 'updatedDt', unSortIcon: true },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(public service: ArticleService, public router: Router) { }

  ngOnInit(): void {
    
    
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$! = this.service.getPendingArticles();
    
    this.agGrid.api.sizeColumnsToFit();
  }


  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate([`/review-article/detail/${e.data.articleId}`]);
  }
}