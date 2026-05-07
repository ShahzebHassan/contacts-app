import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Contact } from '../../../core/models/contact.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.scss'
})
export class ContactDetail {
  @Input() contact?: Contact;

  @Output() back = new EventEmitter<void>();

  hoveredSocial = signal<string | null>(null);

  setHoveredSocial(platform: string | null): void {
    this.hoveredSocial.set(platform);
  }

  getSocialColor(platform: string): string {
    if (this.hoveredSocial() !== platform) {
      return '#6b7280';
    }

    switch (platform) {
      case 'facebook':
        return '#1877f2';
      case 'pinterest':
        return '#e60023';
      case 'twitter':
        return '#1da1f2';
      case 'linkedin':
        return '#0a66c2';
      case 'google':
        return '#ea4335';
      default:
        return '#6b7280';
    }
  }
}