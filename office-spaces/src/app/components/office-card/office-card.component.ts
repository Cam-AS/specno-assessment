import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.css'],
})
export class OfficeCardComponent implements OnInit {
  @Input() offices: Office[] = [];

  status: boolean[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < this.offices.length; i++) {
      this.status.push(false);
    }
  }

  toggleDrawer(i: number) {
    this.status[i] = !this.status[i];
  }

  officeCardClicked() {
    this.router.navigate(['/office']);
  }

  editOfficeClicked(officeId: string) {
    this.router.navigate(['/edit-office/' + officeId]);
  }
}
