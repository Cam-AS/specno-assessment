import { Component, OnInit } from '@angular/core';
import { database } from '@appstrax/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'office-spaces';

  ngOnInit() {
    const apiUrl = 'https://appstrax-database-api-nydkdz.codecapsules.co.za';
    database.init(apiUrl);
  }
}
