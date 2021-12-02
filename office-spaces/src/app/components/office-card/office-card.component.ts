import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OfficeService } from 'src/app/services/office.service';

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

  constructor(private router: Router, private loadingService: LoadingService, private officeService: OfficeService) {}

  async ngOnInit() {
    for (let i = 0; i < this.offices.length; i++) {
      this.status.push(false);
    }
  }

  fetchColor(color: string) {
    switch (color) {
      case 'assets/icons/orange.svg':
        return 'linear-gradient(2deg,rgb(168, 18, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(95, 69, 113) 66.6% 100%)';
      case 'assets/icons/peach.svg':
        return 'linear-gradient(2deg,rgb(168, 14, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(25, 173, 42) 66.6% 100%)';
      case 'assets/icons/red.svg':
        return 'linear-gradient(2deg,rgb(168, 49, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(23, 9, 144) 66.6% 100%)';
      case 'assets/icons/brown.svg':
        return 'linear-gradient(2deg,rgb(168, 19, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(239, 39, 114) 66.6% 100%)';
      case 'assets/icons/light-pink.svg':
        return 'linear-gradient(2deg,rgb(168, 1, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(239, 79, 16) 66.6% 100%)';
      case 'assets/icons/dark-pink.svg':
        return 'linear-gradient(2deg,rgb(255, 0, 110) 33.3%,rgb(208, 161, 36) 33.3% 66.6%,rgb(19, 9, 12) 66.6% 100%)';
      case 'assets/icons/grey.svg':
        return 'linear-gradient(2deg,rgb(168, 14, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(239, 179, 112) 66.6% 100%)';
      case 'assets/icons/green.svg':
        return 'linear-gradient(2deg,rgb(168, 94, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(3, 179, 112) 66.6% 100%)';
      case 'assets/icons/violet.svg':
        return 'linear-gradient(2deg,rgb(168, 18, 27) 33.3%,rgb(138, 161, 36) 33.3% 66.6%,rgb(139, 179, 112) 66.6% 100%)';
      case 'assets/icons/blue.svg':
        return 'linear-gradient(2deg,rgb(168, 139, 235) 33.3%,rgb(138, 111, 236) 33.3% 66.6%,rgb(39, 79, 212) 66.6% 100%)';
      case 'assets/icons/purple.svg':
        return 'linear-gradient(2deg,rgb(168, 39, 27) 33.3%,rgb(138, 11, 36) 33.3% 66.6%,rgb(239, 17, 12) 66.6% 100%)';
      default:
        return '';
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
