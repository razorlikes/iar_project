import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmenPageComponent } from './salesmen-page.component';

describe('SalesmenPageComponent', () => {
  let component: SalesmenPageComponent;
  let fixture: ComponentFixture<SalesmenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
