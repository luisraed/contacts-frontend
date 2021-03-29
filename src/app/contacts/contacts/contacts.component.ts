import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title: string = "Contacts";
  displayedColumns: string[] = ['salutation', 'firstName', 'lastName', 'telephoneNumber'];
  contacts: Contact[] = new Array<Contact>();

  constructor(private contactsService: ContactsService,
    public productDialog: MatDialog) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts() {
    this.contactsService.getContacts()
      .subscribe(data => {
        this.contacts = data;
      });
  }

  onRowClicked(row: Contact) {
    this.openDialog(row);
  }

  private openDialog(contact: Contact) {
    const dialogRef = this.productDialog.open(ContactDetailsComponent, {
      width: '700px',
      data: { contact: contact }
    });
      
    dialogRef.afterClosed().subscribe(result => { 
      if (result) {
        this.getContacts();
      }
    });
  }

}
