import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordsPageComponent } from './my-records-page.component';

describe('MyRecordsPageComponent', () => {
  let component: MyRecordsPageComponent;
  let fixture: ComponentFixture<MyRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecordsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
