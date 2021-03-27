import { TestBed } from '@angular/core/testing';
import { Contact } from '../models/contact';

import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: ContactsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        ContactsService
      ]
    });

    service = new ContactsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected contacts', () => {
    const expectedContacts: Contact[] = [ new Contact() ];
  
    httpClientSpy.get.and.returnValue(expectedContacts);
  
    service.getContacts().subscribe(
      contacts => expect(contacts).toEqual(expectedContacts, 'expected contacts'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
