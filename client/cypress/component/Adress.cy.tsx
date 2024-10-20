import React from "react";
import { Provider } from "react-redux";
import Adress from "../../src/pages/shopping/AdressCheckout";
import { store } from "../../src/store/store";
import { BrowserRouter } from "react-router-dom";
describe("Adress.cy.tsx", () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Adress />
        </Provider>
      </BrowserRouter>
    );
  });
  it("fail", () => {
    cy.contains(/Please input your City!/i).should("not.exist");
    cy.contains(/Please input your Street!/i).should("not.exist");

    cy.contains(/Please input your Adress!/i).should("not.exist");

    cy.contains(/Please input your Postal code!/i).should("not.exist");
    cy.getdata("city").within(() => {
      cy.get("input").clear();
    });
    cy.contains(/Please input your City!/i).should("exist");
    cy.getdata("street").within(() => {
      cy.get("input").clear();
    });
    cy.contains(/Please input your Street!/i).should("exist");
    cy.getdata("adress").within(() => {
      cy.get("input").clear();
    });
    cy.getdata("postal").within(() => {
      cy.get("input").clear();
    });
    cy.contains(/Please input your Postal code!/i).should("exist");

    cy.getdata("continue").click();
  });
  it("success", () => {
    cy.getdata("city").within(() => {
      cy.get("input").clear().type("city");
    });
    cy.getdata("street").within(() => {
      cy.get("input").clear().type("street");
    });
    cy.getdata("adress").within(() => {
      cy.get("input").clear().type("adress");
    });
    cy.getdata("postal").within(() => {
      cy.get("input").clear().type("postal");
    });
    cy.getdata("continue").click();
    cy.location("pathname").should("eq", "/shop/pay");
  });
});
