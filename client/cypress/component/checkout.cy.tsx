//<reference path="../support/commands.d.ts" />//

import React from "react";
import { Provider } from "react-redux";
import Procheck from "../../src/pages/shopping/Procheck";
import Header from "../../src/components/shopping/Header";
import { store } from "../../src/store/store";
import { BrowserRouter } from "react-router-dom";
describe("checkpath", () => {
  it("back", () => {
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Procheck></Procheck>
        </Provider>
      </BrowserRouter>
    );
    cy.getdata("back").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/shop/listing");
    });
  });
  it("select", () => {
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Procheck></Procheck>
        </Provider>
      </BrowserRouter>
    );
    cy.getdata("noproduct").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/shop/listing");
    });
  });
  it("header", () => {
    cy.viewport(1000, 800);
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );
    cy.getdata("icon").click();
    cy.location("pathname").should("eq", "/shop/checkout");
    cy.getdata("Home").click();
    cy.location("pathname").should("eq", "/shop/listing");
    cy.getdata("droper").click();
    cy.contains(/Account/i).should("be.visible");
    cy.contains(/login/i).should("be.visible");
    cy.getdata("droper").click();
    cy.contains(/Account/i).should("not.be.visible");
    cy.contains(/login/i).should("not.be.visible");
  });
});
