import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.css'],
})
export class OfficeCardComponent implements OnInit {
  status: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.status = !this.status;
  }

  officeCardClicked() {
    this.router.navigate(['/office']);
  }
}
