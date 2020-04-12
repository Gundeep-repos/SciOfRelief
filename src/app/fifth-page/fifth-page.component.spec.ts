import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthPageComponent } from './fifth-page.component';
import { FormsModule } from '@angular/forms';

describe('FifthPageComponent', () => {
    let component: FifthPageComponent;
    let fixture: ComponentFixture<FifthPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FifthPageComponent],
            imports: [ FormsModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FifthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test nextClicked', () => {
        spyOn(component.fifthPageData, 'emit');
        component.nextClicked();
        expect(component.fifthPageData.emit).toHaveBeenCalledTimes(1);
    });
});
