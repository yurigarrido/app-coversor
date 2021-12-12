/// <reference types='Cypress' />

describe('testando a aplicação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('verificando se o componente Footer está na aplicação', () => {
    cy.get('.sc-gKclnd').should('contain','ConversorMoeda!')
  })
  it('verificando se o componente de formulário está na aplicação', () => {
    cy.get('.sc-eCImPb').should('contain','Selecione uma moeda para ser usada como base:')
  })
  it('verificando se o componente de informações está na aplicação', () => {
    cy.get('.sc-bdvvtL').should('contain', 'Data da Consulta')
  })
  it('verificando se o componente de selecionar as moedas está na aplicação', () => {
    cy.get('.sc-hKwDye').should('contain', 'Euro')
  })
  it('verificando se o componente de inserir o valor está na aplicação', () => {
    cy.get('.sc-gsDKAQ').should('have.value', '')
  })
  it('verificando se a data está na aplicação', () => {
    cy.get('.sc-bdvvtL > :nth-child(4)').should('contain', '/')
  })
  it('verificando se é possivel digitar no campo de input', () => {
    cy.get('.sc-gsDKAQ')
      .clear()
      .type('10', {delay: 500})
  })
  it('verificando se após digitar o valor do input muda', () => {
    cy.get('.sc-gsDKAQ')
    .clear()
    .type('10', {delay: 500})
    .should('have.value', '10')
  })
  it('verificando se a moeda no campo de informações muda apos selecionar outra moeda', () => {
    cy.get(':nth-child(1) > div > h3').should('have.text', 'Dólar Americano')
    cy.get('.sc-hKwDye')
      .select('Dolár')
      .should('have.value', 'USD')
      cy.get('.sc-bdvvtL > :nth-child(2) > div > h3').should('not.contain', 'Dolár')
  })
  it('verificando se quando aumenta o valor da moeda selecionada o valor no campo de informação muda', () => {
    cy.get(':nth-child(1) > div > h4').should('contain', '0')
    cy.get('.sc-gsDKAQ').type('1{backspace}{backspace}2', {delay: 1000})
    cy.get(':nth-child(1) > div > h4').should('contain', '2')
  })
})