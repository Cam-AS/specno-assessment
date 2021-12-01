import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDetailsFormComponent } from './office-details-form.component';

describe('OfficeDetailsFormComponent', () => {
  let component: OfficeDetailsFormComponent;
  let fixture: ComponentFixture<OfficeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
