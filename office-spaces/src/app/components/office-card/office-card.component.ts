import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.css'],
})
export class OfficeCardComponent implements OnInit {
  @Input() offices: Office[] = [];
  @Input() office: Office;

  status: boolean[] = [];
  open: boolean = false;

  constructor(private router: Router,  private memberService: MemberService) {}

  async ngOnInit() {
    for (let i = 0; i < this.offices.length; i++) {
      this.status.push(false);
    }
  }

  toggleSingleDrawer() {
    this.open = !this.open;
  }

  toggleDrawer(i: number) {
    this.status[i] = !this.status[i];
  }

  officeCardClicked(officeId: string) {
    this.router.navigate(['/office/' + officeId]);
  }

  editOfficeClicked(officeId: string) {
    this.router.navigate(['/edit-office/' + officeId]);
  }
}
