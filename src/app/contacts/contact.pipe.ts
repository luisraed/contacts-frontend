import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(value: Contact, ...args: unknown[]): string {
    return `${value.salutation} ${value.firstName} ${value.lastName}`;
  }

}
