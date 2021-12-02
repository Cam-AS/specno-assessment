import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css'],
})
export class EditOfficeComponent implements OnInit {
  toggle: boolean[] = [];
  office: Office = new Office();
  officeId: string = '';

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
    private route: ActivatedRoute,
    private officeService: OfficeService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit() {
    this.loadingService.show();

    try {
      this.route.params.subscribe((params) => {
        this.officeId = params['officeId'];
      });

      this.office = await this.officeService.findById(this.officeId);

      for (let i = 0; i < this.colors.length; i++) {
        this.toggle.push(false);
      }

      for (let i = 0; i < this.colors.length; i++) {
        if (this.office.color == this.colors[i]) {
          this.toggle[i] = !this.toggle[i];
        }
      }
    } catch (err) {
      console.log(err);
    }

    this.loadingService.hide();
  }

  async saveOffice() {
    this.loadingService.show();

    try {
      await this.officeService.save(this.office);
      this.router.navigate(['/']);
    } catch (err) {
      console.log(err);
    }

    this.loadingService.hide();
  }

  async deleteOffice() {
    this.loadingService.show();
    try {
      await this.officeService.delete(this.office.id);
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
