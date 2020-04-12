import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationScreenComponent } from './recommendation-screen.component';
import { FormsModule } from '@angular/forms';

describe('RecommendationScreenComponent', () => {
  let component: RecommendationScreenComponent;
  let fixture: ComponentFixture<RecommendationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationScreenComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
