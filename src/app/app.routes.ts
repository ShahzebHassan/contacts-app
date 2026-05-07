import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contacts',
    loadComponent: () =>
      import('./features/contacts/contacts-page/contacts-page')
        .then(m => m.ContactsPage)
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'contacts'
  }
];