/// <reference types="cypress" />

describe("News app - Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the home page and display latest news", () => {
    cy.get(".article-card").should("have.length.at.least", 1);
  });

  it("should display the search bar", () => {
    cy.get("#search-bar").should("be.visible");
  });

  it("should display results when searching for a keyword and clicking the search button", () => {
    cy.get("#search-bar").should("be.visible");
    cy.get("#search-bar").type("Covid");
    cy.get(".search-button").click();
    cy.wait(1000);
    cy.get(".article-card").should("have.length.at.least", 1);
    cy.get(".article-title").eq(0).should("contain", "Covid");
  });

  it("should display search results on clicking enter", () => {
    cy.get("#search-bar").should("be.visible");
    cy.get("#search-bar").type("Covid");
    cy.get("#search-bar").type("{enter}");
    cy.wait(1000);
    cy.get(".article-card").should("have.length.at.least", 1);
    cy.get(".article-title").eq(0).should("contain", "Covid");
  });

  it("should display news when next page is clicked", () => {
    cy.get("button[title='Go to next page']").click();
    cy.wait(1000);
    cy.get(".article-card").should("have.length.at.least", 1);
  });

  it("should display news when back button is clicked", () => {
    cy.get("button[title='Go to next page']").click();
    cy.wait(1000);
    cy.get(".article-card").should("have.length.at.least", 1);
    cy.get("button[title='Go to next page']").click();
    cy.wait(1000);
    cy.get(".article-card").should("have.length.at.least", 1);
  });

  it('should display more results when "rows per page" value is changed', () => {
    cy.get(".pagination .MuiSelect-select").click();
    cy.get("li.MuiMenuItem-root").eq(1).click();
    cy.wait(1000);
    cy.get(".article-card").should("have.length", 25);
  });
});
