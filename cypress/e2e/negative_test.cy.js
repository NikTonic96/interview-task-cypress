const validDays = require('../fixtures/days_worked_options.json').valid

it('throws error when invalid day is used', () => {
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

    const days = Array.from(Array(30).keys())
    const invalidDays = days.filter((day) => !validDays.includes(day))
    const invalidDay = invalidDays[Math.floor(Math.random() * invalidDays.length)]

    cy.get('#response').type(invalidDay.toString())
    cy.get('#current-question > .gem-c-button').click()

    cy.get('.gem-c-error-message')
        .should('contain.text', 'There are only 7 days in a week. Please check and enter a correct value.')

})
