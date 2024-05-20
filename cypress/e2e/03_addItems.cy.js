describe("process of add item and remove it",()=>{

    beforeEach("should add item to cart successfully ",()=>{
        cy.visit("https://www.saucedemo.com/v1/inventory.html");
    });


    it("add item",()=>{
        cy.visit("https://www.saucedemo.com/v1/inventory-item.html?id=4");
        cy.get('.btn_primary').click();
        cy.visit("https://www.saucedemo.com/v1/cart.html");
        cy.get('#shopping_cart_container').should("contain","1");
        cy.go('back');
    });
    
    it("remove an item",()=>{
        cy.visit("https://www.saucedemo.com/v1/inventory-item.html?id=4");
        cy.get('.btn_primary').click();
        cy.visit("https://www.saucedemo.com/v1/cart.html");
        cy.get('.item_pricebar > .btn_secondary').click();
        cy.get('.cart_quantity').should('have.length',0);
    })

    
})