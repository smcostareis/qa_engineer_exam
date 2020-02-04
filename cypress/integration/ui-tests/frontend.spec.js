/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    // start back end and front end
  })
  it('dfgd', () => {
    cy.visit('http://localhost:3000')
    cy.get('#name').type('Sergio Reis')
    cy.get('[type="button"]').click()
    cy.get('p > :nth-child(1)').contains('Sergio Reis')
  })
})
