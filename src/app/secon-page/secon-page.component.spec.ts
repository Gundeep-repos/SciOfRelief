import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconPageComponent } from './secon-page.component';
import { FormsModule } from '@angular/forms';

describe('SeconPageComponent', () => {
  let component: SeconPageComponent;
  let fixture: ComponentFixture<SeconPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SeconPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test nextClicked', () => {
    component.nextClicked();
    expect(component.finalStressRate).toBe(undefined);
});
});
