import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { Contact } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {
  @Input({ required: true }) contacts: Contact[] = [];
  @Input() selectedContactId?: string;
  @Input() isCollapsed = false;

  @Output() selectedContactChange = new EventEmitter<string>();
  @Output() collapsedChange = new EventEmitter<boolean>();

  readonly itemsPerPage = 7;

  currentPage = signal(0);
  searchQuery = signal('');

  filteredContacts = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return this.contacts;
    }

    return this.contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(query);
      const roleMatch = contact.role.toLowerCase().includes(query);
      const emailMatch = contact.emails.some(email =>
        email.address.toLowerCase().includes(query)
      );
      const phoneMatch = contact.phones.some(phone =>
        phone.number.includes(query)
      );

      return nameMatch || roleMatch || emailMatch || phoneMatch;
    });
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredContacts().length / this.itemsPerPage)
  );

  paginatedContacts = computed(() => {
    const start = this.currentPage() * this.itemsPerPage;
    return this.filteredContacts().slice(start, start + this.itemsPerPage);
  });

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
    this.currentPage.set(0);
  }

  prevPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.update(page => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update(page => page + 1);
    }
  }

  toggleCollapse(): void {
    this.collapsedChange.emit(!this.isCollapsed);
  }

  selectContact(contactId: string): void {
    this.selectedContactChange.emit(contactId);

    if (window.innerWidth <= 768) {
      this.collapsedChange.emit(true);
    }
  }
}