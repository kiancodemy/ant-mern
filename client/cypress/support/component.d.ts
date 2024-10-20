// cypress/support/commands.d.ts or component.d.ts

import { mount } from "cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;

      getdata(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
