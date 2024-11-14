/// <reference types = "cypress"/>

describe("Selectores",()=>{
    it("Selectors-task1",()=>{
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand.ng-binding")
        cy.contains("h1","Sign up")
        cy.get("p > [ui-sref='app.login']")
        cy.get('[show-authed="false"] > .nav-item').first()
        cy.get('[show-authed="false"] > .nav-item').last()
        cy.get('[class="form-group"]').eq(0)
        cy.get('[class="form-group"]').eq(1)
        cy.get('[class="form-group"]').eq(2)
        cy.get('[type="submit"]')
        cy.get('[class="logo-font ng-binding"]').next()
        cy.get('.attribution.ng-binding').prev()


    })
})