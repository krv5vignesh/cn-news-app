/// <reference types="cypress" />

const UK_SOURCES = [
  "BBC News",
  "BBC Sport",
  "Business Insider (UK)",
  "FourFourTwo",
  "Google News (UK)",
  "Independent",
  "MTV News (UK)",
  "TalkSport",
  "The Lad Bible",
  "The Sport Bible",
  "The Times",
  "The Telegraph",
  "The Independent",
  "The Guardian",
  "The Independent (UK)",
  "The Guardian (UK)",
];

describe("News API", () => {
  context("Get latest headlines", () => {
    it("should retrieve latest headlines", () => {
      cy.request("/headlines").then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.data.articles).to.have.length.greaterThan(0);
      });
    });

    it("should have news only from UK", () => {
      cy.request("/headlines").then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.data.articles).to.have.length.greaterThan(0);
        expect(
          response.body.data.articles.some((article) =>
            UK_SOURCES.includes(article.source.name)
          )
        ).to.be.true;
      });
    });
  });

  context("Search UK News", () => {
    it("should retrieve news articles based on the keyword", () => {
      cy.request("/search/uk/covid").then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.data.articles).to.have.length.greaterThan(0);
      });
    });

    it("should have news whose source is from UK", () => {
      cy.request("/search/uk/covid").then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.data.articles).to.have.length.greaterThan(0);
        expect(
          response.body.data.articles.some((article) =>
            UK_SOURCES.includes(article.source.name)
          )
        ).to.be.true;
      });
    });
  });

  context("Search all news", () => {
    it("should retrieve news articles based on the keyword", () => {
      cy.request("/search/covid").then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.data.articles).to.have.length.greaterThan(0);
      });
    });
  });

  context("Invalid requests", () => {
    it("should retrieve news articles based on the keyword", () => {
      cy.request({ url: "/headlines/covid", failOnStatusCode: false }).then(
        (response) => {
          cy.log(JSON.stringify(response.body));
          expect(response.status).to.eq(404);
        }
      );
    });
  });
});
