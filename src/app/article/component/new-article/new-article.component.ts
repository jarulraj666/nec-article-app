import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Article } from 'src/app/common/model/article.model';
import { ArticleService } from 'src/app/common/service/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(public service: ArticleService, private router: Router, private _snackBar: MatSnackBar) { }

  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  get getControl(){
    return this.articleForm.controls;
  }

  submit(): void {
    console.log(this.articleForm.value);
    const article: Article = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      author: sessionStorage.getItem('username') || ''
    }
    this.service.createArticle(article).subscribe(article => {
      this.openSnackBar('Blog submitted Successfully!!.. Blog will be visible once admin approves!! Do more blogging', 'close')
      this.articleForm.reset();
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'my-custom-snackbar'
    });
  }

}
