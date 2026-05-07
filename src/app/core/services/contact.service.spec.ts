import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import { ContactService } from './contacts.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch contacts and map email addresses by contactId', () => {
    service.getContacts().subscribe(result => {
      expect(result.length).toBe(2);

      expect(result[0].id).toBe('1');
      expect(result[0].emails.length).toBe(2);
      expect(result[0].emails[0].address).toBe('nicholas.gordon@company.com');

      expect(result[1].id).toBe('2');
      expect(result[1].emails.length).toBe(1);
      expect(result[1].emails[0].address).toBe('bradley.malone@company.com');
    });

    const contactsReq = httpMock.expectOne(`${environment.apiUrl}/contacts`);
    expect(contactsReq.request.method).toBe('GET');

    contactsReq.flush([
      {
        id: '1',
        firstName: 'Nicholas',
        lastName: 'Gordon',
        name: 'Nicholas Gordon',
        role: 'Developer',
        avatar: '',
        status: 'online',
        bio: 'Developer bio',
        dial: 'n.gordon@ymsg.com',
        meeting: 'http://go.betacall.com/meet/n.gordon',
        phones: [{ number: '555-123-4567', isPrimary: true }]
      },
      {
        id: '2',
        firstName: 'Bradley',
        lastName: 'Malone',
        name: 'Bradley Malone',
        role: 'Sales Manager',
        avatar: '',
        status: 'away',
        bio: 'Sales bio',
        dial: 'bmalone@ymsg.com',
        meeting: 'http://go.betacall.com/meet/b.malone',
        phones: [{ number: '555-234-5678', isPrimary: true }]
      }
    ]);

    const emailsReq = httpMock.expectOne(`${environment.apiUrl}/email_adresses`);
    expect(emailsReq.request.method).toBe('GET');

    emailsReq.flush([
      {
        id: '1',
        contactId: '1',
        address: 'nicholas.gordon@company.com',
        isPrimary: true
      },
      {
        id: '2',
        contactId: '1',
        address: 'n.gordon@personal.com'
      },
      {
        id: '3',
        contactId: '2',
        address: 'bradley.malone@company.com',
        isPrimary: true
      }
    ]);
  });
});