describe("Login test cases", () => {
    beforeEach("Visit the website", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    });

    it("0_Should  login successfully with valid user name & password",()=>  {
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html');

        //choose item from list
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html');
        });


    it("1_Should not login successfully with valid user name & password",()=>  {
    cy.get("#user-name").type("suhaila_qandil");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Username and password do not match any user in this service").should("be.visible");
    });


    it("2_Should not login  with valid user name & invalid password",()=>  {
    cy.get("#user-name").type("suhaila_qandil");
    cy.get("#password").type("secret_sau");
    cy.get("#login-button").click();
    cy.contains("Username and password do not match any user in this service").should("be.visible");
    });


    it("3_Should not login  with invalid user name & valid password",()=>    { 
    cy.get("#user-name").type("suhailaqanill");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Username and password do not match any user in this service").should("be.visible");
});


    it("4_Should not login  with invalid user name & invalid password",()=>  {
    cy.get("#user-name").type("suhailaqanill");
    cy.get("#password").type("secretuce");
    cy.get("#login-button").click();
    cy.contains("Username and password do not match any user in this service").should("be.visible");
    });


    it("5_Should not login  with empty user name &  password",()=>  {
    cy.get("#login-button").click();
    cy.contains("Username is required").should("be.visible");
    });


    it("6_Should not login  with empty user name & none empty password",()=>  {
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Username is required").should("be.visible");
    });


    it("7_Should not login  with none empty user name &  empty password",()=>  {
    cy.get("#user-name").type("suhaila_qandil");
    cy.get("#login-button").click();
    cy.contains("Password is required").should("be.visible");
    cy.get(".error-button").click();
    });



});
