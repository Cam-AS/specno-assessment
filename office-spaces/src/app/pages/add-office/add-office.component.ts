import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OfficeService } from 'src/app/services/office-service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css'],
})
export class AddOfficeComponent implements OnInit {
  toggle: boolean[] = [];
  office: Office = new Office();
  offices: Office[] = [];

  colors: string[] = [
    'assets/icons/orange.svg',
    'assets/icons/peach.svg',
    'assets/icons/red.svg',
    'assets/icons/brown.svg',
    'assets/icons/light-pink.svg',
    'assets/icons/dark-pink.svg',
    'assets/icons/grey.svg',
    'assets/icons/green.svg',
    'assets/icons/violet.svg',
    'assets/icons/blue.svg',
    'assets/icons/purple.svg',
  ];

  constructor(
    private router: Router,
    private officeService: OfficeService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.office.capacity = null;
  }

  async addOffice() {
    this.loadingService.show();

    try {
      await this.officeService.save(this.office);
      this.router.navigate(['/']);
    } catch (err) {
      console.log(err);
    }

    this.loadingService.hide();
  }

  assignColor(i: number) {
    this.toggle = [];
    for (let i = 0; i < this.colors.length; i++) {
      this.toggle.push(false);
    }
    this.toggle[i] = !this.toggle[i];
    this.office.color = this.colors[i];
  }

  back() {
    this.router.navigate(['/']);
  }
}
