import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member-service';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css'],
})
export class OfficeViewComponent implements OnInit {
  toggle: boolean[] = [false, false, false, false, false, false, false];
  member: Member = new Member();
  avatars: string[] = [
    'assets/icons/astronaut1.svg',
    'assets/icons/astronaut2.svg',
    'assets/icons/astronaut3.svg',
    'assets/icons/astronaut4.svg',
    'assets/icons/astronaut5.svg',
    'assets/icons/astronaut6.svg',
    'assets/icons/astronaut7.svg',
  ];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {}

  async addMember() {
    try {
      // await this.memberService.save(this.member);
      console.log(this.member);
    } catch (err) {
      console.log(err);
    }
  }

  assignAvatar(i: number) {
    this.toggle = [false, false, false, false, false, false, false];
    this.toggle[i] = !this.toggle[i];
    this.member.avatar = this.avatars[i];
  }
}
