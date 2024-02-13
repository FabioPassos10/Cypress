
describe('Esperas', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });
    beforeEach(() => {
        cy.reload()
    });

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Testando ...')
    });

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')

    });

    it('Cuidado com o que pesquisa', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')
        cy.get('#lista li span').should('contain', 'Item 2')
    });

    it('Uso do wait', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', { timeout: 1000 }).should('exist')


        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    });

    it.only('Should vs then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then()
    });
});