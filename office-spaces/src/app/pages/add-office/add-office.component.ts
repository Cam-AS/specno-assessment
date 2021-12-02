import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/models/office';
import { OfficeService } from 'src/app/services/office-service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  toggle: boolean[] = [false, false, false, false, false, false, false, false, false, false, false];
  office: Office = new Office();

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
    private officeService: OfficeService
  ) { }

  ngOnInit(): void {
  }

  async addOffice() {
    try {
      // await this.officeService.save(this.office);
      console.log(this.office);
    } catch (err) {
      console.log(err);
    }
  }

  assignColor(i: number) {
    this.toggle = [false, false, false, false, false, false, false, false, false, false, false];
    this.toggle[i] = !this.toggle[i];
    this.office.color = this.colors[i];
  }

}
