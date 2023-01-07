///<reference types="cypress"/>
import login from "../pageObjects/loginpom.cy";
describe('Login in the page',()=>{

it('lgin', ()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
const ln=new login()
cy.fixture('example').then((data)=>{
    ln.setUserName(data.Username)
    ln.setPassword(data.UserPassword)
    ln.clickOnsubmit()
    ln.verifyPage()

})
})
})

