// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fazerLoginHomolog', () => {
  cy.get('#chave').type('kleber.minsait');
  cy.get('#senha').type('celepar2024');
  cy.get('#btValidar').click();
  cy.get(':nth-child(4) > :nth-child(1) > a > img').click();
  cy.get('[href="moduloValidacao.do?action=entrarSistema&codSistema=75"]').click();
});

Cypress.Commands.add('fazerLoginDev', () => {
  cy.get('#chave').type('kleber.minsait');
  cy.get('#senha').type('celepar2024');
  cy.get('#btValidar').click();
  cy.get(':nth-child(4) > :nth-child(1) > a > img').click();
  cy.get('[href="moduloValidacao.do?action=entrarSistema&codSistema=84"]').click();
});

Cypress.Commands.add('printErro', (testTitle) => {
  const cleanTitle = testTitle.replace(/[:\/]/g, '') // limpar caracteres inválidos no nome
  cy.screenshot(`falhas/${cleanTitle}`, { capture: 'runner' })
})