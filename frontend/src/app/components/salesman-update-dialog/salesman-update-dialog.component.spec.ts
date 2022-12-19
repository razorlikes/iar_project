import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanUpdateDialogComponent } from './salesman-update-dialog.component';

describe('SalesmanUpdateDialogComponent', () => {
  let component: SalesmanUpdateDialogComponent;
  let fixture: ComponentFixture<SalesmanUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
