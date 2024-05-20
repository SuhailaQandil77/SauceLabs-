describe("ChechoutOverview", () => {
  beforeEach("open page checkout overview ", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.visit("https://www.saucedemo.com/v1/inventory-item.html?id=4");
    cy.get(".btn_primary").click();
    cy.visit("https://www.saucedemo.com/v1/cart.html");
    cy.get(".btn_action").click();
    cy.url().should(
      "include",
      "https://www.saucedemo.com/v1/checkout-step-one.html"
    );
    cy.get('[data-test="firstName"]').type("suhila");
    cy.get('[data-test="lastName"]').type("qandil");
    cy.get('[data-test="postalCode"]').type(456237);
    cy.get(".btn_primary").click();
    cy.url().should(
      "include",
      "https://www.saucedemo.com/v1/checkout-step-two.html"
    );
  });

  it("check cancel button", () => {
    cy.get(".cart_cancel_link").click();
    cy.url().should("include", "https://www.saucedemo.com/v1/inventory.html");
  });

  it("check Finish button", () => {
    cy.get(".btn_action").click();
    cy.url().should(
      "include",
      "https://www.saucedemo.com/v1/checkout-complete.html"
    );
    cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible");
  });

  it.only("check", () => {
    cy.get(".bm-burger-button").click();
    cy.get("#reset_sidebar_link").click();
    cy.get("#reset_sidebar_link").should("exist");
  });
});
