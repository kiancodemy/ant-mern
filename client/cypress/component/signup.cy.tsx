//<reference path="../support/commands.d.ts" />//

import React from "react";
import { Provider } from "react-redux";
import Signup from "../../src/components/form/SignupForm";
import { store } from "../../src/store/store";
import { BrowserRouter } from "react-router-dom";

describe("signup", () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </BrowserRouter>
    );
  });
  it("failed", () => {
    cy.contains(/Please input your username!/i).should("not.exist");
    cy.contains(/Please input your email!/i).should("not.exist");
    cy.contains(/Please input your password!/i).should("not.exist");

    cy.getdata("signbutton").click();

    cy.contains(/Please input your username!/i).should("exist");
    cy.contains(/Please input your email!/i).should("exist");
    cy.contains(/Please input your password!/i).should("exist");
  });
  it.only("success", () => {
    cy.getdata("usernames").within(() => {
      cy.get("input").type("ogooonoc");
    });
    cy.getdata("emails").within(() => {
      cy.get("input").type("teodonootor@gmail.com.com");
    });
    cy.getdata("passwords").within(() => {
      cy.get("input").type("ooonoot");
    });
    cy.getdata("signbutton").click();
    cy.intercept("POST", "http://localhost:4000/users/register").as(
      "registerUserFail"
    );

    cy.contains("created successfully");
  });
});
