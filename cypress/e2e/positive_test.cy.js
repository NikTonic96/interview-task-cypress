const validDays = require('../fixtures/days_worked_options.json').valid

it('calculates holiday days', () => {
    // cy.visit('/')
    //     .get('[data-accept-cookies="true"]')
    //     .click()
    //
    // cy.contains('Start now').click()
    //
    // cy.get('#response-0').click()
    // cy.get('#current-question > .gem-c-button').click()
    //
    // cy.get('#response-0').click()
    // cy.get('#current-question > .gem-c-button').click()

    const validDay = validDays[Math.floor(Math.random() * validDays.length)]
    cy.get('#response').type(validDay)
    cy.get('#current-question > .gem-c-button').click()

    const expectedTitle = 'Calculate holiday entitlement:'
    cy.get('.govuk-caption-xl').should('contain.text', expectedTitle)

    const expectedUrl = `y/days-worked-per-week/full-year/${validDay}`
    cy.url().should('include', expectedUrl)
})