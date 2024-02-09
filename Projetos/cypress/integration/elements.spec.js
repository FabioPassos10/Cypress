describe('Trabalhando com elementos basicos', () => {
    before(() => { //executa 1 vez antes de todos os testes
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });
    beforeEach(() => {  //executa antes de cada um dos testes
        cy.reload();
    });
    it('Textos', () => {
        
        cy.get('body').should('contain','Cuidado onde clica, muitas armadilhas...')
        cy.get('span').should('contain','Cuidado onde clica, muitas armadilhas...')
        cy.get('.facilAchar').should('contain','Cuidado onde clica, muitas armadilhas...')
    });
    it('Links', () => {
        
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('contain', 'Voltou')
        cy.reload();
    });

    it('Campos de texto', () => {
        cy.get('#formNome').type("Fábio Eloy Passos")
        cy.get('#formNome').should('have.value','Fábio Eloy Passos')
        cy.get('#elementosForm\\:sugestoes').type("testando se realmente da para escrever um texto grande com muitos caracteres aleatorios neste campo de textarea").should('have','testando se realmente da para escrever um texto grande com muitos caracteres aleatorios neste campo de textarea')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type("Oi")
        cy.get('[data-cy=dataSobrenome]').type('teste12345678{backspace}{backspace}{backspace}{backspace}{backspace}').should('have.value','teste123')
        cy.get('[data-cy=dataSobrenome]').clear().type('teste12345678{selectall}teste').should('have.value','teste')
    });

    it('RedioButton', () => {
        cy.get("[name='formSexo']").should('have.length',2)
        cy.get('#formSexoMasc').check().should('be.checked')
        cy.get('#formSexoFem').should('not.to.be.checked')
    });
    it.only('Checkbox', () => {
        cy.get('#formComidaCarne').check()
        cy.get('#formComidaFrango').check()
        cy.get('#formComidaPizza').check()
        cy.get('#formComidaVegetariana').check()
        cy.get("[name='formComidaFavorita']").should('have.length',4)
        cy.get('#formComidaVegetariana').click()

        cy.get("[name='formComidaFavorita']").click({multiple:true})
    });
});