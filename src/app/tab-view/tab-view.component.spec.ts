import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewComponent } from './tab-view.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('TabViewComponent', () => {
  let component: TabViewComponent;
  let fixture: ComponentFixture<TabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabViewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test getThirdPageData', () => {
    component.getThirdPageData(undefined);
    expect(component.lifeProblemsData).toBe(undefined);
});
  it('should test getFourthPageData', () => {
    component.getFourthPageData(undefined);
    expect(component.academicsData).toBe(undefined);
  });
  it('should test getFifthPageData', () => {
    component.getFifthPageData(undefined);
    expect(component.mentalHealthData).toBe(undefined);
  });
  it('should test showRecommendations', () => {
    component.showRecommendations();
    expect(component.showRecommendation).toBe(true);
  });
});
