class sharedAssertions{
    checkPageTitleContains(value){
        cy.get(".page-title").should("contain",value)
        return this;
    }
}
export default sharedAssertions;