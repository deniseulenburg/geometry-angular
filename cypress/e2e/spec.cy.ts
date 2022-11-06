describe('Angular Geometry', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Perimeter & area of rectangle', () => {
    cy.contains('Rectangle').click()
    
    cy.get('.mat-form-field-flex').first().click()
    cy.contains('cm').click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Area').click()

    cy.get('.mat-input-element').first().clear().type("3")
    cy.get('.mat-input-element').eq(1).clear().type("4")
    cy.contains("Calculate").click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Perimeter').click()

    cy.contains("Calculate").click()
  })

  it('Perimeter & area of square', () => {
    cy.contains('Square').click()
    
    cy.get('.mat-form-field-flex').first().click()
    cy.contains('dm').click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Area').click()

    cy.get('.mat-input-element').first().clear().type("5")
    cy.contains("Calculate").click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Perimeter').click()

    cy.contains("Calculate").click()
  })

  it('Perimeter & area of circle', () => {
    cy.contains('Circle').click()
    
    cy.get('.mat-form-field-flex').first().click()
    cy.contains('km').click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Area').click()

    cy.get('.mat-input-element').first().clear().type("6")
    cy.contains("Calculate").click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Perimeter').click()

    cy.contains("Calculate").click()
  })

  it('Perimeter & area of triangle', () => {
    cy.contains('Triangle').click()
    
    cy.get('.mat-form-field-flex').first().click()
    cy.contains('km').click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Area').click()

    cy.get('.mat-input-element').first().clear().type("8")
    cy.get('.mat-input-element').eq(1).clear().type("9")
    cy.contains("Calculate").click()

    cy.get('.mat-form-field-flex').eq(1).click()
    cy.contains('Perimeter').click()
    
    cy.get('.mat-input-element').first().clear().type("10")
    cy.get('.mat-input-element').eq(1).clear().type("11")
    cy.get('.mat-input-element').eq(2).clear().type("12")
    cy.contains("Calculate").click()
  })
})