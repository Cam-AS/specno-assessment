import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private subscriptions: ModalSubscribe[] = [];

  subscribeToChanges(modal: IModal, type: Modal): void {
    const sub = this.subscriptions.find((x) => x.type === type);
    if (sub) {
      this.subscriptions = this.subscriptions.map((x) => {
        if (x.type === type) {
          return { modal, type };
        }

        return x;
      });
    } else {
      this.subscriptions.push({ modal, type });
    }
  }

  show(type: Modal, props?: any, doOnClose?: any): void {
    const sub = this.subscriptions.find((x) => x.type === type);
    if (sub) {
      sub.modal.open(props, doOnClose);
    }
  }

  hide(type: Modal): void {
    const sub = this.subscriptions.find((x) => x.type === type);
    if (sub) {
      sub.modal.hide();
    }
  }
}
class ModalSubscribe {
  modal: IModal;
  type: Modal;
}
export interface IModal {
  open(props?: any, doOnClose?: any): void;
  hide(): void;
}

export enum Modal {
  login,
  register,
  createTeam,
  deleteTeam,
  demoAccount,
  deleteSpace,
  createSpace,
  addPayMethod,
  editTeamName,
  editTeamRepo,
  resetPassword,
  deleteCapsule,
  createCapsule,
  editSpaceName,
  forgotPassword,
  editCapsuleName,
  inviteTeamMembers,
  editTeamMemberRole,
  deletePaymentMethod,
}
