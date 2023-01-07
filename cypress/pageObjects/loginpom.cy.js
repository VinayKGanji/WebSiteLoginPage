class login{

textUserName="input[placeholder='Username']";
textPassword="input[placeholder='Password']";
btnSubmit="button[type='submit']";
lblText=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

setUserName(username){
    cy.get(this.textUserName).type(username)
}
setPassword(password){
    cy.get(this.textPassword).type(password)
}
clickOnsubmit(){
    cy.get(this.btnSubmit).click()
}
verifyPage(){
cy.get(this.lblText).should('have.text','Dashboard')
}
}
export default login;