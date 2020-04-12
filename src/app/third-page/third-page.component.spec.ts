import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPageComponent } from './third-page.component';
import { FormsModule } from '@angular/forms';

describe('ThirdPageComponent', () => {
  let component: ThirdPageComponent;
  let fixture: ComponentFixture<ThirdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ThirdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test nextClicked', () => {
    spyOn(component.thirdPageData, 'emit');
    component.nextClicked();
    expect(component.thirdPageData.emit).toHaveBeenCalledTimes(1);
});
});
