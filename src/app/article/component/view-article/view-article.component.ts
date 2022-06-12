import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Article } from 'src/app/common/model/article.model';
import { ArticleService } from 'src/app/common/service/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {

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
    this.rowData$! = this.service.getAllArticles();
    this.rowData$.subscribe(value => {
      console.log(value);
    });
    this.agGrid.api.sizeColumnsToFit();
  }


  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate([`/view-article/detail/${e.data.articleId}`]);
  }


}
