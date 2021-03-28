import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let contactServiceSpy: { get: jasmine.Spy };
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    contactServiceSpy = jasmine.createSpyObj('ContactsService', ['getContacts']);
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = new ContactsComponent(contactServiceSpy as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
