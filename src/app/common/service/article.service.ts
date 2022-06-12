import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment'
import { Article } from '../model/article.model';
import { ArticleUpdateStatus } from '../model/article.update.status.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  

  getAllArticleURI = "/article/getAll";
  getAllPendingArticleURI = "/article/getPending";
  
  createArticleURI = "/article/create";
  approveArticleURI = "/article/approve";
  constructor(public httpClient: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.api}${this.getAllArticleURI}`);
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.httpClient.get<Article>(`${environment.api}/article/${articleId}`);
  }

  getPendingArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.api}${this.getAllPendingArticleURI}`);
  }

  getPendingArticleById(articleId: number): Observable<Article> {
    return this.httpClient.get<Article>(`${environment.api}${this.getAllPendingArticleURI}/${articleId}`);

  }


 

  createArticle(article: Article): Observable<Article> {
    
    return this.httpClient.post<Article>(`${environment.api}${this.createArticleURI}`, article);
  }

  approveArticle(article: ArticleUpdateStatus): Observable<Article> {
    return this.httpClient.put<Article>(`${environment.api}${this.approveArticleURI}`, article);
  }
 }
