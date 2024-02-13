describe('Cypress basic', () => {
    it.only('Visitando uma página e fazendo assertiva no título', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.title()
        .should('be.equal','Campo de Treinamento')
        .should('contain','Campo').debug();
        
        cy.title().then(title=>{
            console.log(title);
        })
    });
    it('Localizar e interagir com um elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click().should("have.value", "Obrigado!");
    });
});