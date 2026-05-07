# ContactsApp

ContactsApp is a frontend contact management application built with Angular 21.

The application consumes mock API data from MockAPI and provides a responsive customer contact dashboard where users can:

- Browse contacts
- Search contacts
- View detailed contact information
- View email addresses and phone numbers
- Access meeting and communication details

The project was implemented as part of a Front End Developer Coding Exercise.

---

# Technologies Used

- Angular 21
- TypeScript
- SCSS
- RxJS
- Angular Material Icons
- MockAPI

---

# Features

- Responsive contact management dashboard
- Contact search functionality
- Contact details view
- Email and phone mapping
- Parallel API requests using `forkJoin`
- Standalone Angular components
- SCSS-based styling
- Environment-based API configuration
- Unit testing for service layer

---

# Project Structure

```txt
src/
 ├── app/
 │   ├── core/
 │   │   ├── models/
 │   │   └── services/
 │   │
 │   ├── features/
 │   │   └── contacts/
 │   │       ├── contact-list/
 │   │       ├── contact-detail/
 │   │       └── contacts-page/
 │   │
 │   ├── app.ts
 │   ├── app.html
 │   └── app.routes.ts
 │
 ├── environments/
 │   ├── environment.development.ts
 │   └── environment.production.ts
 │
 └── styles.scss
```

---

# Prerequisites

Before running the project, ensure the following are installed:

- Node.js
- npm
- Angular CLI

Check installed versions:

```bash
node -v
npm -v
ng version
```

---

# Clone the Repository

Clone the project from GitHub:

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd contacts-app
```

---

# Install Dependencies

Install all required dependencies:

```bash
npm install
```

---

# Environment Configuration

The API base URL is configured using Angular environment files.

File:

```txt
src/environments/environment.development.ts
```

Example:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://69fb74a788a7af0ecca92944.mockapi.io'
};
```

---

# Running the Application

Start the Angular development server:

```bash
ng serve
```

Open the application in your browser:

```txt
http://localhost:4200/
```

The application automatically reloads when source files are modified.

---

# Building the Project

To generate a production build:

```bash
ng build
```

Build output will be generated inside:

```txt
dist/
```

---

# Running Unit Tests

Run unit tests using:

```bash
ng test
```

The project currently includes unit testing for the `ContactService` layer.

The service test validates:

- API response handling
- Parallel API request aggregation using `forkJoin`
- Correct mapping of email addresses to contacts using `contactId`

---

# API Endpoints

The coding exercise specification referenced the following endpoints:

```txt
/contacts
/contacts/{id}/email_addresses
```

The provided MockAPI service exposes:

```txt
/contacts
/email_adresses
```

Due to MockAPI limitations with nested REST structures in the current setup, email addresses are retrieved from the flat endpoint and mapped client-side using `contactId`.

The endpoint is intentionally consumed exactly as provided by the mock backend:

```txt
/email_adresses
```

---

# Architectural Notes

The application is structured using:

- Standalone Angular components
- Feature-based folder organization
- Service-based API abstraction
- Environment-based configuration
- Reactive RxJS data handling

`forkJoin` is intentionally used to:

- Execute API requests in parallel
- Reduce overall loading time
- Keep data aggregation centralized within a single observable stream

---

# Assumptions & Production Improvements

The implementation focuses on delivering a clean, functional, and maintainable frontend solution within the scope and time constraints of the assessment.

The following areas would be enhanced further in a real production environment.

---

## API Structure

The assessment specification references the endpoint:

```txt
/contacts/{id}/email_addresses
```

The provided MockAPI service does not support this exact nested REST structure in the current setup.

As a workaround, email addresses are retrieved from a flat endpoint and mapped client-side using `contactId`.

---

## Design Fidelity

The implementation follows the overall structure and layout direction of the provided Figma design.

Exact visual parity such as:

- Custom SVG icons
- Exact gradients
- Advanced shadows
- Fine-grained spacing adjustments
- Pixel-perfect color matching

was intentionally simplified to prioritize:

- Core application architecture
- Functionality
- Responsiveness
- Maintainability

Angular Material Icons were used instead of importing and managing custom SVG assets.

Angular Material was used only for icon rendering purposes.

No Angular Material layout, table, form-field, paginator, or data components were used.

---

## Theming & Design System

The current implementation uses a simplified SCSS styling structure.

In a production-scale application, the following would typically be implemented:

- SCSS design tokens
- Shared theme configuration
- Typography scales
- Reusable UI primitives
- Centralized design system architecture

---

## Architecture & Scalability

The application already uses:

- Standalone Angular components
- Feature separation
- Service abstraction

In a larger-scale production application, additional improvements could include:

- Route-level lazy loading
- Shared UI libraries
- Global state management
- API interceptors
- Shared/core module separation
- Advanced environment configuration
- Request caching strategies

---

## Error Handling

Error handling was intentionally kept lightweight for assessment simplicity.

A production-grade implementation would typically include:

- Global HTTP interceptors
- Retry and fallback strategies
- User-friendly notification/toast system
- Logging and monitoring integration

---

## Accessibility & UX

Basic accessibility considerations such as semantic structure and button labels are included.

Further production improvements could include:

- Full keyboard navigation
- Focus management
- Screen reader optimization
- WCAG accessibility auditing

---

# Testing

A unit test has been included for the `ContactService` layer.

The service test validates:

- API response handling
- Parallel API request aggregation using `forkJoin`
- Correct email-to-contact mapping using `contactId`

Due to assessment scope and time prioritization, additional component-level and integration tests were intentionally kept minimal.

In a production application, broader test coverage would typically include:

- Component interaction testing
- User interaction testing
- Error handling scenarios
- Integration testing
- Accessibility testing

---

# End-to-End Tests

End-to-end testing was intentionally not included because the assessment notes that E2E tests are discouraged to save implementation time.

---

# Additional Resources

Angular CLI Documentation:

https://angular.dev/tools/cli

MockAPI:

https://mockapi.io/

Figma Design Reference:

https://www.figma.com/file/7fMi9iwHrMOz3taFMcZDVe/Contacts-Management-Dashboard-Free-Resource-Shakir260?node-id=0%3A1