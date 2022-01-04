import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss'],
})
export class ContactAppComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  contacts: Contact[];
  contacts$: Observable<Contact[]>;
  subscription: Subscription;
  imgUrl: string;

  async ngOnInit(): Promise<void> {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
    // this.contacts$.forEach(c=>{})
    const ans = await lastValueFrom(await this.contactService.getRandPerson());
    console.log(ans);

    this.imgUrl = ans.results[0].picture.large;
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId);
  }
}
