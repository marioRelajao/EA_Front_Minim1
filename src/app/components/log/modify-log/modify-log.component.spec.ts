import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLogComponent } from './modify-log.component';

describe('ModifyLogComponent', () => {
  let component: ModifyLogComponent;
  let fixture: ComponentFixture<ModifyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
