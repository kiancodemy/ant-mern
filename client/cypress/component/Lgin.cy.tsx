//<reference path="../support/commands.d.ts" />//

import React from "react";
import { Provider } from "react-redux";
import Login from "../../src/components/form/LoginForm";
import { store } from "../../src/store/store";
import { BrowserRouter } from "react-router-dom";

describe("login", () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
  });
  it("failed", () => {
    cy.contains(/dont you have acount?/i);
    cy.contains(/Please input your email!/i).should("not.exist");
    cy.contains(/Please input your password!/i).should("not.exist");

    cy.getdata("submitter").click();
    cy.contains(/Please input your email!/i).should("exist");
    cy.contains(/Please input your password!/i).should("exist");
    cy.wait(3000);
  });
  it("success", () => {
    cy.getdata("emailer").within(() => {
      cy.get("input").type("test@gmail.com");
    });
    cy.getdata("passworder").within(() => {
      cy.get("input").type("test");
    });
    cy.getdata("submitter").click();
  });
});
