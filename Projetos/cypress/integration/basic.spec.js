describe('Cypress basic', () => {
    it('Visitando uma página e fazendo assertiva no título', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title()
        .should('be.equal','Campo de Treinamento')
        .should('contain','Campo').debug();
        
    });
    it('Localizar e interagir com um elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click().should("have.value", "Obrigado!");
    });
});