describe('Cypress basic', () => {
    it('Visitando uma página e fazendo assertiva no título', () => {
        cy.visit('https://front.serverest.dev/login');
        cy.title()
        .should('be.equal','Front - ServeRest')
        .should('contain','Rest');
        
    });
});