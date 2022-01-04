import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @Output() onSpendBalance = new EventEmitter<number>();
  subscription: Subscription;
  contact: Contact;
  answer: string;
  user: User;
  answer$: Observable<string> | Promise<string>;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription = await this.route.data.subscribe((data) => {
      this.contact = data.contact;
      this.user = this.userService.getUser();
      console.log('this.contact :>>', this.contact);
    });
    console.log('this.route :>>', this.route);
    // this.subscription = this.route.params.subscribe(async (params) => {
    //   const contact = await lastValueFrom(
    //     await this.contactService.getContactById(params.id)
    //   );

    //   this.contact = contact;
    //   console.log('this.contact  :>>', this.contact);
    // });
  }

  spendBalance(ev) {
    console.log(ev);
  }

  onBack() {
    this.router.navigateByUrl('/contact');
  }
}
