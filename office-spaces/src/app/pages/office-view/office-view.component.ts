import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css'],
})
export class OfficeViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addOfficeClicked() {
    this.router.navigate(['/edit-office']);
  }
}
