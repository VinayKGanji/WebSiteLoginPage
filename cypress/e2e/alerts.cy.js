///<reference types="cypress"/>
before(()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})
describe('Handling Alerts', ()=>{
    
it('Test Simple Alert',()=>{
cy.on('window:alert',(text)=>{
expect(text).equal('I am a JS Alert')
})
cy.contains('Click for JS Alert').click()
})
})
it('TEST Confirm Alert',()=>{

    cy.on('window:confirm',()=>{
        return false
    })
    cy.contains('Click for JS Confirm').click()
    })

    it.only('TEST Prompt Alert',()=>{
        cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('Vinay Ganji')
        })
        cy.contains('Click for JS Prompt').click()
    })

