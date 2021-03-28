import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title: string = "Contacts";
  contacts: Contact[] = new Array<Contact>();

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts() {
    this.contactsService.getContacts()
      .subscribe(data => {
        this.contacts = data;
      });
  }

}
