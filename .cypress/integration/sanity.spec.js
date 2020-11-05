it('works!', () => {
  cy.visit('/')

  cy.get('a > .navbar-brand').should('have.attr', 'alt', 'Vot Diaspora')
})
