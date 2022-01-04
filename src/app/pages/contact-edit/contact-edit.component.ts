import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      console.log('contact', contact);
      this.contact = contact._id
        ? contact
        : (this.contactService.getEmptyContact() as Contact);
    });
    console.log('this.contact :>>', this.contact);
    // this.route.params.subscribe( async ({ id }) => {
    //   this.contact = id ? await this.contactService.getById(id).toPromise() : this.contactService.getEmptyContact() as Contact
    // })
  }

  changeTitle() {
    return this.contact._id ? 'Edit' : 'Add';
  }

  onCancel() {
    this.router.navigateByUrl('/contact');
  }

  async onSaveContact() {
    await lastValueFrom(await this.contactService.saveContact(this.contact));
    this.router.navigateByUrl('/contact');
  }
}
