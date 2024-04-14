/// <references types = "cypress">

describe('Helpers...', () => {
    // before(() => { //executa 1 vez antes de todos os testes
    //     cy.visit('https://wcaquino.me/cypress/componentes.html');
    // });


    it('Wrap', () => {
       const obj = {nome: "Fabio", idade: 20} 
       expect(obj).to.have.property('nome');
       cy.wrap(obj).should('have.property','nome');


       cy.visit('https://wcaquino.me/cypress/componentes.html');

       cy.get("#formNome").type("Deu certo ?");
    });
});