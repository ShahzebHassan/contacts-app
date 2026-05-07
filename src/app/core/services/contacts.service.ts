import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

import {
  Contact,
  ContactApi,
  EmailAddressApi
} from '../models/contact.model';

import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return forkJoin({
      contacts: this.http.get<ContactApi[]>(
        `${this.baseUrl}/contacts`
      ),

      // Assessment requirement expects:
      // GET /contacts/{id}/email_addresses
      //
      // MockAPI limitation:
      // mockapi.io does not support this exact nested REST structure
      // in the current mock setup.
      //
      // Therefore, email addresses are retrieved from a flat endpoint
      // and mapped client-side using contactId.
      //
      // forkJoin is used here intentionally to:
      // - Execute both API requests in parallel
      // - Reduce unnecessary sequential waiting time
      // - Improve overall loading performance
      // - Keep the data aggregation logic centralized in a single stream
      //
      // Note:
      // The endpoint name is intentionally consumed as provided
      // by the mock backend: "email_adresses".
      emails: this.http.get<EmailAddressApi[]>(
        `${this.baseUrl}/email_adresses`
      )
    }).pipe(
      map(({ contacts, emails }) =>
        contacts.map(contact => ({
          ...contact,
          emails: emails.filter(
            email => email.contactId === contact.id
          )
        }))
      )
    );
  }
}