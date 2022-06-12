import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/component/article/article.component';
import { NewArticleComponent } from './article/component/new-article/new-article.component';
import { ReviewArticleDetailComponent } from './article/component/review-article-detail/review-article-detail.component';
import { ReviewArticleComponent } from './article/component/review-article/review-article.component';
import { ViewArticleDetailComponent } from './article/component/view-article-detail/view-article-detail.component';
import { ViewArticleComponent } from './article/component/view-article/view-article.component';
import { LoginComponent } from './common/component/login/login.component';
import { AdminGuardService } from './common/service/admin-guard.service';
import { AuthGuardService } from './common/service/auth-guard.service';
import { LoginService } from './common/service/login.service';
import { ReaderGuardService } from './common/service/reader-guard.service';
import { SuperAdminGuardService } from './common/service/super-admin-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'view-article',
    component: ArticleComponent,
    canActivate:[AuthGuardService, ReaderGuardService],
    children: [
      {
        path: '',
        component: ViewArticleComponent,
        canActivateChild: [AuthGuardService, ReaderGuardService]
      },
      {
      path: 'detail/:id',
      component: ViewArticleDetailComponent,
      canActivateChild: [AuthGuardService, ReaderGuardService]
    }]
  },
  {
    path: 'review-article',
    component: ArticleComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        component: ReviewArticleComponent,
        canActivateChild: [AuthGuardService, SuperAdminGuardService]
      },
      {
      path: 'detail/:id',
      component: ReviewArticleDetailComponent,
      canActivateChild: [AuthGuardService, SuperAdminGuardService]
    }]
  },
  {
    path: 'create-article',
    component: NewArticleComponent,
    canActivate:[AuthGuardService, AdminGuardService]
  },
  {
    path: '',
    redirectTo: 'view-article',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
