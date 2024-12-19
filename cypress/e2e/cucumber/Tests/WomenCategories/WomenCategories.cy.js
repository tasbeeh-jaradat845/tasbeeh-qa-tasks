// Given the user visits sign in page in magento website
// When the user clicks on What's New
// Then women categories will be printed

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("the user visits sign in page in magento website",()=>{
    cy.visit('/');
})
When("the user clicks on What's New",()=>{
    cy.get("#ui-id-3").click()
})
Then("women categories will be printed",()=>{
    cy.get(".categories-menu .items").first().then((womenList)=>{
        cy.wrap(womenList).find(".item a").then((categories)=>{
            for(let i=0;i<categories.length;i++){
                cy.wrap(categories[i]).invoke('text').then((categoryName)=>{
                    cy.log(categoryName)
                })
            }
        })
    })
})