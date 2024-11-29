/// <reference types = "cypress"/>

describe("Task2 Scenario",()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)        
    })
    it("Validate that the user can update products from the shopping cart",()=>{
        // Add a product to cart
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
        // Update product from cart
        cy.get(".showcart").click()
        cy.get(".action.edit").click()
        cy.get("#qty").clear().type("2")
        cy.get("#product-updatecart-button").click()
        cy.wait(10000)
        cy.get('[role="alert"]').should("contain","Circe Hooded Ice Fleece was updated in your shopping cart.")
        cy.get('[title="Qty"]').should("have.value","2")
    })
    it("Validate that the user can add a review to a product",()=>{
        cy.get("#tab-label-reviews-title").click()
        cy.get("#Rating_4_label").click({force: true})
        cy.get("#nickname_field").type("Hikari")
        cy.get("#summary_field").type("Nice")
        cy.get("#review_field").type("It suits me well!!")
        cy.get(".review-form-actions .submit").click()
        cy.wait(1000)
        cy.get('[role="alert"]').should("contain","You submitted your review for moderation.")

    })
})