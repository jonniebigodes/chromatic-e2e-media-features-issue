// Check if the desribe block is already present in Chromatic documentation
describe('Authentication - with high contrast', () => {
  it('should authenticate a user in high contrast mode ', {
      env: {
        forcedColors: 'active',
        disableAutoSnapshot: true,
      }
    }, () => {
      const email = 'test@email.com'
      const password = 'password'

      cy.visit('/login')
      // cy.wait(2000) // Works locally and generates a snapshot file correctly

      cy.get('input[name="email"]').focus({timeout: 2000})

        // Take a snapshot of the initial state of the login page
      cy.takeSnapshot('Cypress - High Contrast - Initial state of the login page')
      cy.screenshot('Cypress - High Contrast - Initial state of the login page')

      cy.get('input[name="email"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get("button[type=submit]").click()

        // Take a snapshot of the filled form
      cy.screenshot('Cypress - High Contrast - Filled form')
      cy.takeSnapshot('Cypress - High Contrast - Filled form')
    })
})
describe('Authentication - with reduced motion', () => {
  it('should authenticate a user with reduced motion ', {
    env:{
      prefersReducedMotion: 'reduce',
      disableAutoSnapshot: true,
    }
  }, () => {
    const email = 'test@email.com'
    const password = 'password'


    cy.visit('/login')

     // cy.wait(2000) // Works locally and generates a snapshot file correctly

     cy.get('input[name="email"]').focus({timeout: 2000})

    // Take a snapshot of the initial state of the login page
    cy.takeSnapshot('Cypress - Reduced Motion - Initial state of the login page')
    cy.screenshot('Cypress - Reduced Motion - Initial state of the login page')

    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)

    cy.get("button[type=submit]").click()

    // Take a snapshot of the filled form
    cy.screenshot('Cypress - Reduced Motion - Filled form')
    cy.takeSnapshot('Cypress - Reduced Motion - Filled form')
  })
})