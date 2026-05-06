export interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status?: 'online' | 'away';
  bio: string;
  emails: { address: string; isPrimary?: boolean }[];
  dial: string;
  meeting: string;
  phones: { number: string; isPrimary?: boolean; hasNotification?: boolean }[];
}