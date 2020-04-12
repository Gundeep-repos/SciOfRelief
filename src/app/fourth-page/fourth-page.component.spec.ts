import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPageComponent } from './fourth-page.component';
import { FormsModule } from '@angular/forms';

describe('FourthPageComponent', () => {
    let component: FourthPageComponent;
    let fixture: ComponentFixture<FourthPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FourthPageComponent],
            imports: [ FormsModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FourthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test nextClicked', () => {
        spyOn(component.fourthPageData, 'emit');
        component.nextClicked();
        expect(component.fourthPageData.emit).toHaveBeenCalledTimes(1);
    });
});
