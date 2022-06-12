import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewArticleDetailComponent } from './review-article-detail.component';

describe('ReviewArticleDetailComponent', () => {
  let component: ReviewArticleDetailComponent;
  let fixture: ComponentFixture<ReviewArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
