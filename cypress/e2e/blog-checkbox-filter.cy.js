describe('Blog Page Filter', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/blog')
      cy.viewport('macbook-15')
  })

  it('clicks web design filter', () => {
      cy.getByValue('Web Design').check()
      cy.get('#blog-listing > div.Flex-sc-7nl75q-0.dbESnA > div.Flex-sc-7nl75q-0.dHlqGd').each(($div) => {
          cy.wrap($div).find('h6').should('exist').contains('Web Design')
      })
  })

  it('clicks blockchain marketing filter', () => {
      cy.getByValue('Blockchain Marketing').check()
      cy.get('#blog-listing > div.Flex-sc-7nl75q-0.dbESnA > div.Flex-sc-7nl75q-0.dHlqGd').each(($div) => {
          cy.wrap($div).find('h6').should('exist').contains('Blockchain Marketing')
      })
  })

  it('clicks seo filter', () => {
      cy.getByValue('SEO').check()
      cy.get('#blog-listing > div.Flex-sc-7nl75q-0.dbESnA > div.Flex-sc-7nl75q-0.dHlqGd').each(($div) => {
          cy.wrap($div).find('h6').should('exist').contains('SEO')
      })
  })

  it('clicks marketing filter', () => {
      cy.getByValue('Marketing').check()
      cy.get('#blog-listing > div.Flex-sc-7nl75q-0.dbESnA > div.Flex-sc-7nl75q-0.dHlqGd').each(($div) => {
          cy.wrap($div).find('h6').should('exist').contains('Marketing')
      })
  })
})