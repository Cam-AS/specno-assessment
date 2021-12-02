import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { database } from '@appstrax/database';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const apiUrl = 'https://appstrax-database-api-nydkdz.codecapsules.co.za';
    database.init(apiUrl);
  }

  addOfficeClicked() {
    this.router.navigate(['/add-office']);
  }
}
