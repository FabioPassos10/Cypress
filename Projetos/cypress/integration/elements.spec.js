describe('Trabalhando com elementos basicos', () => {
    it('Textos', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain','Cuidado onde clica, muitas armadilhas...')
        cy.get('span').should('contain','Cuidado onde clica, muitas armadilhas...')
        cy.get('.facilAchar').should('contain','Cuidado onde clica, muitas armadilhas...')
    });
    it.only('Links', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('contain', 'Voltou')
        cy.reload();
    });
});