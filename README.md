# ContactsApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Assumptions & Production Improvements

The implementation focuses on delivering a clean, functional, and maintainable frontend solution within the scope and time constraints of the assessment.

The following areas would be enhanced further in a real production environment:

### API Structure
- The assessment specification references the endpoint:
  `/contacts/{id}/email_addresses`
- The provided MockAPI service does not support this exact nested REST structure in the current setup.
- As a workaround, email addresses are retrieved from a flat endpoint and mapped client-side using `contactId`.

### Parallel API Requests
- `forkJoin` is intentionally used to execute API requests in parallel for improved loading performance and reduced wait time.
- In a larger production application, this logic could additionally include:
  - Request caching
  - Retry strategies
  - Shared state management
  - Error recovery handling

### Design Fidelity
- The implementation follows the overall structure and layout direction of the provided Figma design.
- Exact visual parity (such as custom SVG icons, exact gradients, shadows, and fine-grained spacing adjustments) was intentionally simplified to prioritize core application architecture and functionality.
- Angular Material icons were used instead of importing and managing custom SVG assets.

### Theming & Design System
- The current implementation uses a simplified color palette and styling structure.
- In production, a centralized design system would typically be implemented using:
  - SCSS variables/tokens
  - Theme configuration
  - Shared typography scales
  - Reusable UI primitives

### Architecture & Scalability
- The application is already structured using standalone Angular components and feature separation.
- In a larger-scale production environment, the following could additionally be implemented:
  - Route-level lazy loading
  - Shared UI libraries
  - Core/shared feature modules
  - Global state management
  - API interceptors
  - Advanced environment configuration

### Error Handling
- Error handling was intentionally kept lightweight for assessment simplicity.
- A production-grade implementation would include:
  - Global HTTP interceptors
  - User-friendly notification/toast system
  - Logging/monitoring integration
  - Retry and fallback strategies

### Accessibility & UX
- Basic accessibility considerations such as button labels and semantic structure are included.
- Further improvements in production could include:
  - Full keyboard navigation support
  - Screen reader optimization
  - Focus management
  - WCAG accessibility auditing

### Testing
- Due to assessment scope and time prioritization, the focus was placed on application architecture and functionality.
- In production, additional coverage would typically include:
  - Unit tests
  - Integration tests
  - Component interaction tests
  - Performance and accessibility testing