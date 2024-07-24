describe('test', () => {
  it('count test', () => {
    cy.visit('/')
    cy.get(`[data-e2e="e2e-button"]`).click()
    expect(cy.get(`[data-e2e="e2e-button"]`).contains("count is 1"))
  })
})