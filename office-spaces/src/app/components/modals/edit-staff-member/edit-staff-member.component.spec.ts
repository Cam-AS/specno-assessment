import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditStaffMemberComponent } from './edit-staff-member.component';

describe('InviteTeamMembersComponent', () => {
  let component: EditStaffMemberComponent;
  let fixture: ComponentFixture<EditStaffMemberComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditStaffMemberComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
