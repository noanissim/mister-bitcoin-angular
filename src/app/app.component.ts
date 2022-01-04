import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { contactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mister-bitcoin-angular';

  // selectedPage: string = '';
  // statisticsPage: boolean = false;
  // contactPage: boolean = false;
  // homePage: boolean = true;

  // selectPage(ev) {
  //   if (ev === 'Contact') {
  //     this.contactPage = true;
  //     this.statisticsPage = false;
  //     this.homePage = false;
  //   } else if (ev === 'Home') {
  //     this.contactPage = false;
  //     this.statisticsPage = false;
  //     this.homePage = true;
  //   } else {
  //     this.contactPage = false;
  //     this.statisticsPage = true;
  //     this.homePage = false;
  //   }
  // }
}
