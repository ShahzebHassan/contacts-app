
export interface Phone {
  number: string;
  isPrimary?: boolean;
  hasNotification?: boolean;
}

export interface ContactApi {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  status?: 'online' | 'away' | string;
  bio: string;
  dial: string;
  meeting: string;
  phones: Phone[];
}

export interface EmailAddressApi {
  id: string;
  contactId: string;
  address: string;
  isPrimary?: boolean;
}

export interface Contact extends ContactApi {
  emails: EmailAddressApi[];
}