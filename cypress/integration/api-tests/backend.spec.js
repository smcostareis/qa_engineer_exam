/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Simple request expecting the correct name and status code on the response', () => {
    cy.request('POST', 'http://localhost:3001', { name: 'Sergio Reis' })
      .then((response) => {
    expect(response.body).to.have.property('name', 'Sergio Reis')
    expect(resp.status).to.eq(200)
  })
  })
})
