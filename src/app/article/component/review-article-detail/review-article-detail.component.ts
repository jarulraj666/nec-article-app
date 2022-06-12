import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/common/model/article.model';
import { ArticleUpdateStatus } from 'src/app/common/model/article.update.status.model';
import { ArticleService } from 'src/app/common/service/article.service';

@Component({
  selector: 'app-review-article-detail',
  templateUrl: './review-article-detail.component.html',
  styleUrls: ['./review-article-detail.component.scss']
})
export class ReviewArticleDetailComponent implements OnInit {

  constructor(public service: ArticleService, private route: ActivatedRoute, private router: Router) { }

  public article: Article = {content: '', title: '', id: 0};

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.service.getPendingArticleById(+id).subscribe(article => {
        this.article = article;
      })
    }
  }
  


  approve(status: boolean): void {
    
  const val: ArticleUpdateStatus = {
    articleId: this.article.articleId,
    status: status? 'APPROVED' : 'REJECTED'
    }
    this.service.approveArticle(val).subscribe(article => {
      this.router.navigate(['/review-article']);
    });

  }
}