import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/common/model/article.model';
import { ArticleService } from 'src/app/common/service/article.service';

@Component({
  selector: 'app-view-article-detail',
  templateUrl: './view-article-detail.component.html',
  styleUrls: ['./view-article-detail.component.scss']
})
export class ViewArticleDetailComponent implements OnInit {

 
  public article: Article = {content: '', title: '', id: 0};

  constructor(public service: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.service.getArticleById(+id).subscribe(article => {
        this.article = article;
      })
    }
    
  }

}
