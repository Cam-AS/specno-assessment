import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { MemberService } from 'src/app/services/member.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-member-overview',
  templateUrl: './member-overview.component.html',
  styleUrls: ['./member-overview.component.css'],
})
export class MemberOverviewComponent implements OnInit {
  toggle: boolean[] = [];
  office: Office;
  @Input() member: Member;

  avatars: string[] = [
    'assets/icons/astronaut1.svg',
    'assets/icons/astronaut2.svg',
    'assets/icons/astronaut3.svg',
    'assets/icons/astronaut4.svg',
    'assets/icons/astronaut5.svg',
    'assets/icons/astronaut6.svg',
    'assets/icons/astronaut7.svg',
  ];

  constructor(
    private loadingService: LoadingService,
    private memberService: MemberService,
    private officeService: OfficeService
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < this.avatars.length; i++) {
      this.toggle.push(false);
    }

    for (let i = 0; i < this.avatars.length; i++) {
      if (this.member.avatar == this.avatars[i]) {
        this.toggle[i] = !this.toggle[i];
      }
    }
  }

  assignAvatar(i: number) {
    this.toggle = [];
    for (let i = 0; i < this.avatars.length; i++) {
      this.toggle.push(false);
    }
    this.toggle[i] = !this.toggle[i];
    this.member.avatar = this.avatars[i];
  }
}
