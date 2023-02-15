import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecordUpdateDialogComponent} from './record-update-dialog.component';

describe('RecordUpdateDialogComponent', () => {
    let component: RecordUpdateDialogComponent;
    let fixture: ComponentFixture<RecordUpdateDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecordUpdateDialogComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RecordUpdateDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
