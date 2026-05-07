// src/app/core/services/contact-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Contact, ContactApi, EmailAddressApi } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly baseUrl = 'https://69fb74a788a7af0ecca92944.mockapi.io';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return forkJoin({
      contacts: this.http.get<ContactApi[]>(`${this.baseUrl}/contacts`),

      // Assumption: endpoint is intentionally consumed as provided.
      // The MockAPI route is misspelled as email_adresses, not email_addresses.
      emails: this.http.get<EmailAddressApi[]>(`${this.baseUrl}/email_adresses`)
    }).pipe(
      map(({ contacts, emails }) =>
        contacts.map(contact => ({
          ...contact,
          emails: emails.filter(email => email.contactId === contact.id)
        }))
      )
    );
  }
}