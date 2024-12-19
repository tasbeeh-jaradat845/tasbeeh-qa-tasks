class loginActions{
    openLoginPage(){
        cy.visit('/customer/account/login/');
        return this;
    }
    typeInEmailInputField(email){
        cy.get("#email").type(email)
        return this;
    }
    typeInPasswordInputField(password){
        cy.get("#pass").type(password)    }
}
export default loginActions;