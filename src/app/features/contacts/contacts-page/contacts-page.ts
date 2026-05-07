import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Contact } from '../../../core/models/contact.model';
import { ContactList } from '../contact-list/contact-list';
import { ContactDetail } from '../contact-detail/contact-detail';
import { ContactService } from '../../../core/services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [CommonModule, ContactList, ContactDetail],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage implements OnInit {
  contacts = signal<Contact[]>([]);
  selectedContact = signal<Contact | undefined>(undefined);

  isCollapsed = signal(false);
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private readonly contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.isLoading.set(true);

    this.contactService.getContacts().subscribe({
      next: contacts => {
        this.contacts.set(contacts);
        this.selectedContact.set(contacts[0]);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load contacts. Please try again.');
        this.isLoading.set(false);
      }
    });
  }

  selectContact(contactId: string): void {
    this.selectedContact.set(
      this.contacts().find(contact => contact.id === contactId)
    );
  }

  toggleCollapsed(value: boolean): void {
    this.isCollapsed.set(value);
  }

  showList(): void {
    this.isCollapsed.set(false);
  }
}