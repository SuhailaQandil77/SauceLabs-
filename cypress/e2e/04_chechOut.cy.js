describe("process of add item and remove it",()=>{

    beforeEach("open checkout page ",()=>{
        cy.visit("https://www.saucedemo.com/v1/inventory.html");
        cy.visit("https://www.saucedemo.com/v1/inventory-item.html?id=4");
        cy.get('.btn_primary').click();
        cy.visit('https://www.saucedemo.com/v1/cart.html');
        cy.get('.btn_action').click();
        cy.url().should('include', 'https://www.saucedemo.com/v1/checkout-step-one.html');
        
    });

    it("1_valid first name and last name and zip code",()=>{
        cy.get('[data-test="firstName"]').type("suhila");
        cy.get('[data-test="lastName"]').type("qandil");
        cy.get('[data-test="postalCode"]').type(456237);
        cy.get('.btn_primary').click();
        cy.url().should('include', 'https://www.saucedemo.com/v1/checkout-step-two.html');
    });

    it("2_empty first name and last name and zip code",()=>{
        cy.get('.btn_primary').click();
        cy.contains(" First Name is required").should("be.visible");
    });

    it("3_valid first name and empty last name and empty zip code",()=>{
        cy.get('[data-test="firstName"]').type("suhila");
        cy.get('.btn_primary').click();
        cy.contains("Last Name is required").should("be.visible");
    });

    it("4_valid first name and valid last name and  empty zip code",()=>{
        cy.get('[data-test="firstName"]').type("suhila");
        cy.get('[data-test="lastName"]').type("qandil");
        cy.get('.btn_primary').click();
        cy.contains("Postal Code is required").should("be.visible");
    });

    
    it("5_valid first name and empty last name and valid zip code",()=>{
        cy.get('[data-test="firstName"]').type("suhila");
        cy.get('[data-test="postalCode"]').type("456237");
        cy.get('.btn_primary').click();
        cy.contains("Last Name is required").should("be.visible");
    });


    it("6_empty first name and valid last name and empty zip code",()=>{
        cy.get('[data-test="lastName"]').type("qandil");
        cy.get('.btn_primary').click();
        cy.contains(" First Name is required").should("be.visible");
    });
    
    it("7_empty first name and valid last name and valid zip code",()=>{
        cy.get('[data-test="lastName"]').type("qandil");
        cy.get('[data-test="postalCode"]').type("456237");
        cy.get('.btn_primary').click();
        cy.contains(" First Name is required").should("be.visible");
    });

    
    it("8_empty first name and empty last name and valid zip code",()=>{
        cy.get('[data-test="postalCode"]').type("456237");
        cy.get('.btn_primary').click();
        cy.contains(" First Name is required").should("be.visible");
    });

    

    
})

