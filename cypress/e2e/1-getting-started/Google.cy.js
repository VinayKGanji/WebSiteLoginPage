///<reference types="cypress"/>

describe('Opening of Google Home Page', ()=>{

it('Homepage', ()=>{

cy.visit('https://www.google.co.in/')
cy.xpath("//input[@title='Search']").type('vinay{enter}')
  

})
})