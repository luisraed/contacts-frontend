import { Contact } from '../models/contact';
import { ContactPipe } from './contact.pipe';

describe('ContactPipe', () => {
  const pipe = new ContactPipe();

  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

  it('transforms contact with salutation, first and last name to "Salutation FirstName LastName"', () => {
    const contact = new Contact();
    contact.salutation = "a";
    contact.firstName = "b";
    contact.lastName = "c";
    expect(pipe.transform(contact)).toBe('a b c');
  });
});
