describe("Check local server", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080/");
  });
  it("has the correct headline", () => {
    cy.contains("h1", "Ich erstelle Websites, die Sie voranbringen");
  });

  it("navigates to /leistungen/web-design", () => {
    cy.get("nav a").contains("Leistungen").click();
    cy.get("li a").contains("Web Design").click();
    cy.url().should("include", "/leistungen/web-design");
    cy.contains("h1", "Web Design");
  });
  it("navigates to /leistungen/web-development", () => {
    cy.get("nav a").contains("Leistungen").click();
    cy.get("li a").contains("Web Development").click();
    cy.url().should("include", "/leistungen/web-development");
    cy.contains("h1", "Web Development");
  });
  it("navigates to /leistungen/website-optimierung", () => {
    cy.get("nav a").contains("Leistungen").click();
    cy.get("li a").contains("Optimierung").click();
    cy.url().should("include", "/leistungen/website-optimierung");
    cy.contains("h1", "Website Optimierung");
  });
  it("navigates to /beispiele/landingpage", () => {
    cy.get("nav a").contains("Beispiele").click();
    cy.get("li a").contains("Landingpage").click();
    cy.url().should("include", "/beispiele/landingpage");
    cy.contains("h1", "Landingpage");
  });
  it("navigates to /beispiele/business-website", () => {
    cy.get("nav a").contains("Beispiele").click();
    cy.get("li a").contains("Business Website").click();
    cy.url().should("include", "/beispiele/business-website");
    cy.contains("h1", "Business Website");
  });
  it("navigates to /beispiele/portfolio", () => {
    cy.get("nav a").contains("Beispiele").click();
    cy.get("li a").contains("Portfolio").click();
    cy.url().should("include", "/beispiele/portfolio");
    cy.contains("h1", "Portfolio");
  });
  it("navigates to /beispiele/event-website", () => {
    cy.get("nav a").contains("Beispiele").click();
    cy.get("li a").contains("Event Website").click();
    cy.url().should("include", "/beispiele/event-website");
    cy.contains("h1", "Event Website");
  });

  it("navigates to /kontakt", () => {
    cy.get("nav a").contains("Kontakt").click();
    cy.url().should("include", "/kontakt");
    cy.contains("h1", "Melden Sie sich bei mir!");
  });
  it("navigates to /impressum", () => {
    cy.get("footer a").contains("Impressum").click();
    cy.url().should("include", "/impressum");
    cy.contains("h1", "Impressum");
  });
});

const urls = [
  "http://localhost:8080/leistungen",
  "http://localhost:8080/leistungen/web-design",
  "http://localhost:8080/leistungen/web-development",
  "http://localhost:8080/leistungen/website-optimierung",
  "http://localhost:8080/beispiele",
  "http://localhost:8080/beispiele/landingpage",
  "http://localhost:8080/beispiele/business-website",
  "http://localhost:8080/beispiele/event-website",
  "http://localhost:8080/beispiele/portfolio",
  "http://localhost:8080/kontakt",
  "http://localhost:8080/impressum",
];

describe("Accessibility tests for home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.viewport("macbook-16");
    cy.checkA11y();
  });
  it("Check mobile viewport for a11y", () => {
    cy.viewport("iphone-8");
    cy.checkA11y();
  });
  it("Check tablet viewport for a11y", () => {
    cy.viewport("ipad-2");
    cy.checkA11y();
  });
});

describe("Accessibility tests pages", () => {
  urls.forEach((url) => {
    it(`Accessibility tests on ${url}`, () => {
      cy.visit(url).get("main").injectAxe();
    });
    it("Has no detectable accessibility violations on load", () => {
      cy.viewport("macbook-16");
      cy.checkA11y();
    });
    it("Check mobile viewport for a11y", () => {
      cy.viewport("iphone-8");
      cy.checkA11y();
    });
    it("Check tablet viewport for a11y", () => {
      cy.viewport("ipad-2");
      cy.checkA11y();
    });
  });
});
