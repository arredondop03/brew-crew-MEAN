import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBeerReviewComponent } from './edit-beer-review.component';

describe('EditBeerReviewComponent', () => {
  let component: EditBeerReviewComponent;
  let fixture: ComponentFixture<EditBeerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBeerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBeerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
