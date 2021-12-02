import { Component, OnInit } from '@angular/core';

import { IModal, Modal, ModalService } from '../../../services/modal.service';
import { AnimationService } from '../../../services/animation.service';

@Component({
  selector: 'app-edit-staff-member',
  templateUrl: './edit-staff-member.component.html',
  styleUrls: ['./edit-staff-member.component.css'],
  animations: [AnimationService.sideInOut()],
})
export class EditStaffMemberComponent implements OnInit, IModal {

  show = false;

  constructor(
    private modalService: ModalService,
  ) {
    this.modalService.subscribeToChanges(this, Modal.editCapsuleName);
  }

  ngOnInit(): void {}

  open(props): void {
    this.show = true;
    // this.capsule = props[0];
  }

  hide(): void {
    this.show = false;
  }
}
