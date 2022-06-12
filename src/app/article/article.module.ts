import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewArticleComponent } from './component/view-article/view-article.component';
import { NewArticleComponent } from './component/new-article/new-article.component';
import { SharedModule } from '../common/shared.module';
import { ViewArticleDetailComponent } from './component/view-article-detail/view-article-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleComponent } from './component/article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewArticleComponent } from './component/review-article/review-article.component';
import { ReviewArticleDetailComponent } from './component/review-article-detail/review-article-detail.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ViewArticleComponent,
    NewArticleComponent,
    ViewArticleDetailComponent,
    ArticleComponent,
    ReviewArticleComponent,
    ReviewArticleDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule,
    MatSnackBarModule
    
  ]
})
export class ArticleModule { }
