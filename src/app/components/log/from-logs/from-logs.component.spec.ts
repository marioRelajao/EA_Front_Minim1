import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromLogsComponent } from './from-logs.component';

describe('FromLogsComponent', () => {
  let component: FromLogsComponent;
  let fixture: ComponentFixture<FromLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
